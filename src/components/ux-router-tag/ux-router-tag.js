/*
 * @Author: zhangyao
 * @Date: 2020-11-27 17:15:11
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-24 09:37:09
 */
export default{
    data(){
        return{
            router_list:[]
        }
    },
    watch: {
        $route:{
            handler:'getBreadcrumb',
            immediate: true
        }
    },
    methods:{
        getBreadcrumb(){
            let matched=this.$route.matched.filter(item=>{return item.name&&item.meta&&item.meta.title})
            this.router_list=[]
            matched.forEach(item => {
                 this.router_list.push({
                    path: item.path,
                    regex: item.regex,
                    name: item.name,
                    title: item.meta.title,
                    icon: item.meta.icon,
                    redirect: item.redirect
                 })
            });
        },
        //跳转
        toPage(route){
            let path=route.path.replace(/\:uuid/,this.$router.currentRoute.params.uuid);;
            this.$router.push({
              path:path
            })
        }
    },
    mounted(){
    }
}