<!--
 * @Author: zhangyao
 * @Date: 2020-12-15 15:40:34
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-17 15:54:08
-->
<template>
  <div class="google-maps-tpl border-box min-height-full radius-4">
    <el-form v-model="mapLocation" class="map-form" inline>
      <el-form-item prop="seach">
         <el-autocomplete
            v-model="mapLocation.address"
            :fetch-suggestions="querySearch"
            placeholder="请输入详细地址"
            style="width: 100%"
            :trigger-on-focus="false"
            clearable
            @select="handleSelect"
          >
         </el-autocomplete>
      </el-form-item>
    </el-form>
    <baidu-map
      id="map"
      class="bm-view"
      :center="mapCenter"
      :scroll-wheel-zoom="true"
      :zoom="mapZoom"
      :mapStyle="mapStyle"
      @ready="handlerBMap"
    >
      <!--比例尺控件-->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!--缩放控件-->
      <bm-navigation anchor="BMAP_ANCHOR_BOTTOM_RIGHT"></bm-navigation>
      <!-- <bm-city-list anchor="BMAP_ANCHOR_TOP_LEFT"></bm-city-list> -->
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mapStyle: {
        style: "dark",
      },
      mapCenter:{lng: 0, lat: 0},
      mapZoom: 15,
      mapLocation:{address:'',coordinate:null},
      marker:''
    };
  },
  methods:{
      handlerBMap({ BMap, map }) {
      this.BMap = BMap
      this.map = map
      if (this.mapLocation.coordinate && this.mapLocation.coordinate.lng) {
        this.mapCenter.lng = this.mapLocation.coordinate.lng
        this.mapCenter.lat = this.mapLocation.coordinate.lat
        this.mapZoom = 15
        map.addOverlay(new this.BMap.Marker(this.mapLocation.coordinate))
      } else {
        this.mapCenter.lng = 113.271429
        this.mapCenter.lat = 23.135336
        this.mapZoom = 10
      }
    },
    querySearch(queryString, cb) {
      let myGeo = new this.BMap.Geocoder()
      myGeo.getPoint(queryString,(point)=> {
        if (point) {
          this.mapLocation.coordinate = point
          this.makerCenter(point)
        } else {
          this.mapLocation.coordinate = null
        }
      }, this.locationCity)
      let options = {
        onSearchComplete: function(results) {
          if (local.getStatus() === 0) {
            // 判断状态是否正确
            let s = []
            for (let i = 0; i < results.getCurrentNumPois(); i++) {
              let x = results.getPoi(i)
              let item = { value:`${x.address}${x.title}`, point: x.point,title:x.title }
              s.push(item)
              cb(s)
            }
          } else {
            cb([])
          }
        }
      }
      let local = new this.BMap.LocalSearch(this.map, options)
      local.search(queryString)
    },
    handleSelect(item) {
      let { point,title} = item;
      this.mapLocation.coordinate = point
      this.makerCenter(point)
    },
    makerCenter(point) {
      if (this.map) {
        this.map.clearOverlays()
        this.map.addOverlay(new this.BMap.Marker(point))
        this.mapCenter.lng = point.lng
        this.mapCenter.lat = point.lat
        this.mapZoom = 15
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.bm-view {
  width: 100%;
  height: 680px;
}
.google-maps-tpl {
  position: relative;
  .map-form {
    position: absolute;
    top: 10px;
    left: 30px;
    z-index: 1000;
    color: #fff;
  }
  .search-map {
    // position: absolute;
    top: 49px;
    left: 0px;
    z-index: 1000;
    // width: 200px;
  }
}
</style>