/*
 * @Author: zhangyao
 * @Date: 2020-11-27 17:15:11
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-11-30 15:26:36
 */
/**
 *  @pageOptions 分页配置
 *  @currentPage 当前页码
 *  @pageSize 每页显示条数
 *  @pageSizes 每页显示条数选项 -1(All) 
 *  @total 总条数
 *  @handleSizeChange 每页显示条数选择
 *  @handleCurrentChange 当前页选择
 **/
export default {
    props: {
        pageOptions: {
            type: Object,
            default: () => {
                return {
                    currentPage: 1,
                    pageSize: 5
                }
            }
        },
        total: {
            type: Number,
            default: 400
        }
    },
    data() {
        return {
            pageSizes: [5, 10, 20, 50, 100, -1],
        }
    },
    methods: {
        handleSizeChange(size) {
            this.$emit('handleSizeChange',size)
        },
        handleCurrentChange(page){
            this.$emit('handleCurrentChange',page)
        }
    }
}