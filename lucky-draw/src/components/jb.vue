<template>
  <div class="main">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      snowArray: {}, // 雪花对象
      snowIndex: 0, // 标识符
      setting: {
        num: 5, // 数量
        snowSize: 40, // 大小
        startX: 0, // 起始横坐标
        startY: 0, // 起始纵坐标
        vy: 0.01
      },
      ctx: null,
      canvas: null,
      img: []
    }
  },
  mounted: function () {
    this.canvas = this.$refs['canvas']
    this.ctx = this.canvas.getContext('2d')
    this.img = this.getImg([require('@/assets/j1.png'), require('@/assets/j2.png'), require('@/assets/j3.png'), require('@/assets/j4.png'), require('@/assets/j5.png'), require('@/assets/j6.png')])
    this.canvas.width = document.body.clientWidth
    this.canvas.height = document.body.clientHeight
    window.requestAnimationFrame(this.loop)
  },
  methods: {
    getImg: function (ulist) {
      let imgs = []
      for (let i = 0; i < ulist.length; i++) {
        let im = new Image()
        im.src = ulist[i]
        imgs.push(im)
      }
      return imgs
    },
    render() {
      for (let i = 0; i < this.setting.num; i++) {
        let snow = {}
        if (Math.random() > 0.97) {
          // 起始横坐标
          snow.x = Math.random() * this.canvas.width
          let c = parseInt(Math.random() * 6, 10)
          // 起始纵坐标
          snow.y = this.setting.startY
          snow.size = this.setting.snowSize + Math.random() * 10 - 10

          // 横坐标偏移量
          snow.vx = Math.random() * 3 - 2 // 偏移量
          // 纵坐标偏移量
          snow.vy = Math.random()
          snow.life = 0
          snow.img = this.img[c]
          snow.maxLife = 1000
          snow.id = this.snowIndex
          // 当前信息保存至对象snowArray
          this.snowArray[this.snowIndex] = snow
          this.snowIndex++
        }
      }
      for (let s in this.snowArray) {
        let cursnow = this.snowArray[s]
        cursnow.x += cursnow.vx
        cursnow.y += cursnow.vy
        cursnow.vy += this.setting.vy
        cursnow.life++
        // 删除
        if (cursnow.y > this.canvas.height * 1 - 20) {
          delete this.snowArray[cursnow.id]
        } else if (cursnow.life >= cursnow.maxLife) {
          delete this.snowArray[cursnow.id]
        }
        this.ctx.drawImage(cursnow.img, cursnow.x, cursnow.y, cursnow.size, Math.random() * cursnow.size)
      }
    },
    loop() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.render()
      window.requestAnimationFrame(this.loop)
    }
  }
}
</script>

<style>
.main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
canvas {
  position: absolute;
  top: 0;
  left: 0;
}
</style>
