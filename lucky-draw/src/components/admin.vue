<template>
  <div class="admin">
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
      <button @click="submit">确定</button>
    </div>
    <button @click="totail">总计</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      round: '',
      red: '',
      blue: ''
    }
  },
  created() {
  },
  methods: {
    // 初始化页面数据
    submit() {
      let _self = this
      let params = {
        round: this.round,
        redScore: this.red,
        blueScore: this.blue
      }
      _self.$http.post('/api/v1/round/add', params).then(res => {
        if (res && res.data.code === 200) {
          alert('添加成功')
        }
      })
    },
    totail() {

    }
  }
}
</script>

<style lang="less">
.admin {
  font-size: 20px;
  .game {
    margin-top: 100px;
    display: flex;
    justify-content: space-around;
  }
}
</style>
