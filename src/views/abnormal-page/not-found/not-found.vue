<!--
 * @Author: zhangyao
 * @Date: 2020-12-08 10:07:30
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-21 11:20:05
-->
<template>
    <div class="not-found-page border-box min-height-full bg-f p-10 radius-4">
          <div class="text-center not-found-content">
               <img class="not-found-img" :src="imgUrl">
               <p class="not-found-tips font-bold">诶呀,页面走失了!</p>
               <div class="not-found-btn font-bold" @click="goToHome">回到首页</div>
          </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           imgUrl:require('@assets/image/404.png') 
        }
    },
    methods:{
        goToHome(){
            this.$router.push({
                path:'/home/dashboard'
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.not-found-tips{
    color:#7b95db;
    margin-top: 30px;
    margin-bottom: 30px;
}
.not-found-img{
    width:500px;
}
.not-found-page{
   display: flex;
   justify-content: center;
   align-items: center;
}
.not-found-btn{
   width: 100px;
   height: 30px;
   line-height: 30px;
   border: 1px solid #7b95db;
   margin: 0 auto;
   border-radius: 15px;
   font-size: 14px;
   color:#7b95db;
}
</style>