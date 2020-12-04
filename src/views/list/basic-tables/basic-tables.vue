<!--
 * @Author: zhangyao
 * @Date: 2020-12-03 10:38:37
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-04 17:14:47
-->
<template>
  <div class="basic-tables-tpl border-box min-height-full bg-f p-10 radius-4">
    <el-row :gutter="24">
      <el-col :span="10" :offset="14" style="text-align: end">
        <el-form ref="form" inline :model="form" size="small">
          <el-form-item class="w200" prop="search">
            <el-input
              class="vertica-middle"
              v-model="form.search"
              :placeholder="$t('errMsg.please_enter_the_name')"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="searchName">{{
              $t("button.search")
            }}</el-button>
            <el-button @click="resetSearch">{{ $t("button.reset") }}</el-button>
            <el-button
              class="add-btn"
              size="small"
              icon="el-icon-plus"
              @click="addUser"
              >{{ $t("button.add") }}
            </el-button>
            <el-dropdown v-if="select_data.length" trigger="click">
              <el-button size="small">
                {{ $t("button.more")
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div class="f-s-12" @click="deleteBatches">
                    {{ $t("button.delete_batches") }}
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="24">
        <ux-table
          class="m-t-10"
          :tableData="tableData"
          :columnData="columnData"
          :select_all="select_all"
          :loading="loading"
          :total="total"
          :pageOptions="pageOptions"
          @handleSizeChange="handleSizeChange"
          @handleCurrentChange="handleCurrentChange"
          @selectAllData="selectAllData"
        >
        </ux-table>
      </el-col>
    </el-row>
    <ux-dialog
      :dialog_title="type==='add' ? $t('basicTables.add_option'):$t('basicTables.edit_option')"
      :dialog_visible="dialog_visible"
      @handleClose="handleClose"
      @submit="submit"
    >
      <el-form
        :model="optForm"
        :rules="rules"
        ref="opt"
        class="demo-ruleForm"
        label-position="left"
        label-width="80px"
      >
        <el-form-item :label="$t('form.name')" prop="name">
          <el-input
            clearable
            v-model.trim="optForm.name"
            :placeholder="$t('errMsg.please_enter_the_name')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('form.sex')" prop="sex">
          <el-radio v-model="optForm.sex" label="man">{{
            $t("form.man")
          }}</el-radio>
          <el-radio v-model="optForm.sex" label="woman">{{
            $t("form.woman")
          }}</el-radio>
        </el-form-item>
        <el-form-item :label="$t('form.status')" prop="status">
          <el-radio v-model="optForm.status" label="online">{{
            $t("form.online")
          }}</el-radio>
          <el-radio v-model="optForm.status" label="off_line">{{
            $t("form.off_line")
          }}</el-radio>
        </el-form-item>
        <el-form-item :label="$t('form.create_time')" prop="create_time">
          <el-date-picker
            v-model="optForm.create_time"
            :picker-options="pickerOptions"
            type="datetime"
            :placeholder="$t('errMsg.please_select_time')"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('form.address')" prop="address">
          <el-input
            clearable
            v-model.trim="optForm.address"
            :placeholder="$t('errMsg.please_enter_the_address')"
          ></el-input>
        </el-form-item>
      </el-form>
    </ux-dialog>
  </div>
</template>
<script>
import { v4 as uuidv4 } from "uuid";
export default {
  data() {
    return {
      loading: true,
      total: 0,
      pageOptions: {
        currentPage: 1,
        pageSize: 10,
      },
      tableData: [],
      form: {
        search: "",
      },
      type:'add',
      select_all: true,
      select_data: [],
      index:0,
      // dialog_title: ,
      dialog_visible: false,
      optForm: {
        name: "",
        sex: "man",
        create_time: "",
        status: "online",
        address: "",
      },
      pickerOptions: {
        disabledDate: (time) => {
          return Date.now() < time;
        },
      },
      rules: {
        name: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_enter_the_name")}`,
            trigger: "blur",
          },
        ],
        create_time: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_select_time")}`,
            trigger: "change",
          },
        ],
        address: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_enter_the_address")}`,
            trigger: "blur",
          },
        ],
      },
      totalData: [
        {
          name: "哒哒哒",
          age: 18,
          create_time: 1606964095306,
          status: "online",
          sex: "man",
          address: "上海市普陀区金沙江路 1518 号",
          id: uuidv4(),
        },
        {
          name: "啾啾~",
          age: 23,
          create_time: 1606964095306,
          status: "online",
          sex: "woman",
          address: "上海市普陀区金沙江路 1517 号",
          id: uuidv4(),
        },
        {
          name: "王小虎",
          age: 43,
          create_time: 1606964095306,
          status: "off_line",
          sex: "man",
          address: "上海市普陀区金沙江路 1516 号",
          id: uuidv4(),
        },
        {
          name: "李霞",
          age: 26,
          create_time: 1606964095306,
          status: "online",
          sex: "woman",
          address: "上海市普陀区金沙江路 1515 号",
          id: uuidv4(),
        },
        {
          name: "王刚",
          age: 21,
          create_time: 1606964095306,
          status: "off_line",
          sex: "man",
          address: "上海市普陀区金沙江路 1515 号",
          id: uuidv4(),
        },
        {
          name: "哒哒哒2222",
          age: 18,
          create_time: 1606964095306,
          status: "online",
          sex: "man",
          address: "上海市普陀区金沙江路 1518 号",
          id: uuidv4(),
        },
        {
          name: "啾啾~",
          age: 23,
          create_time: 1606964095306,
          status: "online",
          sex: "woman",
          address: "上海市普陀区金沙江路 1517 号",
          id: uuidv4(),
        },
        {
          name: "王小虎",
          age: 43,
          create_time: 1606964095306,
          status: "off_line",
          sex: "man",
          address: "上海市普陀区金沙江路 1516 号",
          id: uuidv4(),
        },
        {
          name: "李霞",
          age: 26,
          create_time: 1606964095306,
          status: "online",
          sex: "woman",
          address: "上海市普陀区金沙江路 1515 号",
          id: uuidv4(),
        },
        {
          name: "王刚",
          age: 21,
          create_time: 1606964095306,
          status: "off_line",
          sex: "man",
          address: "上海市普陀区金沙江路 1515 号",
          id: uuidv4(),
        },
        {
          name: "哒哒哒11111",
          age: 18,
          create_time: 1606964095306,
          status: "online",
          sex: "man",
          address: "上海市普陀区金沙江路 1518 号",
          id: uuidv4(),
        },
        {
          name: "啾啾~",
          age: 23,
          create_time: 1606964095306,
          status: "online",
          sex: "woman",
          address: "上海市普陀区金沙江路 1517 号",
          id: uuidv4(),
        },
        {
          name: "王小虎",
          age: 43,
          create_time: 1606964095306,
          status: "off_line",
          sex: "man",
          address: "上海市普陀区金沙江路 1516 号",
          id: uuidv4(),
        },
        {
          name: "李霞",
          age: 26,
          create_time: 1606964095306,
          status: "online",
          sex: "woman",
          address: "上海市普陀区金沙江路 1515 号",
          id: uuidv4(),
        },
        {
          name: "王刚",
          age: 21,
          create_time: 1606964095306,
          status: "off_line",
          sex: "man",
          address: "上海市普陀区金沙江路 1515 号",
          id: uuidv4(),
        },
      ],
      columnData: [
        {
          prop: "name",
          label: "name",
          type: "html",
          sort: true,
        },
        {
          prop: "sex",
          label: "sex",
          type: "sex",
        },
        {
          prop: "status",
          label: "status",
          type: "state",
        },
        {
          prop: "create_time",
          label: "create_time",
          type: "time",
        },
        {
          prop: "address",
          label: "address",
          type: "html",
        },
        {
          prop: "operation",
          label: "operation",
          type: "button",
          btn_list: [
            {
              label: "edit",
              isDisabled: (row) => true,
              handle: (row,index) => {
                 this.editMsg(row,index)
              },
            },
            {
              label: "delete",
              type: "danger",
              isDisabled: (row) => true,
              handle: (row,index) => {
                 this.deleteMsg(row,index)
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    //每页条目数改变
    handleSizeChange(size) {
      this.pageOptions.pageSize = size;
      this.pageOptions.currentPage = 1;
      this.handelData(this.pageOptions);
    },
    //当前页数改变
    handleCurrentChange(page) {
      this.pageOptions.currentPage = page;
      this.handelData(this.pageOptions);
    },
    //全选
    selectAllData(data) {
      this.select_data = data;
    },
    //页面加载克隆数据
    handelData(pageOpt) {
      let data = this._.cloneDeep(this.totalData);
      let { pageSize, currentPage } = pageOpt;
      if (pageSize === -1) return (this.tableData = this.totalData);
      let start = (currentPage - 1) * pageSize;
      let end = currentPage * pageSize;
      this.tableData = data.slice(start, end);
      this.total = this.totalData.length;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    //批量搜索
    searchName() {
      this.loading = true;
      this.pageOptions = {
        currentPage: 1,
        pageSize: 10,
      };
      if (!this.form.search) return this.handelData(this.pageOptions);
      this.tableData = this.totalData.filter((item) =>
        item.name.includes(this.form.search)
      );
      this.total = this.tableData.length;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    //重置
    resetSearch() {
      this.$refs["form"].resetFields();
      this.searchName();
    },
    //添加列表成员
    addUser() {
      this.type='add'
      this.dialog_visible = true;
    },
    //批量删除
    deleteBatches() {
      this.$confirm(this.$i18n.t('msg.delete_item'), this.$i18n.t("msg.tips"), {
          type: 'warning'
        }).then(() => {
          this.totalData = this._.differenceBy(this.totalData,this.select_data,'id');
          this.pageOptions = {
            currentPage: 1,
            pageSize: 10,
          };
          this.handelData(this.pageOptions);
          this.$notify({
            title:this.$i18n.t("msg.tips"),
            type:'success',
            message:this.$i18n.t('msg.delete_success')
          })
        }).catch(() => {
          this.$notify({
            title:this.$i18n.t("msg.tips"),
            type:'info',
            message:this.$i18n.t('msg.cancel_operation')
          })        
        });
    },
    //关闭模态框
    handleClose(bool) {
      this.dialog_visible = bool;
      setTimeout(()=>{
        this.$refs["opt"].resetFields();
      },500)
    },
    //提交
    submit(bool) {
      this.$refs["opt"].validate((valid) => {
        if (valid) {
          if(this.type==='add'){
              this.totalData.unshift({ ...this.optForm, id: uuidv4() });
              this.handelData(this.pageOptions);
              this.dialog_visible = bool;
              this.$notify({
                title: this.$i18n.t("msg.tips"),
                type: "success",
                message: this.$i18n.t("msg.create_success"),
              });
          }else{
              this.$set(this.tableData,this.index,{...this.optForm})
              this.dialog_visible = bool;
              this.$notify({
                title: this.$i18n.t("msg.tips"),
                type: "success",
                message: this.$i18n.t("msg.edit_success"),
              });
          }
           setTimeout(()=>{
            this.$refs["opt"].resetFields();
           },500)
        } else {
          return false;
        }
      });
    },
    //编辑
    editMsg(row,index){
      this.type='edit'
      this.index=index
      this.$nextTick(() => {
        this.optForm =this. _.cloneDeep(row);
      })
      this.dialog_visible=true;
    },
    //删除
    deleteMsg(row,index){
      this.$confirm(this.$i18n.t('msg.delete_item'), this.$i18n.t("msg.tips"), {
          type: 'warning'
        }).then(() => {
          this.totalData.splice(index,1)
          this.pageOptions = {
            currentPage: 1,
            pageSize: 10,
          };
          this.handelData(this.pageOptions);
          this.$notify({
            title:this.$i18n.t("msg.tips"),
            type:'success',
            message:this.$i18n.t('msg.delete_success')
          })
        }).catch(() => {
          this.$notify({
            title:this.$i18n.t("msg.tips"),
            type:'info',
            message:this.$i18n.t('msg.cancel_operation')
          })        
        });
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
      this.handelData(this.pageOptions);
    }, 2000);
  },
};
</script>
<style lang="scss" scoped>
.add-btn {
  margin-right: 10px;
}
</style>