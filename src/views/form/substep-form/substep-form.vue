<!--
 * @Author: zhangyao
 * @Date: 2020-12-07 17:44:41
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-10 16:48:59
-->
<template>
    <div class="substep-form-tpl border-box min-height-full bg-f p-10 radius-4">
        <el-row >
            <el-col :span="24">
                <div class="f-s-18 m-b-10">{{ $t("route.substep_form") }}</div>
                <p class="f-s-12 gray m-b-10">以步骤条的形式展现表单.</p>
            </el-col>
        </el-row>
        <el-row>
             <el-col :xs="0" :lg="6" :xl="6" style="opacity:0">-</el-col>
             <el-col :lg="12" :md="12" :xs="24">
                <el-steps :active="active" finish-status="success" simple class="bg-f">
                        <el-step :title="$t('form.create_user')" ></el-step>
                        <el-step :title="$t('form.fill_in_contact_info')"></el-step>
                        <el-step :title="$t('form.finish')" ></el-step>
                </el-steps>
                <div v-show="active==0" class="p-20">
                     <div>
                         <h1 class="f-s-18 font-bold">创建一个账户</h1>
                         <p class="f-s-12 m-t-5">请填写您的注册账户信息，用于登录</p>
                        <el-divider></el-divider>
                    </div>
                     <el-form ref="userForm" class="m-t-10" :model="userForm" :rules="rules" label-width="100px" label-position="top">
                        <el-form-item :label="$t('form.user_name')" prop="name">
                            <el-input v-model="userForm.name" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('form.password')" prop="password">
                            <el-input type="password" v-model="userForm.password" autocomplete="off"></el-input>
                        </el-form-item>
                        <el-form-item :label="$t('form.checkpass')" prop="checkPass">
                            <el-input type="password" v-model="userForm.checkPass" autocomplete="off"></el-input>
                        </el-form-item>
                         <el-form-item>
                            <el-button type="primary" size="small" @click="nextStep('userForm')">{{$t('button.next')}}</el-button>
                            <el-button size="small">{{$t('button.cancel')}}</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div v-show="active===1" class="p-20">
                     <div>
                         <h1 class="f-s-18 font-bold">填写联系信息</h1>
                         <p class="f-s-12 m-t-5">请告诉我们您的联系方式</p>
                        <el-divider></el-divider>
                    </div>
                     <Vcode :show="isShow" @success="success" @close="close" />
                     <el-form ref="infoForm" class="m-t-10" :model="infoForm" :rules="infoRules" label-width="100px" label-position="top">
                        <el-form-item  :label="$t('form.phone_number')" prop="phone">
                            <el-input  v-model="infoForm.phone" autocomplete="off"></el-input>
                        </el-form-item>
                         <el-form-item :label="$t('form.email')" prop="email">
                            <el-input v-model="infoForm.email"></el-input>
                        </el-form-item>
                         <el-form-item>
                            <el-button type="primary" size="small" @click="active=0">{{$t('button.prev_step')}}</el-button>
                            <el-button type="primary" size="small" @click="next('infoForm')">{{$t('button.next')}}</el-button>
                        </el-form-item>
                    </el-form>
                </div>
                <div v-show="active===2" class="p-20">
                     <div class="text-center success-info">
                         <h1 class="f-s-24 font-bold success"><i class="el-icon-success m-r-5"></i>注册成功</h1>
                    </div>
                    <div class="m-t-10 bg-gray radius-4 p-20 f-s-14">
                        <p class="m-t-10"><span class="font-bold">{{$t('form.user_name')}}:</span> {{userForm.user}}</p>
                        <p class="m-t-10"><span class="font-bold">{{$t('form.password')}}:</span> {{userForm.password}}</p>
                        <p class="m-t-10"><span class="font-bold">{{$t('form.phone_number')}}:</span> {{infoForm.phone}}</p>
                        <p class="m-t-10"><span class="font-bold">{{$t('form.email')}}:</span> {{infoForm.email}}</p>
                    </div>
                    <div>
                        <el-button type="primary" size="small" @click="active=1">{{$t('button.prev_step')}}</el-button>
                        <el-button class="m-t-10" type="primary" size="small">{{$t('button.signin')}}</el-button>
                    </div>
                    
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Vcode from "vue-puzzle-vcode";
export default {
    components:{
       Vcode 
    },
    data(){
        return{
            active:0,
            userForm:{
                user:'',
                password:'',
                checkPass: ''
            },
            infoForm:{
                phone:'',
                email:'',
            },
            isShow:false,
            rules:{
                name:[
                    { required: true, message: this.$i18n.t('errMsg.please_enter_the_name'), trigger: 'blur' },
                ],
                password:[
                    {   
                        required: true,
                        validator:(rule,value,callback)=>{
                            if(value===''){
                                callback(new Error(this.$i18n.t('errMsg.please_enter_the_password')))
                            }else{
                                if(this.userForm.checkPass!==''){
                                    this.$refs['userForm'].validateField('checkPass');
                                }
                                callback()
                            }
                    }, trigger: 'blur' }
                ],
                checkPass: [
                    { 
                       required: true,
                       validator: (rule,value,callback)=>{
                            if(value===''){
                                callback(new Error(this.$i18n.t('errMsg.please_enter_the_password_again')))
                            }else if(value!==this.userForm.password){
                                callback(new Error(this.$i18n.t('errMsg.the_two_passwords_do_not_agree')))
                            }else{
                                callback()
                            }
                    }, trigger: 'blur' }
                ],
            },
            infoRules:{
               phone:[
                   {required:true,validator:(rule,value,callback)=>{
                        let reg=new RegExp(/^[1][3-8][0-9]{9}$/)
                        if(value===''){
                            callback(new Error('请输入手机号'))
                        }else if(!reg.test(value)){
                            console.log(222222)
                            callback(new Error('手机号格式不正确'))
                        }else{
                            callback()
                        }
                   }, trigger: 'blur' }
               ],
               email:[
                 { required: true, message: '请输入邮箱地址',  trigger: 'blur'  },
                 { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
              ]
            }
        }
    },
    methods:{
        nextStep(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.active=1
                }else{
                    return false
                }
            })
        },
        next(formName){
            this.$refs[formName].validate((valid) => {
                if(valid){
                    this.isShow=true
                }else{
                    return false
                }
            })
        },
        success(){
            this.isShow=false;
            this.active=2
        },
        close(){
            this.isShow=false
        }
    }
}
</script>
<style lang="scss" scoped>
.gray{
    color:$gray
}
.m-auto{
    margin:auto !important;
}
.success-info{
    line-height: 80px;
}
</style>