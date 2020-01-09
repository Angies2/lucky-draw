<template>
  <div class="champion">
    <div class="content-center">
      <div class="top-img">
        <img src="~@/assets/red.png" v-if="redScore>blueScore" />
        <img src="~@/assets/blue.png" v-else-if="redScore<blueScore" />
      </div>
      <div class="content" :style="{marginTop:`${redScore==blueScore?'250px':''}`}">
        <div class="left buttle">
          <span class="item-img">
            {{redScore}}
          </span>
          <span>
            <img src="~@/assets/redname .png" @click="previous" />
          </span>
        </div>
        <div class="content-buttle">
          <img src="~@/assets/red-PK.png" v-if="redScore>blueScore" />
          <img src="~@/assets/draw.png" v-else-if="redScore==blueScore" />
          <img src="~@/assets/blue-PK.png" v-else />
        </div>
        <div class="right buttle">
          <span class="item-img">
            {{blueScore}}
          </span>
          <span>
            <img src="~@/assets/bluename.png" @click="next" />
          </span>
        </div>
      </div>
    </div>
    <jb v-show="jsShow"></jb>
  </div>
</template>

<script>
import Bus from '@/bus/eventBus'
import jb from './jb'
export default {
  components: { jb },
  data() {
    return {
      round: '',
      redScore: 0,
      blueScore: 0,
      jsShow: false
    }
  },
  created() {
    Bus.$on('changeScore', (data) => {
      console.log(data)
      this.redScore = data.redScore
      this.blueScore = data.blueScore
      this.jsShow = true
    })
    Bus.$on('result', (data) => {
      this.next()
    })
  },
  methods: {
    previous() {
      this.$router.push({ name: 'index', params: {} })
    },
    next() {
      let params = {
        successTeam: this.redScore > this.blueScore ? 'red' : 'blue'
      }
      this.$router.push({ name: 'success', params: params })
    }
  }
}
</script>

<style lang="less">
.champion {
  background: url("~@/assets/IDEuanBn2.jpg") no-repeat;
  height: 100%;
  width: 100%;
  background-size: cover;
  .content-center {
    padding-top: 200px;
  }
  .top-img {
    text-align: center;
    padding-top: 38px;
    img {
      width: 750px;
    }
  }
  .content {
    display: flex;
    text-align: center;
    padding: 180px 240px 0 240px;
    .left {
    }
    .content-buttle {
      margin: auto;
      img {
        width: 88%;
      }
    }
    .right {
    }
    .buttle {
      width: 500px;
      display: flex;
      flex-direction: column;
      font-size: 47px;
      font-family: hzgb;
      color: rgba(245, 212, 153, 1);
      img {
        width: 300px;
      }
      .item-img {
        font-family: myFont;
        display: inline-block;
        font-size: 110px;
      }
    }
  }
}
</style>
