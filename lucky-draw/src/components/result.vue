<template>
  <div class="result">
    <div class="lucy" id="lucy" v-show="flag==0">

    </div>
    <div class="one items" v-show="flag==1">
      <div class="title">
        <img src="~@/assets/one.png" />
      </div>
      <div class="content">
        <div class="circle">
          <img :src="onePrice.url" />
        </div>
        <div class="mask">{{onePrice.name}}</div>
      </div>
    </div>
    <div class="two items" v-show="flag==2">
      <div class="title">
        <img src="~@/assets/two.png" />
      </div>
      <div class="content">
        <div class="item-result" v-for="item in twoPrice" :key="item.name">
          <div class="circle">
            <img :src="item.url" />
          </div>
          <div class="mask">{{item.name}}</div>
        </div>
      </div>
    </div>
    <div class="three items" v-show="flag==3">
      <div class="title">
        <img src="~@/assets/thtee.png" />
      </div>
      <div class="content">
        <div class="item-result" v-for="item in threePrice" :key="item.name">
          <div class="circle">
            <img :src="item.url" />
          </div>
          <div class="mask">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from '@/bus/eventBus'
import Lucky from 'lucky-draw'
export default {
  name: 'result',
  components: { Lucky },
  data() {
    return {
      flag: 0, // 标志显示抽奖界面和几等奖界面,0.抽奖,1.一等奖,2.二等奖,3.三等奖
      result: [],
      config: [{
        text: '一等奖',
        total: 6, // 动效次数
        time: 100, // 等待扩展
        num: 1, // 总中奖人数
        oneNum: 1, // 一次中奖人数
        data: [] // 中奖的数据 初始长度为0
      }, {
        text: '二等奖',
        total: 6,
        time: 100,
        num: 6,
        oneNum: 1,
        data: []
      }, {
        text: '三等奖',
        total: 6,
        time: 100,
        num: 12,
        oneNum: 1,
        data: []
      }],
      lucky: {},
      onePrice: {},
      twoPrice: [],
      threePrice: []
    }
  },
  created() {
    this.getAll()
  },
  mounted() {
    // this.lucky.execute.getRom(1) // 抽奖方法     参数 为config 数组下标， 已上面config 数据为列比如我想抽一等奖 就填0  二等奖就填1
    Bus.$on('Lucky', (data) => {
      this.flag = 0
      this.lucky.execute.getRom(data - 1)
      window.addEventListener('lucky_complete', (e) => {
        if (data === 1) {
          this.flag = 1
          this.onePrice = {
            name: e.config[0].data[0].name,
            url: e.config[0].data[0].url
          }
        } else if (data === 2) {
          this.flag = 2
          this.twoPrice = e.config[1].data
        } else if (data === 3) {
          this.flag = 3
          this.threePrice = e.config[2].data
        }
        console.log(e)
      })
    })
  },
  watch: {

  },
  methods: {
    getAll() {
      let _self = this
      _self.$http.get('/api/v1/employee/draw_list', {}).then(res => {
        if (res && res.data.code === 200) {
          res.data.object.forEach((element, index) => {
            _self.result.push({
              name: element.userName,
              url: element.avatar
            })
          })
          this.$nextTick(() => {
            this.lucky = new Lucky({ el: '#lucy', data: this.result, gn: 20, config: this.config, baseWH: 120 })// baseWH初始头像大小,默认是60
            this.lucky.execute.init() // 初始化
          })
        }
      })
    }

  }
}
</script>

<style lang="less">
.result {
  background: url("~@/assets/IDEuanBn2.jpg") no-repeat;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: relative;
  .items {
    width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .item-result {
    display: flex;
    flex-direction: row;
    width: 26%;
    margin-bottom: 35px;
  }
  .one {
    .title {
      text-align: center;
      img {
        width: 450px;
      }
    }
    .circle {
      width: 280px;
      height: 280px;
      img {
        width: 280px;
        height: 280px;
        border-radius: 50%;
      }
    }
    .mask {
      font-size: 50px;
      line-height: 280px;
      height: 280px;
    }
  }
  .two,
  .three {
    .title {
      text-align: center;
      img {
        width: 360px;
      }
    }
    .circle {
      width: 170px;
      height: 170px;
      img {
        width: 170px;
        height: 170px;
        border-radius: 50%;
      }
    }
    .mask {
      font-size: 45px;
      line-height: 170px;
      height: 170px;
    }
  }
  .content {
    justify-content: center;
    display: flex;
    margin-top: 110px;
    flex-wrap: wrap;
    .circle {
      border-radius: 50%;
      border: 1px solid #ccc;
    }
    .mask {
      padding-left: 50px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
  .list {
    margin-left: auto;
    margin-right: auto;
    width: 75%;
    height: 80vh;
    border-radius: 0.106667rem;
    position: absolute;
    left: 12%;
    top: 9%;
    // background-color: rgba(255, 255, 255, 0.2);
  }

  .item {
    width: 60px;
    height: 60px;
    border-radius: 30px;
    overflow: hidden;
    position: absolute;
    opacity: 0.5;
  }
  .item-content {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    background-color: #000000;
    opacity: 0.7;
  }

  .item img {
    width: 100%;
    box-shadow: 0px 0px 5px #6a82a2;
  }
  .lucy {
    height: 100%;
  }
}
</style>
