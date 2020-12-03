/**
 *  @tableData 表格数据
 *  @columnData 表头数据
 *  @total 总条数
 *  @handleSizeChange 每页显示条数选择
 *  @handleCurrentChange 当前页选择
 *  @border 表格边框
 *  @stripe 表格斑马线
 *  @height 表格固定高度
 *  @size 表格尺寸
 *  @loading loading
 *  @select_all 全选
 *  @select_single 单选
 *  @toPage 跳转页面回调
 *  @sortChange 排序回调 ASC升序 DESC降序
 *  @selectAllData 全选回调
 *  @selectSinger 单选回调
 **/
export default {
    inheritAttrs: false,
    props: {
        tableData: {
            type: Array,
            required: true,
            default: () => []
        },
        columnData: {
            type: Array,
            required: true,
            default: () => []
        },
        border: {
            type: Boolean,
            default: true
        },
        stripe: {
            type: Boolean,
            default: false
        },
        height: {
            type: Number | String,
            default: null
        },
        size: {
            type: String,
            default: 'medium'
        },
        loading: {
            type: Boolean,
            default: false
        },
        select_all: {
            type: Boolean,
            default: false
        },
        select_single: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
        }
    },
    methods: {
        toPage(row) {
            this.$emit('toPage', row)
        },
        sortChange(sort) {
            let order = sort.order === 'ascending' ? 'asc' : 'desc'
            this.$emit('sortChange', order)
        },
        handleSelectionChange(data) {
            if(this.select_single) return
            this.$emit('selectAllData',data)
        },
        select(selection, row) {
            if (this.select_all) return
            this.$refs.multipleTable.clearSelection();
            if (selection.length === 0) return;
            this.$refs.multipleTable.toggleRowSelection(row, true);
            this.$emit('selectSinger',Array.of(row))
        },
        clearSelection(){
            this.$refs.multipleTable.clearSelection();
        },
        cellclass(row){
            if(this.select_single&&row.columnIndex===0){
              return 'disabled_selection'
            }
        }
    }
}