<template>
  <div class="uxcloud-header-tpl">
    <div class="header-default">
      <div class="navbar-header">
        <span class="navbar-logo"></span>
        <a class="font-weight"><b>UXCLOUD</b></a>
        <!-- 面包屑 -->
        <span class="header-crumbs el-icon-s-unfold" @click="changeMenu"></span>
        <div class="navbar-nav navbar-right">
          <!-- 更多下拉菜单 -->
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              <el-avatar class="header-avatar" shape="square" size="small" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-avatar>
              {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <div @click="logout">login out</div>
              </el-dropdown-item>
               <el-dropdown-item>
                <div>Setting</div>
              </el-dropdown-item>
              <el-dropdown-item>
                <div @click="setLang">{{language==='zh_CN' ? 'En' :'中文'}}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState ,mapGetters } from "vuex";
export default {
  name: "ux-header",
  data() {
    return {
     
    };
  },
  computed: {
    ...mapState({
      show: (state) => state.layoutModule.show,
      userInfo:(state)=>state.authModule.user,
      language:(state)=>state.layoutModule.language,
      menuList:(state)=>state.authModule.menuList
    }),
  },
 
  methods:{
    ...mapActions([
       'changeMenuState',
       'setLanguage',
       'loginOut'
    ]),
    changeMenu(){
       //点开导航
       let menu=this.show;
       this.changeMenuState(!menu)
    },
    //设置语言
    setLang(){
      let value= this.language==='en' ? 'zh_CN':'en';
      this.$i18n.locale = value;
      this.setLanguage(value)
      this.$_notify({
          title:this.$i18n.t('msg.tips'),
          type:'success',
          message:this.$i18n.t('msg.set_success')
      })
    },
    //退出登录
    logout(){
       this.loginOut().then(res=>{
          this.$router.push({
            path:'/login'
          })
       })
    }
  }
};
</script>
<style scoped lang='scss'>
.uxcloud-header-tpl {
  position: fixed;
  & {
    top: 0px;
    left: 0px;
    right: 0;
    z-index: 1000;
    display: flex;
    flex: 1;
    background: $fff;
  }
}
.header-crumbs{
  font-size: 20px;
  &:hover{
    opacity: 0.7;
  }
}
@media (min-width: 768px) {
  .navbar-header {
    width: 220px;
  }
  .navbar-right{
    position: absolute;
    display: block;
    right: 20px;
  }
  .header-crumbs {
    display: none;
  }
}
@media (max-width: 767px) {
  .header-crumbs {
     position: absolute;
     right: 20px;
     display: block;
  }
   .navbar-right{
    display: none;
  }
}
.navbar-header {
  display: flex;
  align-items: center;
  padding: 15px 20px;
}
.navbar-logo {
  margin-right: 10px;
  background: #00acac;
  border: 10px solid transparent;
  border-color: rgba(0, 0, 0, 0) rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.3);
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}
.header-avatar{
  vertical-align: middle;
  margin-right: 10px;
}
</style>
