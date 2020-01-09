<template>
  <div class="success">
    <jb></jb>
    <div class="png-win">
      <div class="light">
        <img src="~@/assets/blue-win.png" v-if="result==='blue'" @click="next" />
        <img src="~@/assets/red-win.png" v-else @click="next" />
      </div>
    </div>
  </div>
</template>

<script>
import jb from './jb'
export default {
  name: 'success',
  components: { jb },
  data() {
    return {
      result: ''
    }
  },
  created() {
    this.result = this.$route.params.successTeam
    console.log(this.result === 'blue')
  },
  methods: {
    next() {
      this.$router.push({ name: 'result', params: {} })
    }
  }
}
</script>

<style lang="less">
.success {
  background: url("~@/assets/IDEuanBn .jpg") no-repeat;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: relative;
  .png-win {
    .light {
      // background: url("~@/assets/light.png") no-repeat;
      // width: 1628px;
      // height: 1628px;
      // background-size: cover;
      // margin: auto;
    }
    img {
      width: 1582px;
      position: absolute;
      left: 52%;
      top: 40%;
      transform: translate(-50%, -50%);
      animation: mymove 5s 1;
      -webkit-animation: mymove 5s 1; /*Safari and Chrome*/
    }
    @keyframes mymove {
      from {
        width: 791px;
      }
      to {
        width: 1582px;
      }
    }

    @-webkit-keyframes mymove /*Safari and Chrome*/ {
      from {
        width: 791px;
      }
      to {
        width: 1582px;
      }
    }
  }
}
</style>
