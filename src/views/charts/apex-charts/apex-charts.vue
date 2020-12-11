<!--
 * @Author: zhangyao
 * @Date: 2020-12-11 16:49:01
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-11 18:07:17
-->
<template>
  <div class="apex-charts-tpl border-box min-height-full">
    <el-row :gutter="24">
      <el-col :lg="12" :md="12" :xs="24" class="charts-content">
        <ux-panel>
          <span slot="title">line</span>
          <apexchart
            type="line"
            height="280"
            :options="lineChartOptions"
            :series="lineSeries"
          ></apexchart>
        </ux-panel>
      </el-col>
      <el-col :lg="12" :md="12" :xs="24" class="charts-content">
        <ux-panel>
          <span slot="title">area</span>
          <apexchart
            type="area"
            height="280"
            :options="areaChartOptions"
            :series="areaSeries"
          ></apexchart>
        </ux-panel>
      </el-col>
      <el-col :lg="12" :md="12" :xs="24" class="charts-content">
        <ux-panel>
          <span slot="title">bar</span>
          <apexchart
            type="bar"
            height="280"
            :options="barChartOptions"
            :series="barSeries"
          ></apexchart>
        </ux-panel>
      </el-col>
      <el-col :lg="12" :md="12" :xs="24" class="charts-content">
        <ux-panel>
          <span slot="title">heatmap</span>
          <apexchart
            type="heatmap"
            height="280"
            :options="heatmapChartOptions"
            :series="heatmapSeries"
          ></apexchart>
        </ux-panel>
      </el-col>
      <el-col :lg="12" :md="12" :xs="24" class="charts-content">
        <ux-panel>
          <span slot="title">radialBar</span>
          <apexchart
            type="radialBar"
            height="300"
            :options="radialBarChartOptions"
            :series="radialBarSeries"
          ></apexchart>
        </ux-panel>
      </el-col>
       <el-col :lg="12" :md="12" :xs="24" class="charts-content">
        <ux-panel>
          <span slot="title">polarArea</span>
        </ux-panel>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    function generateHeatmapData(count, yrange) {
      var i = 0;
      var series = [];
      while (i < count) {
        var x = "w" + (i + 1).toString();
        var y =
          Math.floor(Math.random() * (yrange.max - yrange.min + 1)) +
          yrange.min;

        series.push({
          x: x,
          y: y,
        });
        i++;
      }
      console.log(series);
      return series;
    }
    return {
      lineSeries: [
        {
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
        },
        {
          name: "Page Views",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
        },
        {
          name: "Total Visits",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
        },
      ],
      lineChartOptions: {
        chart: {
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5],
          curve: "straight",
          dashArray: [0, 8, 5],
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [
            "01 Jan",
            "02 Jan",
            "03 Jan",
            "04 Jan",
            "05 Jan",
            "06 Jan",
            "07 Jan",
            "08 Jan",
            "09 Jan",
            "10 Jan",
            "11 Jan",
            "12 Jan",
          ],
        },
        grid: {
          borderColor: "#f1f1f1",
        },
      },
      //are
      areaSeries: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      areaChartOptions: {
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
      //
      barSeries: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
      barChartOptions: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        fill: {
          opacity: 1,
        },
      },
      //heatmap
      heatmapSeries: [
        {
          name: "Metric1",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric2",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric3",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric4",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric5",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric6",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric7",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric8",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
        {
          name: "Metric9",
          data: generateHeatmapData(18, {
            min: 0,
            max: 90,
          }),
        },
      ],
      heatmapChartOptions: {
        chart: {
          height: 350,
          type: "heatmap",
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#008FFB"]
      },
      //radiaBar
      radialBarSeries: [76, 67, 61, 90],
      radialBarChartOptions: {
        chart: {
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              },
            },
          },
        },
        colors: ["#1ab7ea", "#0084ff", "#39539E", "#0077B5"],
        labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
        legend: {
          show: true,
          floating: true,
          fontSize: "16px",
          position: "left",
          offsetX: 200,
          offsetY: 0,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0,
          },
          formatter: function (seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            vertical: 3,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: false,
              },
            },
          },
        ],
        //polarArea
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.charts-content {
  margin-top: 10px;
}
</style>