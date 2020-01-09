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
        // if (data && data.body && data.body.method && data.body.data) {
        //   console.log('subscribe data-------------------', data.body)
        //   switch (data.body.method) {
        //     case '/data/push':
        //       Bus.$emit('changePedestrianLeftLatestData', data.body.data)
        //       break
        //     case '/api/v1/dataScreen/people/todayData':
        //       Bus.$emit('changePedestrianRightTodayData', data.body.data)
        //       break
        //     case '/api/v1/dataScreen/vehicle/latestData':
        //       Bus.$emit('changeCarDealerLeftLatestData', data.body.data)
        //       break
        //     case '/api/v1/dataScreen/vehicle/todayData':
        //       Bus.$emit('changeCarDealerRightTodayData', data.body.data)
        //       break
        //   }
        // }
      })
      // stompClient.subscribe(`/user/data/community/${id}`, function (data) {
      //   if (data) {
      //     console.log('subscribe data', data)
      //   }
      // })
      // stompClient.subscribe(`/user/data/login`, function (data) {
      //   if (data) {
      //     console.log('subscribe data', data)
      //     Bus.$emit('single_login', data.body)
      //   }
      // })
    },
    function errorCallBack(error) {
      // 连接失败时再次调用函数
      console.log('error', error)
      // stompClient.disconnect(()=>{
      //   console.log("111");
      // })
      // initWebsocket(accessToken,id)
    }
  )
}

export default initWebsocket
