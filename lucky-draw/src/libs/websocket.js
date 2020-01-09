import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import Bus from '@/bus/eventBus'

const initWebsocket = (accessToken, id) => {
  let _self = this
  let url = `http://192.168.2.33:9999/gs-guide-websocket` // 连接地址
  // 建立连接对象（还未发起连接）
  let socket = new SockJS(url)
  // 获取 STOMP 子协议的客户端对象
  let stompClient = Stomp.over(socket)
  // 向服务器发起websocket连接并发送CONNECT帧
  stompClient.connect({}, // 可添加客户端的认证信息
    function connectCallback() { // 连接成功的回调函数
      console.log(stompClient)
      // 订阅频道
      stompClient.subscribe(`/data/push`, function (data) {
        Bus.$emit('changeData', JSON.parse(data.body))
      })
      stompClient.subscribe(`/data/round`, function (data) {
        // 更新节目分数
        Bus.$emit('changeScore', JSON.parse(data.body))
      })
      stompClient.subscribe(`/data/page`, function (data) {
        // 查看游戏结果
        Bus.$emit('result', JSON.parse(data.body))
      })
      stompClient.subscribe(`/data/other`, function (data) {
        // 抽奖
        Bus.$emit('Lucky', JSON.parse(data.body))
      })
    },
    function errorCallBack(error) {
      // 连接失败时再次调用函数
      console.log('error', error)
    }
  )
}

export default initWebsocket
