<template>
  <div class="index" style="">
    <div class="barrage">
      <vueBaberrage :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop">
      </vueBaberrage>
    </div>
    <div class="pk-group">
      <div class="item">
        <span class="font-red">红色原力&nbsp;&nbsp;</span>
        <span class="percent">
          <div class="bg-red" :style="{width:`${percent.redSignedCount/percent.redTotalCount*100}%`}"></div>
          <div class="person">{{percent.redSignedCount}}/{{percent.redTotalCount}}人</div>
        </span>
      </div>
      <div class="item">
        <span class="font-red" @click="next">蓝色能量&nbsp;&nbsp;</span>
        <span class="percent">
          <div class="bg-blue" :style="{width:`${percent.blueSignedCount/percent.blueTotalCount*100}%`}"></div>
          <div class="person">{{percent.blueSignedCount}}/{{percent.blueTotalCount}}人</div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import vueBaberrage from './vue-baberrage'
import { MESSAGE_TYPE } from './component/constants'
import Bus from '@/bus/eventBus'
export default {
  name: 'index',
  components: { vueBaberrage },
  // components: { VueBaberrageMsg },
  data() {
    return {
      msg: 'Hello vue-baberrage',
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: false,
      barrageList: [],
      percent: {
        redTotalCount: 50,
        redSignedCount: 0,
        blueTotalCount: 50,
        blueSignedCount: 0
      }
    }
  },
  created() {
    // setInterval(this.addToList, 1000)
    Bus.$on('changeData', (data) => {
      this.barrageList.push({
        userId: data.userId,
        avatar: data.avatar,
        message: data.message,
        time: 10,
        type: MESSAGE_TYPE.NORMAL,
        color: data.color
      })
      console.log(this.barrageList)
      this.percent = {
        redTotalCount: data.redTotalCount === 0 ? this.percent.redTotalCount : data.redTotalCount,
        redSignedCount: data.redSignedCount === 0 ? this.percent.redSignedCount : data.redSignedCount,
        blueTotalCount: data.blueTotalCount === 0 ? this.percent.blueTotalCount : data.blueTotalCount,
        blueSignedCount: data.blueSignedCount === 0 ? this.percent.blueSignedCount : data.blueSignedCount
      }
    })
  },
  methods: {
    addToList() {

    },
    next() {
      this.$router.push({ name: 'champion', params: {} })
    }
  }
}
</script>

<style lang="less">
.index {
  background: url("~@/assets/IDEuanBn .jpg") no-repeat;
  height: 100%;
  width: 100%;
  background-size: cover;
  .barrage {
    height: 70%;
    .baberrage-stage {
      height: 70%;
    }
  }
  .pk-group {
    text-align: center;
    padding-top: 5%;
    display: flex;
    justify-content: center;
    .item {
      color: #f5d499;
      width: 40%;
      .font-red {
        font-size: 60px;
        font-family: hzgb;
      }
      .percent {
        width: 60%;
        height: 80px;
        display: inline-block;
        transform: skew(-10deg);
        background-color: #260104;
        // background: url("~@/assets/percent.png") no-repeat;
        position: relative;
        vertical-align: bottom;
        .person {
          position: absolute;
          right: 5px;
          top: 5px;
          font-size: 45px;
        }
        .bg-red {
          margin: 7px 0;
          height: 53px;
          background: linear-gradient(
            180deg,
            rgba(252, 123, 88, 1) 0%,
            rgba(247, 0, 0, 1) 54%,
            rgba(181, 22, 1, 1) 100%
          );
        }
        .bg-blue {
          margin: 7px 0;
          height: 53px;
          background: linear-gradient(
            180deg,
            rgba(80, 112, 215, 1) 0%,
            rgba(79, 130, 255, 1) 34%,
            rgba(11, 48, 173, 1) 100%
          );
        }
      }
    }
  }
}
</style>
