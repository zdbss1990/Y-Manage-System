<!--
 * @Author: zhangyao
 * @Date: 2020-12-14 10:50:42
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-15 15:02:56
-->
<template>
    <div class="fusion-chart-map-tpl border-box min-height-full">
           <fusioncharts
                    :type="charts.type"
                    :width="charts.width"
                    :height="charts.height"
                    :dataFormat="charts.dataFormat"
                    :dataSource="charts.dataSource"
                    >
            </fusioncharts>
          </div>
</template>
<script>
import Service from '@/api/'
import uxPanel from '../../../components/ux-panel/ux-panel.vue';
import dataSource from '@assets/data/mapData.js';
export default {
  components: { uxPanel },
    data(){
        return{
           mapLoading:false,
           charts:{
               width:'100%',
               height:'90%',
               type:'world',
               dataFormat:'json',
               dataSource:dataSource
           }
        }
    },
    methods:{
    },
    mounted(){
        Service.bindName(this);
    }
}
</script>
<style lang="scss" scoped>
.fusion-chart-map-tpl{
  border-radius: 4px;
}
</style>