<template>
  <div id="app">
      <router-view v-if="isActiveRoute"/>
  </div>
</template>
<script>
import getPageTitle from '@utils/title/index.js'
export default {
   data(){
     return{
        isActiveRoute:true
     }
   },
   methods:{
     reload(){
       this.isActiveRoute=false;
       this.$nextTick(()=>{
         this.isActiveRoute=true
       })
     }
   },
   watch:{
     '$i18n.locale'(newV,oldV){
        if(newV!=oldV){
          this.reload();
          document.title=getPageTitle(this.$router.currentRoute.meta.title)
        }
     }
   }
}
</script>
<style lang="scss"></style>
