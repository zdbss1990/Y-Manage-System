<!--
 * @Author: zhangyao
 * @Date: 2020-12-04 17:25:15
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-22 16:58:05
-->
<template>
    <div class="product-list-tpl border-box min-height-full bg-f p-10 radius-4">
        <el-row :gutter="24">
             <el-col :span="24">
                  <div class="f-s-18 m-b-10">{{$t('route.product_list')}}</div>
                  <p class="f-s-12 gray m-b-10">以卡片的形式展现列表.</p>
             </el-col>
             <el-col :lg="6" :md="6" class="m-t-10" v-for="(item,index) in productList" :key="index">
                 <el-card shadow="hover" class="product-card">
                     <div class="text-center f-s-14" >
                       <el-tag type="danger" class="oos" v-if="item.num<=5">缺货</el-tag>
                       <div class="product-content">
                           <img :src="item.imgUrl" class="product-img">
                       </div>
                        <div class="m-t-10 m-b-10">{{item.name}}</div>
                        <p class="f-s-12 des">{{item.des}}</p>
                        <div class="m-t-10 pre"><span>{{item.pre}}</span>元<span>起</span> <span v-if="has(item)" class="m-l-10 des"><s>{{item.old}}元</s></span></div>
                    </div>
                 </el-card>
             </el-col>
        </el-row>
        <ux-pagination class="m-t-10" :total="productList.length" :pageOptions="pageOptions" @handleCurrentChange="handleCurrentChange" @handleSizeChange="handleSizeChange"></ux-pagination>
    </div>
</template>
<script>
export default {
    data(){
        return{
            pageOptions:{
                pageSize:10,
                currentPage:1
            },
            productList:[
                {
                    imgUrl:require('@assets/image/5.jpg'),
                    name:'Note 9 Pro',
                    des:'一亿像素夜景相机，120Hz六档变速高刷屏',
                    pre:1599,
                    num:10
                },
                {
                    imgUrl:require('@assets/image/6.jpg'),
                    name:'小米全面屏电视E32C',
                    des:'全面屏设计，人工智能系统',
                    pre:899,
                    num:2
                },
                {
                    imgUrl:require('@assets/image/8.png'),
                    name:'Pro 15.6 2020款',
                    des:'从核心到视野，再次突破强大',
                    pre:6799,
                    old:6999,
                    num:1
                },
                {
                    imgUrl:require('@assets/image/10.jpg'),
                    name:'米家互联网洗烘一体机 Pro 10kg',
                    des:'智能洗烘，省心省力',
                    pre:2999,
                    num:100
                }
            ]
        }
    },
    computed:{
        has(){
            return(item)=>{
               return Reflect.has(item,'old')
            }
        }
    },
    methods:{
        handleCurrentChange(page){
            
        },
        handleSizeChange(size){
            
        }
    }
}
</script>
<style lang="scss" scoped>
.product-img{
    width: 80%;
    height: 80%;
}
.product-card{
    position: relative;
}
.oos{
    position: absolute;
    top:10px;
    right: 5px;
    z-index: 100;
}
.pre{
    color: $warning;
}
.des{
   color: $gray;
}
.product-content{
    overflow: hidden;
}
.product-img{
    &:hover{
        transition: all .5s ease;
        transform: scale(1.5);
    }
}

</style>