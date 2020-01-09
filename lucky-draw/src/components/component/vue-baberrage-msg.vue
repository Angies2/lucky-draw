<template>
  <div class="baberrage-item blue" v-bind:class="item.barrageStyle" v-bind:style="item.style" v-if="item.color==1">
    <div class="baberrage-avatar" :style="item.color==1?'border:3px solid rgba(15,93,255,1)':'border: 3px solid rgba(220, 50, 3, 1);'"><img :src="item.avatar"></div>
    <div class="baberrage-msg">{{ item.message }}</div>
  </div>
  <div class="baberrage-item" v-bind:class="item.barrageStyle" v-bind:style="item.style" v-else>
    <div class="baberrage-avatar" :style="item.color==1?'border:3px solid rgba(15,93,255,1)':'border: 3px solid rgba(220, 50, 3, 1);'"><img :src="item.avatar"></div>
    <div class="baberrage-msg">{{ item.message }}</div>
  </div>
</template>
<script>
export default {
  name: 'vue-baberrage-message',
  props: {
    item: {
      type: Object,
      default() { return {} }
    }
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less">
.baberrage-item {
  position: absolute;
  width: auto;
  display: block;
  color: #000;
  transform: translateX(500%);
  padding: 5px 8px 5px 38px;
  text-align: left;
  white-space: nowrap;
  .baberrage-avatar {
    position: absolute;
    width: 120px;
    height: 120px;
    left: -102px;
    z-index: 9999;
    top: 50%;
    border-radius: 50%;
    overflow: hidden;
    transform: translateY(-50%);
    img {
      width: 120px;
    }
  }
  .baberrage-msg {
    line-height: 50px;
    padding-left: 8px;
    white-space: nowrap;
  }
}
.baberrage-item.normal {
  font-size: 18px;
  background: rgba(255, 255, 255, 1);
  border-radius: 0px 100px 100px 0px;
  color: #333333;
  border: 3px solid rgba(220, 50, 3, 1);
}
.blue {
  border: 3px solid rgba(15, 93, 255, 1) !important;
}
</style>
