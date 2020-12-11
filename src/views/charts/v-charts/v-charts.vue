<!--
 * @Author: zhangyao
 * @Date: 2020-12-10 17:00:27
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-11 16:47:06
-->
<template>
    <div class="v-charts-tpl border-box min-height-full">
          <el-row :gutter="24">
               <el-col :lg="12" :md="12" :xs="24" class="charts-content">
                <ux-panel @resize="chartResize" :charts="'line'">
                    <span slot="title">line</span>
                    <ve-line ref="line" :data="chartData" :height="'300px'" :settings="chartSettings" :extend="chartExtend"></ve-line>
                </ux-panel>
              </el-col>
             <el-col :lg="12" :md="12" :xs="24" class="charts-content">
                <ux-panel @resize="chartResize" :charts="'histogram'">
                    <span slot="title">histogram</span>
                    <ve-histogram ref="histogram"  :data="chartData1" :height="'300px'" :settings="chartSettings1" :extend="chartExtend"></ve-histogram>
                </ux-panel>
             </el-col>
             <el-col :lg="12" :md="12" :xs="24" class="charts-content">
                <ux-panel @resize="chartResize" :charts="'pie'">
                    <span slot="title">pie</span>
                     <ve-pie ref="pie" :data="chartData2"  :height="'300px'" :settings="chartSettings2" :extend="chartExtend2"></ve-pie>
                </ux-panel>
             </el-col>
             <el-col :lg="12" :md="12" :xs="24" class="charts-content">
                <ux-panel @resize="chartResize" :charts="'radar'">
                    <span slot="title">radar</span>
                    <ve-radar ref="radar" :height="'300px'" :data="chartData3" :extend="chartExtend3"></ve-radar>
                </ux-panel>
             </el-col>
              <el-col :lg="12" :md="12" :xs="24" class="charts-content">
                <ux-panel @resize="chartResize" :charts="'scatter'">
                    <span slot="title">scatter</span>
                    <ve-scatter ref="scatter" :data="chartData4"  :height="'300px'" :extend="chartExtend"></ve-scatter>
                </ux-panel>
             </el-col>
             <el-col :lg="12" :md="12" :xs="24" class="charts-content">
                <ux-panel @resize="chartResize" :charts="'liquidfill'">
                    <span slot="title">liquidfill</span>
                    <ve-liquidfill ref="liquidfill" :height="'300px'" :data="chartData5"></ve-liquidfill>
                </ux-panel>
             </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return{
            chartData: {
            columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '5', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '10', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '11', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '20', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },
            chartSettings:{
                 area: true,
                 xAxisType: 'value'
            },
            chartExtend:{
                legend: {
                    icon: "rect",
                    right: 20,
                    top: 10
                },
                grid:{
                    x:20,
                    y:40,
                    x2:20,
                    y2:20,
                }
            },
            chartSettings1:{
                 stack: { '用户': ['访问用户', '下单用户'] }
            },
            chartData1: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },
            chartSettings2:{
                 level: [
                    ['今天', '昨天'],
                    ['admin', 'user', 'superAdmin'],
                ]
            },
            chartData2: {
                columns: ['名称', '访问用户'],
                rows: [
                    { '名称': 'admin', '访问用户': 1393 },
                    { '名称': 'user', '访问用户': 3530 },
                    { '名称': 'superAdmin', '访问用户': 2923 },
                    { '名称': '今天', '访问用户': 1723 },
                    { '名称': '昨天', '访问用户': 3792 }
                ]   
            },
             chartExtend2:{
                legend: {
                    icon: "rect",
                    right: 20,
                    top: 10
                },
                series: {
                  center: ["50%", "55%"],
                },
             },
             chartData3: {
                columns: ['日期', '访问用户', '下单用户', '下单率'],
                rows: [
                    { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                    { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                    { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                    { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                    { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                    { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                ]
            },
             chartExtend3:{
                legend: {
                    icon: "rect",
                    bottom:10
                }
             },
              chartData4: {
                columns: ['日期', '访问用户', '下单用户', '年龄'],
                rows: {
                    '上海': [
                    { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
                    { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
                    { '日期': '1/3', '访问用户': 7123, '年龄': 9, '下单用户': 3245 },
                    { '日期': '1/4', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
                    { '日期': '1/5', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
                    { '日期': '1/6', '访问用户': 2323, '年龄': 20, '下单用户': 6537 }
                    ],
                    '北京': [
                    { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
                    { '日期': '1/2', '访问用户': 1273, '年龄': 6, '下单用户': 2344 },
                    { '日期': '1/3', '访问用户': 3123, '年龄': 15, '下单用户': 4564 },
                    { '日期': '1/4', '访问用户': 2123, '年龄': 9, '下单用户': 3245 },
                    { '日期': '1/5', '访问用户': 4103, '年龄': 12, '下单用户': 4355 },
                    { '日期': '1/6', '访问用户': 7123, '年龄': 10, '下单用户': 3567 }
                    ],
                    '广州': [
                    { '日期': '1/1', '访问用户': 123, '年龄': 3, '下单用户': 1244 },
                    { '日期': '1/2', '访问用户': 1223, '年龄': 6, '下单用户': 2344 },
                    { '日期': '1/3', '访问用户': 2123, '年龄': 30, '下单用户': 3245 },
                    { '日期': '1/5', '访问用户': 4123, '年龄': 12, '下单用户': 4355 },
                    { '日期': '1/4', '访问用户': 5123, '年龄': 18, '下单用户': 4564 },
                    { '日期': '1/6', '访问用户': 3843, '年龄': 30, '下单用户': 4850 }
                    ]
                 }
             },
             chartData5: {
                columns: ['city', 'percent'],
                rows: [{
                    city: '上海',
                    percent: 0.6
                }]
            }
        }
    },
    methods:{
        chartResize(name){
            this.$nextTick(()=>{
                this.$refs[name]&&this.$refs[name].echartsResize()
            })
        }
    },
    mounted(){
         window.addEventListener("resize", () => {
            if(this.$refs["line"]){
                this.$refs["line"].echartsResize();
            }
        });
    }
}
</script>
<style lang="scss" scoped>
.charts-content{
    margin-top: 10px;
}
</style>