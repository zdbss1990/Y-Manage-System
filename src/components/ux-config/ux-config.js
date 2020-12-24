/*
 * @Author: zhangyao
 * @Date: 2020-12-24 14:50:37
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-24 17:52:22
 */
import { mapActions,mapState } from "vuex";
export default{
    data(){
        return{
            activeIndex:0
        }
    },
    computed: {
        ...mapState({
            flag:(state)=>state.layoutModule.drawer
        }),
      },
    methods:{
        ...mapActions([
            'openSettings',
            'setMenuBgColor'
         ]),
        close(){
            this.openSettings(false)
        },
        handleSetting(index){
            this.activeIndex=index;
            let color=index ? '#1e1d1d':'#2d353c'
            this.setMenuBgColor(color)
        }
    }
}