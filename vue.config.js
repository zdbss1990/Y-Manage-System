const webpack=require('webpack')
const path=require('path')
const CompressionWebpackPlugin=require('compression-webpack-plugin'); //压缩文件gzip
const TerserPlugin=require('terser-webpack-plugin');
const BundleAnalyzerPlugin=require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const _resolve = dir => path.resolve(__dirname, dir);
module.exports={
    publicPath:'/', //打包后读取资源的路径
    assetsDir:'static',//静态资源文件打包地址
    lintOnSave:false,//是否启用eslint
    transpileDependencies:[],//babel显示转换一些依赖
    productionSourceMap:false, //关闭生产环境的sourceMap
    css:{
        //提取css文件
        extract:process.env.NODE_ENV==='production',
        sourceMap:process.env.NODE_ENV==='development',
        loaderOptions:{
            //配置全局的scss
           scss:{
                prependData:`
                    @import "~@css/variables.scss";
                    @import '~@css/all.scss';
                `
           }
        }
    },
    //修改favicon
    pwa:{
        iconPaths: {
            favicon32     : 'favicon.ico',
            favicon16     : 'favicon.ico',
            appleTouchIcon: 'favicon.ico',
            maskIcon      : 'favicon.ico',
            msTileImage   : 'favicon.ico'
          }
    },
    devServer:{
        open:true,
        compress:true,//对所有服务器启用gzip压缩
        port:5200,
        hot:true,
        host:'192.168.158.1',
        overlay:{ //错误遮罩
            warnings: true,
            errors: true   
        }
    },
    //改写loader
    chainWebpack: config => {
        config.resolve.alias
            .set('@', _resolve('src'))
            .set('@assets',_resolve('src/assets'))
            .set('@css', _resolve('src/assets/css'))
            .set('@utils',_resolve('src/utils'))
            .set('@components',_resolve('src/components'))
            .set('@views',_resolve('src/views'))
            .set('@store',_resolve('src/store'))
        config.plugin('provide').use(webpack.ProvidePlugin,[{
                '$d3':'d3'
        }])
        // config.plugin('webpack-bundle-analyzer').use(BundleAnalyzerPlugin)
        if(process.env.NODE_ENV==='production'){
            //移除prefetch插件 防止浏览器加载完，利用空余时间获取用户未来可能访问的内容
            config.plugins.delete('prefetch')
            //删除预加载 用来指定页面加载后被用到的资源
            config.plugins.delete('preload')
            //压缩文件
            config.plugin('compress').use(CompressionWebpackPlugin,[
                {
                    filename:'[path].gz[query]',
                    algorithm: 'gzip',
                    test:'/\.js$|\.html$|\.css$/', //需要压缩的文件正则
                    threshold:1024, //超过10Kb就压缩
                    deleteOriginalAssets: false //压缩后保留原文件
                }
            ])
            //分割代码
            config.optimization.splitChunks({
                //模块组
                chunks:'all', //所有模块分割无论同步还是异步
                minSize: 20000, // 依赖包超过20000bit将被单独打包
                maxInitialRequests:Infinity, //对于entry-chunk，并行加载的verdor-chunk可以无限
                //缓存组
                cacheGroups:{
                   vendors:{
                      test:/[\\/]node_modules[\\/]/,
                      priority:10 ,//优先级
                      chunks:'initial',//只打包加载时所依赖的第三方
                      name(module){
                          const packageName=module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1] 
                          //处理package里面引入的包
                          return `${packageName.replace('@', '')}`;
                      }
                    },
                    commons:{
                       name:'chunk-commons',
                       test:_resolve('src/components'),
                       minChunks:3,//最小公用次数
                       priority:5, 
                       reuseExistingChunk:true //当有公用模块不会创建新的公用模块，而是复用现有的公用模块
                    }
                },
            })
            //把runtime部分抽离出来单独打包
            config.optimization.runtimeChunk('single');
        }
    },
    //使用plugin
    configureWebpack:config=>{
        if(process.env.NODE_ENV==='production'){
             //生产环境去掉console
          new TerserPlugin({
             terserOptions:{
                compress:{
                    warnings:false,
                    drop_console:true,
                    drop_debugger:true,
                    pure_funcs:['console.log']
                }
             }
          })
        }
       
    }
}
