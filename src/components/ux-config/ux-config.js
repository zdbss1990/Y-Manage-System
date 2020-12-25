/*
 * @Author: zhangyao
 * @Date: 2020-12-24 14:50:37
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-25 14:46:18
 */
import { mapActions,mapState } from "vuex";
export default{
    data(){
        return{
            activeIndex:0,
            foldBtn:true,
            screenBtn:true
        }
    },
    computed: {
        ...mapState({
            flag:(state)=>state.layoutModule.drawer,
        }),
      },
    methods:{
        ...mapActions([
            'openSettings',
            'setMenuBgColor',
            'setFoldBtn',
            'setScreen'
         ]),
        close(){
            this.openSettings(false)
        },
        handleSetting(index){
            this.activeIndex=index;
            let color=index ? '#1e1d1d':'#2d353c'
            this.setMenuBgColor(color)
        },
        handleFold(){
            this.setFoldBtn(this.foldBtn)
        },
        handleScreen(){
            this.setScreen(this.screenBtn)
        }
    }
}