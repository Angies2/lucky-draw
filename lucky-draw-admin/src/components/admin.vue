<template>
  <div class="admin">
    <div class="Sign-in">
      <h4>一.签到时间选择</h4>
      <span>开始时间:</span>
      <DatePicker type="datetime" :value="startTime" format="yyyy-MM-dd HH:mm:ss" @on-change="changeStart" placeholder="请选择开始时间" style="width: 200px"></DatePicker>
      <span>结束时间:</span>
      <DatePicker type="datetime" :value="endTime" format="yyyy-MM-dd HH:mm:ss" @on-change="changeEnd" placeholder="请选择结束时间" style="width: 200px"></DatePicker>
      <button @click="submitSign">确定</button>
    </div>
    <div class="round-two">
      <h4>二.更新每一轮分数比</h4>
      <div class="game">
        <div>
          <span>第几轮:</span>
          <input v-model="round" />
        </div>
        <div>
          <span>红队分数:</span>
          <input v-model="red" />
        </div>
        <div>
          <span>蓝队分数:</span>
          <input v-model="blue" />
        </div>
        <button @click="submit" :disabled="submitDisable">确定</button>
      </div>
    </div>

    <div class="game-list">
      <h4>三.各轮分数列表</h4>
      <table>
        <tr>
          <td>序号</td>
          <td>轮次</td>
          <td>红队分数</td>
          <td>蓝队分数</td>
        </tr>
        <tr v-for="item in gameList" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.round}}</td>
          <td>{{item.redScore}}</td>
          <td>{{item.blueScore}}</td>
        </tr>
      </table>
      <button @click="totail">总计</button>
      <button @click="changeTotail">查看最终结果</button>
    </div>
    <div class="lucy">
      <h4>四.抽奖</h4>
      <span>抽几等奖:</span>
      <input v-model="prize" />
      <button @click="prizeTo" :disabled="prizeDisable">开始抽奖</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      startTime: new Date(),
      endTime: new Date(),
      round: '',
      red: '',
      blue: '',
      gameList: [],
      prize: '',
      num: {
        num1: 0,
        num2: 0,
        num3: 0
      },
      prizeDisable: false,
      submitDisable: false
    }
  },
  created() {
    this.getList()
  },
  methods: {
    changeStart(e) {
      this.startTime = new Date(e)
    },
    changeEnd(e) {
      this.endTime = new Date(e)
    },
    // 签到时间选择
    submitSign() {
      let _self = this
      let params = {
        startTime: this.startTime.getTime(),
        endTime: this.endTime.getTime()
      }
      _self.$http.post('/api/v1/config/set_sign_time', params).then(res => {
        if (res && res.data.code === 200) {
          alert('添加签到时间成功')
        }
      })
    },
    // 初始化页面数据
    submit() {
      let _self = this
      let params = {
        round: this.round,
        redScore: this.red,
        blueScore: this.blue
      }
      _self.submitDisable = true
      setTimeout(() => {
        _self.submitDisable = false
      }, 5000)
      _self.$http.post('/api/v1/round/add', params).then(res => {
        if (res && res.data.code === 200) {
          alert('添加成功')
          _self.getList()
        }
      })
    },
    totail() {
      let _self = this
      _self.$http.get('/api/v1/round/final_result', {}).then(res => {
        if (res && res.data.code === 200) {
          alert('最终结果上传成功')
        }
      })
    },
    getList() {
      let _self = this
      _self.$http.get('/api/v1/round/list', {}).then(res => {
        if (res && res.data.code === 200) {
          _self.gameList = res.data.object
          alert('最新分数刷新成功')
        }
      })
    },
    prizeTo() {
      let _self = this
      _self.prizeDisable = true
      setTimeout(() => {
        _self.prizeDisable = false
      }, 5000)
      if (_self.num.num3 >= 12 && _self.prize === '3') {
        alert('三等奖最多12人')
        return
      }
      if (_self.num.num2 >= 6 && _self.prize === '2') {
        alert('二等奖最多6人')
        return
      }
      if (_self.num.num1 >= 1 && _self.prize === '1') {
        alert('一等奖最多1人')
        return
      }
      _self.$http.post('/api/v1/publish/round_message', { message: _self.prize }).then(res => {
        if (res && res.data.code === 200) {
          alert('开始抽奖')
          if (_self.prize === '1') {
            _self.num.num1++
          } else if (_self.prize === '2') {
            _self.num.num2++
          } else if (_self.prize === '3') {
            _self.num.num3++
          }
        }
      })
    },
    changeTotail() {
      let _self = this
      _self.$http.post('/api/v1/publish/page_message', { message: '1' }).then(res => {
        if (res && res.data.code === 200) {
          alert('最终结果查看成功')
        }
      })
    }
  }
}
</script>

<style lang="less">
.admin {
  font-size: 20px;
  .round-two,
  .Sign-in,
  .game-list {
    margin-top: 70px;
  }
  .game {
    display: flex;
    justify-content: space-around;
  }
}
</style>
