<!--
 * @Author: zhangyao
 * @Date: 2020-11-18 11:13:53
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-03 10:26:36
-->
<template>
  <div class="ux-dashboard-tpl">
    <el-row :gutter="24">
      <el-col :lg="6" :md="6" class="m-t-10">
        <el-card class="box-card">
          <div class="card-title font-bold f-s-14">
            {{ $t("dashborad.visitor_volume") }}
            <i class="el-icon-warning"></i>
          </div>
          <div class="m-t-10 display-flex">
            <span class="f-s-24 font-bold">70,719</span>
            <sparkline height="23" class="m-l-auto">
              <sparklineLine
                :data="sparkline1.data"
                :limit="sparkline1.length"
                :styles="sparkline1.lineStyle"
                :refLineStyles="sparkline1.refLineStyles"
              />
            </sparkline>
          </div>
          <div class="m-t-10 f-s-12">
            <i class="el-icon-caret-bottom"></i> 0.50%
            {{ $t("dashborad.compare_to_last_week") }}
          </div>
          <div class="m-t-10 f-s-12">
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-success m-r-5"></i>
                {{ $t("dashborad.yesterday") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-bottom"></i> 0.50%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 3.79%
              </span>
            </div>
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-warning m-r-5"></i>
                {{ $t("dashborad.a_week_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-bottom"></i> 0.80%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-bottom"></i> 0.19%
              </span>
            </div>
            <div class="display-flex">
              <span>
                <i class="charts-circle bg-danger m-r-5"></i>
                {{ $t("dashborad.a_month_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-top"></i> 0.20%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 0.19%
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="6" class="m-t-10">
        <el-card class="box-card">
          <div class="card-title font-bold f-s-14">
            {{ $t("dashborad.registered_users") }}
            <i class="el-icon-warning"></i>
          </div>
          <div class="m-t-10 display-flex">
            <span class="f-s-24 font-bold">18</span>
            <sparkline height="23" class="m-l-auto">
              <sparklineLine
                :data="sparkline2.data"
                :limit="sparkline2.length"
                :styles="sparkline2.lineStyle"
                :refLineStyles="sparkline2.refLineStyles"
              />
            </sparkline>
          </div>
          <div class="m-t-10 f-s-12">
            <i class="el-icon-caret-bottom"></i> 0.01%
            {{ $t("dashborad.compare_to_last_week") }}
          </div>
          <div class="m-t-10 f-s-12">
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-danger m-r-5"></i>
                {{ $t("dashborad.yesterday") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-bottom"></i> 0.10%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 1.53%
              </span>
            </div>
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-info m-r-5"></i>
                {{ $t("dashborad.a_week_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-bottom"></i> 0.01%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-bottom"></i> 0.16%
              </span>
            </div>
            <div class="display-flex">
              <span>
                <i class="charts-circle bg-warning m-r-5"></i>
                {{ $t("dashborad.a_month_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-top"></i> 0.35%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 0.16%
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="6" class="m-t-10">
        <el-card class="box-card">
          <div class="card-title font-bold f-s-14">
            {{ $t("dashborad.sales_volume") }}
            <i class="el-icon-warning"></i>
          </div>
          <div class="m-t-10 display-flex">
            <span class="f-s-24 font-bold">1680</span>
            <sparkline height="23" class="m-l-auto">
              <sparklineLine
                :data="sparkline3.data"
                :limit="sparkline3.length"
                :styles="sparkline3.lineStyle"
                :refLineStyles="sparkline3.refLineStyles"
              />
            </sparkline>
          </div>
          <div class="m-t-10 f-s-12">
            <i class="el-icon-caret-top"></i> 0.46%
            {{ $t("dashborad.compare_to_last_week") }}
          </div>
          <div class="m-t-10 f-s-12">
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-success m-r-5"></i>
                {{ $t("dashborad.yesterday") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-bottom"></i> 0.80%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 1.89%
              </span>
            </div>
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-warning m-r-5"></i>
                {{ $t("dashborad.a_week_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-bottom"></i> 0.16%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-bottom"></i> 0.26%
              </span>
            </div>
            <div class="display-flex">
              <span>
                <i class="charts-circle bg-info m-r-5"></i>
                {{ $t("dashborad.a_month_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-top"></i> 0.65%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 0.76%
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="6" class="m-t-10">
        <el-card class="box-card">
          <div class="card-title font-bold f-s-14">
            {{ $t("dashborad.saleroom") }}
            <i class="el-icon-warning"></i>
          </div>
          <div class="m-t-10 display-flex">
            <span class="f-s-24 font-bold">$1236.00</span>
            <sparkline height="23" class="m-l-auto">
              <sparklineLine
                :data="sparkline4.data"
                :limit="sparkline4.length"
                :styles="sparkline4.lineStyle"
                :refLineStyles="sparkline4.refLineStyles"
              />
            </sparkline>
          </div>
          <div class="m-t-10 f-s-12">
            <i class="el-icon-caret-top"></i> 0.16%
            {{ $t("dashborad.compare_to_last_week") }}
          </div>
          <div class="m-t-10 f-s-12">
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-warning m-r-5"></i>
                {{ $t("dashborad.yesterday") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-top"></i> 1.94%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 1.81%
              </span>
            </div>
            <div class="m-b-10 display-flex">
              <span>
                <i class="charts-circle bg-danger m-r-5"></i>
                {{ $t("dashborad.a_week_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-top"></i> 0.14%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-bottom"></i> 0.78%
              </span>
            </div>
            <div class="display-flex">
              <span>
                <i class="charts-circle bg-success m-r-5"></i>
                {{ $t("dashborad.a_month_ago") }}
              </span>
              <span class="m-l-auto">
                <i class="el-icon-caret-top"></i> 0.15%
              </span>
              <span class="m-l-5">
                <i class="el-icon-caret-top"></i> 0.24%
              </span>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <!-- 访问图表 -->
      <el-col :lg="18" :md="18" class="m-t-10">
        <el-card>
          <div slot="header" class="clearfix">
            <span class="f-s-14 font-bold"
              >{{ $t("dashborad.last_one_hour_visit") }}
              <i class="el-icon-warning"></i
            ></span>
          </div>
          <div class="display-flex">
            <div>
              <div class="m-b-10 f-s-18 font-bold">
                123{{ $t("dashborad.position") }}
              </div>
              <h1 class="m-b-10 f-s-12">{{ $t("dashborad.normal_user") }}</h1>
              <span class="f-s-12">
                <i class="el-icon-caret-top"></i> 0.18% from previous 7 days
              </span>
            </div>
            <div class="m-l-40">
              <div class="m-b-10 f-s-18 font-bold">
                11{{ $t("dashborad.position") }}
              </div>
              <h1 class="m-b-10 f-s-12">{{ $t("dashborad.superuser") }}</h1>
              <span class="f-s-12">
                <i class="el-icon-caret-top"></i> 0.20% from previous 7 days
              </span>
            </div>
            <div class="m-l-40">
              <div class="m-b-10 f-s-18 font-bold">
                134{{ $t("dashborad.position") }}
              </div>
              <h1 class="m-b-10 f-s-12">
                {{ $t("dashborad.total_number_of_users") }}
              </h1>
              <span class="f-s-12">
                <i class="el-icon-caret-top"></i> 0.83% from previous 7 days
              </span>
            </div>
          </div>
          <ve-line
            ref="charts"
            :data-empty="!chartData.rows.length"
            :loading="loading"
            :data="chartData"
            :settings="settings"
            :extend="chartExtend"
          ></ve-line>
        </el-card>
      </el-col>
      <el-col :lg="6" :md="6" class="m-t-10">
        <!-- 当前用户总数量 -->
        <el-card>
          <div slot="header" class="clearfix">
            <span class="f-s-14 font-bold"
              >{{$t('dashborad.current_online')}} <i class="el-icon-s-custom"></i
            ></span>
          </div>
          <div class="text-center">
            <div>{{ now_date }}</div>
            <div class="m-t-10 font-bold">
              <animate-number
                class="f-s-34"
                ref="dn1"
                :from="from"
                :to="to"
                :key="to"
              ></animate-number>
            </div>
            <div class="f-s-14 m-t-10 m-b-10">{{$t('dashborad.online_visitors')}}</div>
            <span class="f-s-14"
              ><i class="el-icon-refresh font-bold m-r-5 info"></i
              >{{ time }}{{$t('dashborad.seconds_after_the_update')}}</span
            >
          </div>
        </el-card>
      </el-col>
      <el-col class="m-t-10" :lg="6" :md="6">
        <el-card>
          <div slot="header" class="clearfix">
            <span class="f-s-14 font-bold"
              >{{$t('dashborad.current_activity')}} <i class="el-icon-warning"></i
            ></span>
          </div>
          <div>
            <ve-ring
              ref="ring"
              height="250px"
              :data="userData"
              :settings="chartSettings"
              :extend="extend"
            ></ve-ring>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="24">
      <!-- 用户排名 -->
      <el-col :gl="10" :md="10" class="m-t-10">
        <el-card>
          <div slot="header" class="clearfix font-bold">
            <span class="f-s-14"
              >{{$t('dashborad.user_rankings')}} <i class="el-icon-user-solid font-bold info"></i
            ></span>
          </div>
          <ul>
            <li
              class="display-flex align-center m-t-10"
              v-for="(user, index) in usersList"
              :key="index"
            >
              <div class="block">
                <el-avatar :size="60" :src="user.url"></el-avatar>
              </div>
              <div class="user-msg m-l-20">
                <div class="f-s-16 font-bold">{{ user.name }}</div>
                <div class="m-t-5 f-s-12 gray">{{ user.date | dateFormat }}</div>
                <div class="m-t-5 f-s-12 word-spacing">{{ user.des }}</div>
              </div>
              <div class="user-top m-l-auto">
                <el-tag>Top {{ index + 1 }}</el-tag>
              </div>
            </li>
          </ul>
        </el-card>
      </el-col>
      <el-col :gl="6" :md="6" class="m-t-10">
        <el-card>
          <div slot="header" class="clearfix font-bold">
            <span class="f-s-14"
              >{{$t('dashborad.shortcuts')}} <i class="el-icon-s-tools font-bold info"></i
            ></span>
          </div>
          <div>
            <ul class="display-flex justify-center flex-wrap">
              <li
                class="text-center w100 inline link-hover m-b-10"
                v-for="(link, index) in links"
                :key="index"
                @click="toPage(link)"
              >
                <div class="m-b-5">
                  <i
                    class="f-s-24 font-bold"
                    :style="{ color: link.color }"
                    :class="link.icon"
                  ></i>
                </div>
                <span class="link-hover f-s-14">{{ link.name }}</span>
              </li>
            </ul>
            <el-divider></el-divider>
            <div>
              <span
                class="f-s-14 w50 inline m-l-20 m-b-5 text-center"
                v-for="(btn, index) in btnList"
                :key="index"
                @click="toPage(btn)"
                >{{ btn.label }}</span
              >
              <el-button
                size="mini"
                icon="el-icon-plus"
                class="m-l-10"
                @click="addOpt"
                >{{$t('button.add')}}</el-button
              >
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :gl="8" :md="8" class="m-t-10">
        <el-card>
          <div slot="header" class="clearfix font-bold">
            <span class="f-s-14"
              >{{$t('dashborad.schedule')}} <i class="el-icon-date font-bold info"></i
            ></span>
          </div>
          <div>
            <el-table :data="tableData" size="small" style="width: 100%">
              <el-table-column type="index" :index="index"> </el-table-column>
              <el-table-column prop="task" :label="$t('table.task')"> </el-table-column>
              <el-table-column prop="address" :label="$t('table.address')"> </el-table-column>
            </el-table>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <ux-dialog
      :dialog_title="dialog_title"
      :dialog_visible="dialog_visible"
      @handleClose="handleClose"
      @submit="submit"
    >
      <el-form
        :model="optForm"
        status-icon
        :rules="rules"
        ref="opt"
        class="demo-ruleForm"
      >
        <el-form-item :label="$t('form.name')" prop="name">
          <el-input
            v-model.trim="optForm.name"
            :placeholder="$t('errMsg.please_enter_the_name')"
          ></el-input>
        </el-form-item>
        <el-form-item :label="$t('form.link')" prop="link">
          <el-input
            v-model.trim="optForm.link"
            :placeholder="$t('errMsg.please_enter_the_link')"
          ></el-input>
        </el-form-item>
      </el-form>
    </ux-dialog>
  </div>
</template>
<script>
import Services from "@/api";
import moment from "moment";
export default {
  data() {
    return {
      sparkline1: {
        data: [50, 30, 45, 40, 50, 20, 35, 40, 50, 70, 90, 40],
        length: 12,
        lineStyle: {
          stroke: "#ff5b57",
          strokeWidth: 3,
        },
        refLineStyles: {
          strokeOpacity: 0,
        },
      },
      sparkline2: {
        data: [150, 3, 45, 40, 50, 10, 3, 40, 50, 70, 90, 40, 10, 11.23],
        length: 15,
        lineStyle: {
          stroke: "#FF9500",
          strokeWidth: 3,
        },
        refLineStyles: {
          strokeOpacity: 0,
        },
      },
      sparkline3: {
        data: [50, 3, 55, 10, 3, 0, 50, 70, 90, 40, 10, 11.23],
        length: 14,
        lineStyle: {
          stroke: "#5AC8FA",
          strokeWidth: 3,
        },
        refLineStyles: {
          strokeOpacity: 0,
        },
      },
      sparkline4: {
        data: [20, 3, 15, 10, 3, 0, 210, 70, 90, 40, 10, 11.23],
        length: 14,
        lineStyle: {
          stroke: " #4CD964",
          strokeWidth: 3,
        },
        refLineStyles: {
          strokeOpacity: 0,
        },
      },
      //图表
      loading: true,
      now_date: moment(new Date()).format("HH:mm:ss"),
      timer: null,
      time: 5,
      countInt: null,
      init: null,
      from: 10,
      to: 0,
      dialog_title: `${this.$i18n.t("dashborad.add_shortcuts")}`,
      dialog_visible: false,
      optForm: {
        name: "",
        link: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_enter_the_name")}`,
            trigger: "blur",
          },
        ],
        link: [
          {
            required: true,
            message: `${this.$i18n.t("errMsg.please_enter_the_link")}`,
            trigger: "blur",
          },
        ],
      },
      chartData: {
        columns: [
          `${this.$i18n.t("dashborad.date")}`,
          `${this.$i18n.t("dashborad.page_view")}`,
          `${this.$i18n.t("dashborad.visitor_volume")}`,
        ],
        rows: [
          {
            [this.$i18n.t("dashborad.date")]: "17:37:05",
            [this.$i18n.t("dashborad.page_view")]: 1393,
            [this.$i18n.t("dashborad.visitor_volume")]: 1093,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:37:10",
            [this.$i18n.t("dashborad.page_view")]: 530,
            [this.$i18n.t("dashborad.visitor_volume")]: 230,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:37:20",
            [this.$i18n.t("dashborad.page_view")]: 3530,
            [this.$i18n.t("dashborad.visitor_volume")]: 130,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:37:25",
            [this.$i18n.t("dashborad.page_view")]: 30,
            [this.$i18n.t("dashborad.visitor_volume")]: 330,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:37:30",
            [this.$i18n.t("dashborad.page_view")]: 100,
            [this.$i18n.t("dashborad.visitor_volume")]: 1230,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:37:35",
            [this.$i18n.t("dashborad.page_view")]: 1253,
            [this.$i18n.t("dashborad.visitor_volume")]: 323,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:37:50",
            [this.$i18n.t("dashborad.page_view")]: 305,
            [this.$i18n.t("dashborad.visitor_volume")]: 30,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:38:05",
            [this.$i18n.t("dashborad.page_view")]: 1253,
            [this.$i18n.t("dashborad.visitor_volume")]: 323,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:39:00",
            [this.$i18n.t("dashborad.page_view")]: 1305,
            [this.$i18n.t("dashborad.visitor_volume")]: 30,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:39:10",
            [this.$i18n.t("dashborad.page_view")]: 105,
            [this.$i18n.t("dashborad.visitor_volume")]: 330,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:40:05",
            [this.$i18n.t("dashborad.page_view")]: 93,
            [this.$i18n.t("dashborad.visitor_volume")]: 193,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:41:10",
            [this.$i18n.t("dashborad.page_view")]: 1530,
            [this.$i18n.t("dashborad.visitor_volume")]: 1230,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:42:20",
            [this.$i18n.t("dashborad.page_view")]: 530,
            [this.$i18n.t("dashborad.visitor_volume")]: 130,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:43:25",
            [this.$i18n.t("dashborad.page_view")]: 30,
            [this.$i18n.t("dashborad.visitor_volume")]: 330,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:44:30",
            [this.$i18n.t("dashborad.page_view")]: 100,
            [this.$i18n.t("dashborad.visitor_volume")]: 1230,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:45:35",
            [this.$i18n.t("dashborad.page_view")]: 253,
            [this.$i18n.t("dashborad.visitor_volume")]: 323,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:46:50",
            [this.$i18n.t("dashborad.page_view")]: 305,
            [this.$i18n.t("dashborad.visitor_volume")]: 30,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:47:05",
            [this.$i18n.t("dashborad.page_view")]: 13,
            [this.$i18n.t("dashborad.visitor_volume")]: 323,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:48:00",
            [this.$i18n.t("dashborad.page_view")]: 15,
            [this.$i18n.t("dashborad.visitor_volume")]: 30,
          },
          {
            [this.$i18n.t("dashborad.date")]: "17:49:10",
            [this.$i18n.t("dashborad.page_view")]: 105,
            [this.$i18n.t("dashborad.visitor_volume")]: 330,
          },
        ],
      },
      userData: {
        columns: ["name", "value"],
        rows: [
          {
            name: this.$i18n.t('dashborad.active_rate'),
            value: 30,
          },
          {
            name: this.$i18n.t('dashborad.retention_rate'),
            value: 60,
          },
          {
            name: this.$i18n.t('dashborad.bounce_rate'),
            value: 10,
          },
        ],
      },
      chartSettings: {
        radius: ["50%", "60%"],
        scale: [true, true],
      },
      extend: {
        legend: {
          show: false,
          top: 0,
        },
        series: {
          center: ["50%", "55%"],
        },
      },
      settings: {
        area: true,
        stack: { [this.$i18n.t("dashborad.date")]: [this.$i18n.t("dashborad.page_view"), this.$i18n.t("dashborad.visitor_volume")] },
      },
      chartExtend: {
        legend: {
          // icon: "circle",
          right: 20,
          top: 10,
        }
      },
      usersList: [
        {
          url: require("@assets/image/1.jpg"),
          name: "大肥猫",
          date: 1606891232305,
          des: "这个家伙很懒,设么都没留下",
        },
        {
          url: require("@assets/image/2.jpg"),
          name: "呆呆",
          date: 1606891232305,
          des: "哒哒哒",
        },
        {
          url: require("@assets/image/3.jpg"),
          name: "啾啾~",
          date: 1606891232305,
          des: "暂无描述",
        },
        {
          url: require("@assets/image/4.jpg"),
          name: "哒哒哒~",
          date: 1606891232305,
          des: "很开心",
        },
      ],
      links: [
        {
          icon: "el-icon-house",
          name: this.$i18n.t('route.dashboard'),
          link: "/home/dashboard",
          color: "#4CD964",
        },
        {
          icon: "el-icon-edit-outline",
          name: this.$i18n.t('route.form'),
          link: "/form/index",
          color: "#5AC8FA",
        },
        {
          icon: "el-icon-pie-chart",
          name: this.$i18n.t('route.charts'),
          link: "/charts/index",
          color: "#FF9500",
        },
        {
          icon: "el-icon-s-platform",
          name: this.$i18n.t('route.monitoring'),
          link: "/charts/index",
          color: "#FF3B30",
        },
        {
          icon: "el-icon-user",
          name: this.$i18n.t('route.power'),
          link: "/charts/index",
          color: "#722ed1",
        },
        {
          icon: "el-icon-picture-outline",
          name: this.$i18n.t('route.upload'),
          link: "/charts/index",
          color: "#13c2c2",
        },
      ],
      btnList: [
        {
          label: "操作1",
          link: "/home/dashboard",
        },
        {
          label: "操作2",
          link: "/form/index",
        },
        {
          label: "操作3",
          link: "/charts/index",
        },
        {
          label: "操作4",
          link: "/home/dashboard",
        },
        {
          label: "操作5",
          link: "/home/dashboard",
        },
      ],
      tableData: [
        {
          task: "紧急会议1",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          task: "紧急会议2",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          task: "紧急会议3",
          address: "上海市普陀区金沙江路 1516 弄",
        },
        {
          task: "紧急会议4",
          address: "上海市普陀区金沙江路 1515 弄",
        },
        {
          task: "紧急会议5",
          address: "上海市普陀区金沙江路 1515 弄",
        },
        {
          task: "紧急会议6",
          address: "上海市普陀区金沙江路 1515 弄",
        },
      ],
    };
  },
  created() {
    this.timer = setInterval(() => {
      return (this.now_date = moment(new Date()).format("HH:mm:ss"));
    }, 1000);
  },
  methods: {
    initChart() {
      let num = this._.random(0, 1200, false);
      let num1 = this._.random(0, 1000, false);
      let date = new Date();
      this.chartData.rows.shift();
      this.chartData.rows.push({
        [this.$i18n.t("dashborad.date")]: moment(date).format("HH:mm:ss"),
        [this.$i18n.t("dashborad.page_view")]: num,
        [this.$i18n.t("dashborad.visitor_volume")]: num1,
      });
    },
    index(index) {
      return index + 1;
    },
    //跳转
    toPage(route) {
      this.$router.push({
        path: route.link,
      });
    },
    //添加操作
    addOpt() {
      this.dialog_visible = true;
    },
    handleClose(bool) {
      this.dialog_visible = bool;
      this.$refs["opt"].resetFields();
    },
    submit(bool) {
      this.$refs["opt"].validate((valid) => {
        if (valid) {
          this.btnList.push({
            label:this.optForm.name,
            link:this.optForm.link
          })
          this.dialog_visible=bool;
          this.$refs["opt"].resetFields();
        } else {
          return false;
        }
      });
    },
  },
  mounted() {
    this.init = setInterval(() => {
      this.initChart();
    }, 5000);
    this.countInt = setInterval(() => {
      this.time--;
      if (this.time == 0) {
        this.from = this.to;
        this.to = this._.random(0, 200, false);
        this.$refs["dn1"]&&this.$refs["dn1"].start();
        this.time = 5;
      }
    }, 1000);
    window.addEventListener("resize", () => {
      this.$refs["charts"].echartsResize();
      this.$refs["ring"].echartsResize();
    });
  },
};
</script>
<style lang="scss" scoped>
.ux-dashboard-tpl {
  width: 100%;
  height: 100%;
  padding: 0 10px 10px 10px;
  box-sizing: border-box;
  // background: #fff;
}
.charts-circle {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  // background: olivedrab;
}
.gray {
  color: $gray;
}
.word-spacing {
  word-spacing: 2px;
  line-height: 14px;
}
.link-hover {
  &:hover {
    color: $link-color;
  }
}
</style>