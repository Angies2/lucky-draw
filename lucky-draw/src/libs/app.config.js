export default {
  API_HOST: '',

  METHODS: {
    setCookie: function (name, value, time) {
      // 设置cookie
      let Days = time
      let exp = new Date()
      exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000)
      document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString() + ';path=/'
      sessionStorage.setItem('Timestamp', exp.getTime())
    },
    getCookie: function (name) {
      let arr
      let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
      if ((arr = document.cookie.match(reg))) return arr[2]
      else return null
    },
    formatDateTime: function (inputTime, type) {
      let date = new Date(inputTime)
      let y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = date.getDate()
      d = d < 10 ? '0' + d : d
      let h = date.getHours()
      h = h < 10 ? '0' + h : h
      let minute = date.getMinutes()
      let second = date.getSeconds()
      minute = minute < 10 ? '0' + minute : minute
      second = second < 10 ? '0' + second : second
      if (type === 'y-m-d') return y + '-' + m + '-' + d
      else return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second
    }
  }
}
