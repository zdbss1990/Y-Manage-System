/**
 *  @dialog_title 模态框title 默认提示
 *  @dialog_width 模态框宽度 默认30%
 *  @dialog_visible 模态框显示标识符 默认false 必填
 *  @handleClose 关闭模态框回调 接收boolean false
 *  @submit 确定按钮回调 接收boolean false
 **/

export default{
    props:{
        dialog_title:{
            type:String,
            default:''
        },
        dialog_width:{
            type:String,
            default:'30%'
        },
        dialog_visible:{
            type:Boolean,
            required:true,
            default:false
        }
    },
    data(){
        return{

        }
    },
    methods:{
        //关闭
        handleClose(){
           this.$emit('handleClose',false)
        },
        //提交
        submit(){
           this.$emit('submit',false)
        }
    }
}