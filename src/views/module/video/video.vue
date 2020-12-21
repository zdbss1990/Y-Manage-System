<!--
 * @Author: zhangyao
 * @Date: 2020-12-21 13:58:02
 * @LastEditors: zhangyao
 * @LastEditTime: 2020-12-21 14:51:30
-->
<template>
  <div class="video-tpl border-box min-height-full bg-f p-10 radius-4">
      <el-row :gutter="24">
        <el-col :span="24">
            <div class="f-s-18 m-b-10">{{$t("route.video") }}</div>
            <p class="f-s-12 gray m-b-10">基于vue-video-player插件实现.</p>
        </el-col>
        <el-col :span="24">
            <video-player class="vjs-custom-skin"
                        ref="videoPlayer"
                        :options="playerOptions"
                        :playsinline="true"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @ended="onPlayerEnded($event)"
                        @loadeddata="onPlayerLoadeddata($event)"
                        @waiting="onPlayerWaiting($event)"
                        @playing="onPlayerPlaying($event)"
                        @timeupdate="onPlayerTimeupdate($event)"
                        @canplay="onPlayerCanplay($event)"
                        @canplaythrough="onPlayerCanplaythrough($event)"
                        @ready="playerReadied"
                        @statechanged="playerStateChanged($event)">
            </video-player>
         </el-col>
      </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playerOptions: {
        //   width:'auto',
        //   height: '360',
        //   autoplay: true,
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            // mp4
            src: "http://vjs.zencdn.net/v/oceans.mp4",
            // webm
            // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
      },
    };
  },
  computed:{
      player() {
        return this.$refs.videoPlayer.player
      }
  },
   methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      onPlayerEnded(player) {
        // console.log('player ended!', player)
      },
      onPlayerLoadeddata(player) {
        // console.log('player Loadeddata!', player)
      },
      onPlayerWaiting(player) {
        // console.log('player Waiting!', player)
      },
      onPlayerPlaying(player) {
        // console.log('player Playing!', player)
      },
      onPlayerTimeupdate(player) {
        // console.log('player Timeupdate!', player.currentTime())
      },
      onPlayerCanplay(player) {
        // console.log('player Canplay!', player)
      },
      onPlayerCanplaythrough(player) {
        // console.log('player Canplaythrough!', player)
      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },
      // player is ready
      playerReadied(player) {
        // seek to 10s
        console.log('example player 1 readied', player)
        player.currentTime(10)
        // console.log('example 01: the player is readied', player)
      }
    },
    mounted(){
        setTimeout(()=>{
            console.log('dynamic change options', this.player);
            this.player.muted(false)
        },10000)
    }
};
</script>
<style lang="scss">
.video-js{
    width: 100%;
}
.vjs-custom-skin > .video-js .vjs-big-play-button {
  top: 50%;
  left: 50%;
  margin-left: -1.5em;
  margin-top: -1em
}
</style>