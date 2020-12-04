<!--
 * @Author: zhangyao
 * @Date: 2020-12-04 17:25:15
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-04 17:48:52
-->
<template>
    <div class="product-list-tpl border-box min-height-full bg-f p-10 radius-4">
        <el-row :gutter="24">
             <el-col :span="6">
                 <el-card shadow="hover">
                     <div class="text-center f-s-14">
                       <div class="product-content">
                           <img :src="imgUrl" class="product-img">
                       </div>
                        <div class="m-t-10 m-b-10">Note 9 Pro</div>
                        <p class="f-s-12 des">一亿像素夜景相机，120Hz六档变速高刷屏</p>
                        <div class="m-t-10 pre"><span>1599</span>元<span>起</span></div>
                    </div>
                 </el-card>
             </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgUrl:require('@assets/image/5.jpg')
        }
    }
}
</script>
<style lang="scss" scoped>
.product-img{
    width: 60%;
    height: 60%;
}
.pre{
    color: $warning;
}
.des{
   color: $gray;
}

</style>