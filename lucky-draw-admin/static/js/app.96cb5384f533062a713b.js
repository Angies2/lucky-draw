webpackJsonp([1],{"+skl":function(t,e){},"4YRj":function(t,e){},"8Pb5":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAB30lEQVRYR+2YvUokQRSFv4P/oIkgPoC5PoMYGRgpuhvqC6z6CIYmamJqqKCYGBgJvoLGmm6ysBso6OLolZIeGAW7b9dYrY1dMDDQt6q+PnW66tYVNWuqGS8NcOoVaxT+EgqbWR+wBqwAE0DvB4G1gCtgD9iS9FA0bqElzKwHOAFmiwbr8vkpMCfpMW8cD/AvYBv4l6l8Btw74MwRMwjMBHWBUWBV0k63wBfAJPBT0oEDonSImf0A9oFLSVPdAgc1B4ARSbelaRwdzGwYuAH+Swqqv9s8lnhZWkmFsQ62d0PMzDVPIYR3oG5gQ1/vPA1wrNKNwrX+6MxsGjgChiItcAfMSzpv909qCTObBw7DbhcJHLawBUnHlQBn29AYkLvJ57zMvaQ/nc+TKhypam635MBZyhmbZrbeppJJgTMPh0QoGhhYqszDtQPOPrpwCwm/mPZQqSViCIv6JPVwpvA40F8EAjwBvyXl3kCSAptZ+9rk4H0J2ZG0mhecGngR2M0Ubp92nade5/+g7IakzU8D9spaJi6pwmVAvLENcK3zYe8yl4n71paoXSGldqWq9qn2t2Qx0GPhJMXAepVbO1LJdWC5REHbU24NBe3rDy1oe9a1ypjYa3qVjK/maoBTS/8MVvJQPEwuNHoAAAAASUVORK5CYII="},"9zOY":function(t,e){},BoJ7:function(t,e){},FlaK:function(t,e){},Iv8u:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};s.d(a,"get",function(){return K}),s.d(a,"post",function(){return W}),s.d(a,"put",function(){return z}),s.d(a,"del",function(){return X}),s.d(a,"upload",function(){return Z});s("+skl");var n=s("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=s("VU/8")({name:"App"},i,!1,function(t){s("FlaK")},null,null).exports,o=s("NYxO");n.default.use(o.a);var c=new o.a.Store({state:{params:{}},getters:{getParam:function(t){return t.params}},mutations:{SetParam:function(t,e){t.params=e}},actions:{changeParam:function(t,e){t.commit("SetParam",e)}}}),l=s("/ocq"),d=s("DNVT"),u=s("BTaQ"),p=(s("v2ns"),{getLocalTime:function(t){return new Date(1e3*parseInt(t)).toLocaleString().replace(/:\d{1,2}$/," ")},setCookie:function(t,e,s){var a=s,n=new Date;n.setTime(n.getTime()+24*a*60*60*1e3),document.cookie=t+"="+escape(e)+";expires="+n.toGMTString()+";path=/",sessionStorage.setItem("Timestamp",n.getTime())},getCookie:function(t){var e,s=new RegExp("(^| )"+t+"=([^;]*)(;|$)");return(e=document.cookie.match(s))?unescape(e[2]):null},formatDateTime:function(t,e){var s=new Date(t),a=s.getFullYear(),n=s.getMonth()+1;n=n<10?"0"+n:n;var i=s.getDate();i=i<10?"0"+i:i;var r=s.getHours();r=r<10?"0"+r:r;var o=s.getMinutes(),c=s.getSeconds();return o=o<10?"0"+o:o,c=c<10?"0"+c:c,"y-m-d"===e?a+"-"+n+"-"+i:a+"-"+n+"-"+i+" "+r+":"+o+":"+c}}),m={name:"index",components:{Message:u.Message},data:function(){return{planT:[],slideTop:[{id:"1",imgUrl:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/banner%403x.png",titleS:"一分钟智能家居小百科3",introductionS:"方便·节能·安全,智慧改变即刻开始"}],slideMiddle:[{id:"1",imgUrl:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/%E5%85%A5%E4%BE%B5%E6%8A%A5%E8%AD%A6%403x.png",name:"入侵报警"},{id:"2",imgUrl:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/%E6%97%A0%E6%84%9F%E7%81%AF%E5%85%89%403x.png",name:"无感灯光"},{id:"3",imgUrl:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/%E5%AE%89%E9%98%B2%E5%AE%88%E6%8A%A4%403x.png",name:"安防守护"},{id:"4",imgUrl:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/%E8%88%92%E9%80%82%E7%8E%AF%E5%A2%83%403x.png",name:"舒适环境"},{id:"5",imgUrl:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/%E6%97%A0%E6%84%9F%E9%80%9A%E8%A1%8C%403x.png",name:"无感通行"}]}},mounted:function(){var t=void 0!==this.$route.query.pid?this.$route.query.pid:14,e=void 0!==this.$route.query.hid?this.$route.query.hid:8;p.setCookie("pid",t),p.setCookie("hid",e),p.setCookie("username","王小明"),p.setCookie("phone","18777777777"),p.setCookie("address","浙江省杭州市拱墅区甲乙路丙丁小区XX栋201室"),this.init(),this.initData(),document.body.scrollTop=0,document.documentElement.scrollTop=0},methods:{init:function(){new d.a(".top-swiper",{speed:300,autoplay:{delay:2e3,disableOnInteraction:!1},loop:!0,slidesPerView:1,spaceBetween:0,centeredSlides:!0,initialSlide:1,grabCursor:!0}),new d.a(".recommended-container",{slidesPerView:4,spaceBetween:8})},initData:function(){var t=this,e={projectId:p.getCookie("pid"),houseId:p.getCookie("hid")};t.$http.get("/optional/h5/sale_package/list",e).then(function(e){e&&200===e.data.code?t.planT=e.data.data:u.Message.error(e.data.msg)})},toDetail:function(t){this.$router.push({name:"detail",params:{salePackageId:t}})},toIndent:function(){this.$router.push({name:"indent",params:{}})}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("div",{staticClass:"index"},[a("div",{staticClass:"swiper-container top-swiper"},[a("div",{staticClass:"head"},[a("span",{attrs:{id:"indent"},on:{click:t.toIndent}},[a("img",{attrs:{src:s("8Pb5")}}),t._v("订单")])]),t._v(" "),a("div",{staticClass:"swiper-wrapper"},t._l(t.slideTop,function(t){return a("div",{key:t.id,staticClass:"swiper-slide"},[a("div",{staticClass:"img-pannel"},[a("div",{staticClass:"pic",style:{background:"url("+t.imgUrl+") no-repeat center"}})])])}),0),t._v(" "),a("div",{staticClass:"swiper-pagination"})]),t._v(" "),a("div",{staticClass:"content recommended"},[a("div",{staticClass:"swiper-container recommended-container"},[a("div",{staticClass:"swiper-wrapper"},[t._m(0),t._v(" "),t._l(t.slideMiddle,function(e){return a("div",{key:e.id,staticClass:"swiper-slide item"},[a("img",{attrs:{src:e.imgUrl}}),t._v(" "),a("div",{staticClass:"item-font"},[t._v(t._s(e.name))])])})],2)])]),t._v(" "),a("div",{staticClass:"content plan"},[t._m(1),t._v(" "),t._l(t.planT,function(e){return a("div",{key:e.salePackageId,staticClass:"btn-detail",on:{click:function(s){return t.toDetail(e.salePackageId)}}},[a("img",{attrs:{src:e.saleCardImage}})])})],2)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"swiper-slide item"},[e("img",{attrs:{src:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/new_img%402x.png"}}),this._v(" "),e("div")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("\n        ——\n        "),e("span",{staticClass:"plan-t"},[this._v("推荐方案")]),this._v(" ——\n      ")])}]};var h=s("VU/8")(m,v,!1,function(t){s("4YRj")},null,null).exports,g=s("Lcjf"),C=s.n(g),f={props:{url:{type:String,required:!0},uid:{type:Number,required:!0},coverUrl:{type:String,required:!1}},inject:{vidioParam:{from:"vidioParam",default:void 0}},created:function(){this.vidioParam&&!this.vidioParam.videos&&(this.vidioParam.videos=[])},mounted:function(){var t=this,e=new C.a({id:this.uid,url:this.url,poster:this.coverUrl,playsinline:!0,fluid:!0});this.vidioParam.videos.push({name:this.uid,player:e}),e.on("play",function(){t.vidioParam.$emit("vidioplay",t.uid)})}},_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"xg-player"},[e("div",{staticClass:"mse",attrs:{id:this.uid}})])},staticRenderFns:[]};var k={name:"detail",components:{swiperVideo:s("VU/8")(f,_,!1,function(t){s("hCRV")},null,null).exports,Message:u.Message},provide:function(){return{vidioParam:this}},created:function(){var t=this;this.$on("vidioplay",function(e){t.videos.filter(function(t){return t.name!==e}).forEach(function(t){t.player.pause()})})},data:function(){return{ifConfirm:!1,salePackageId:null,imgContent:"",hideOrShow:!1,hasHouse:!0,current:"",currentPanelC:"",currentPanelB:"",greyAble:!1,salePackageName:"",priceRange:[],scenePkgList:[],setCustom:[],panelBrand:[],panelColor:[],doorLockColor:[],swiperTop:[],galleryThumbs:[]}},mounted:function(){document.body.scrollTop=0,document.documentElement.scrollTop=0,document.getElementById("imgContent").style.display="none",this.salePackageId=this.$route.params.salePackageId?this.$route.params.salePackageId:"",this.initData(this.init)},methods:{init:function(){var t=new d.a(".gallery-thumbs",{spaceBetween:20,slidesPerView:3,loop:!1,freeMode:!0,loopedSlides:5,watchSlidesVisibility:!0,watchSlidesProgress:!0,observer:!0,observeParents:!0});new d.a(".gallery-top",{spaceBetween:10,loop:!0,observer:!0,observeParents:!0,loopedSlides:5,thumbs:{swiper:t}})},initData:function(t){var e=this,s={salePackageId:this.salePackageId};this.$http.get("/optional/h5/scene_package/list",s).then(function(s){s&&200===s.data.code?(e.swiperTop=s.data.data.list,e.galleryThumbs=s.data.data.list,e.salePackageName=s.data.data.salePackageName,e.priceRange=s.data.data.priceRange?s.data.data.priceRange.split("-"):[],e.$nextTick(t)):u.Message.error(s.data.msg)})},hideChoice:function(){this.hideOrShow=!1,document.getElementById("app").style.overflowY="auto"},btnChoice:function(t,e){"current"===e?this.current=t:"currentPanelC"===e?this.currentPanelC=t:(this.currentPanelB=t.name,this.panelColor=t.color.split(",")),""===this.current||""===this.currentPanelC||""===this.currentPanelB?this.ifConfirm=!1:this.ifConfirm=!0},btnBlack:function(t,e){1!==t.must&&(2===e.srcElement.classList.length?e.srcElement.className="btn black grey":e.srcElement.className="btn black")},openChoice:function(){var t={salePkgId:this.salePackageId,projectId:p.getCookie("pid"),orderType:2},e=this;e.$http.get("/optional/h5/order/getProductSalePkg",t).then(function(t){if(t&&200===t.data.code){e.scenePkgList=t.data.data.scenePkgList,e.setCustom=[];for(var s={},a=0;a<e.scenePkgList.length;a++)s[e.scenePkgList[a].scenePkgId]||(e.setCustom.push(e.scenePkgList[a]),s[e.scenePkgList[a].scenePkgId]=!0);e.doorLockColor=JSON.parse(t.data.data.skuConfig).lock,e.panelBrand=JSON.parse(t.data.data.skuConfig).panel,e.panelColor=JSON.parse(t.data.data.skuConfig).panel[0].color.split(","),document.getElementById("app").style.overflowY="hidden",e.hideOrShow=!0}else u.Message.error(t.data.msg)})},confirm:function(){var t=this;if(!1!==t.ifConfirm){var e="",s=[],a=0;t.$refs.setCustom.forEach(function(n){"btn black"===n.className&&(e+=n.id+"、",t.scenePkgList.forEach(function(e){n.id===e.scenePkgName&&e.brand===t.currentPanelB&&(a+=e.amount,s.push(e.scenePkgId))}))});var n={salePkgId:this.salePackageId,planColor:t.currentPanelC,planBrand:t.currentPanelB,lockColor:t.current,salePackageName:t.salePackageName,scenePkgName:""!==e?e.slice(0,e.length-1):"",orderMoney:a,scenePkgIdList:s};document.getElementById("app").style.overflowY="auto",this.$store.dispatch("changeParam",n),t.$router.push({name:"order",params:{}})}},back:function(){history.go(-1)},openImg:function(t){"mp4"!==t.video.slice(t.video.length-3,t.video.length)&&(this.imgContent=t.video,document.getElementById("imgContent").style.display="block",document.getElementById("contentMiddle").style.display="none")},hideImg:function(){this.imgContent="",document.getElementById("imgContent").style.display="none",document.getElementById("contentMiddle").style.display="block"}}},y={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"detail"},[s("div",{staticClass:"img-content",attrs:{id:"imgContent"},on:{click:t.hideImg}},[s("img",{attrs:{src:t.imgContent}}),s("span")]),t._v(" "),s("div",{attrs:{id:"contentMiddle"}},[s("div",{on:{click:t.hideChoice}},[s("div",{staticClass:"swiper-container gallery-top"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.swiperTop,function(e){return s("div",{key:e.scenePackageId,staticClass:"swiper-slide",on:{click:function(s){return t.openImg(e)}}},[t.fileMP4(e.video).video?s("swiper-video",{attrs:{coverUrl:e.sceneCardImage,uid:e.scenePackageId,url:e.video}}):t._e(),t._v(" "),t.fileMP4(e.video).images?s("img",{attrs:{src:e.video}}):t._e()],1)}),0)]),t._v(" "),s("div",{staticClass:"swiper-container gallery-thumbs"},[s("div",{staticClass:"swiper-wrapper"},t._l(t.galleryThumbs,function(t){return s("div",{key:t.scenePackageId,staticClass:"swiper-slide",style:{background:"url("+t.coverImage+") center top/100% 100% no-repeat"}})}),0)]),t._v(" "),s("div",{staticClass:"low-color"}),t._v(" "),s("div",{staticClass:"content detail"},[t._m(0),t._v(" "),t._l(t.swiperTop,function(t){return s("div",{key:t.scenePackageId,staticClass:"item"},[s("img",{attrs:{src:t.sceneCardImage}})])})],2)]),t._v(" "),s("div",{staticClass:"content bottom"},[s("div",{staticClass:"package"},[s("div",[t._v(t._s(t.salePackageName)+"套餐")]),t._v(" "),s("span",{staticClass:"money"},[s("span",{staticClass:"normal"},[t._v("¥"+t._s(t.priceRange[0]))]),t._v(" "),s("span",{staticClass:"decoration"},[t._v("¥"+t._s(t.priceRange[1]))])])]),t._v(" "),t.hasHouse?s("div",{staticClass:"btn",on:{click:t.openChoice}},[t._v("开启我的"+t._s(t.salePackageName))]):s("div",{staticClass:"btn gray"},[t._v("暂不支持当前房型")])]),t._v(" "),t.hideOrShow?s("div",{staticClass:"choice-content"},[s("div",{staticClass:"pannel"},[s("h3",[t._v("套餐定制")]),t._v(" "),s("div",{staticClass:"btn-group"},t._l(t.setCustom,function(e,a){return s("div",{key:a,ref:"setCustom",refInFor:!0,staticClass:"btn black",attrs:{id:e.scenePkgName},on:{click:function(s){return t.btnBlack(e,s)}}},[t._v("\n            "+t._s(e.scenePkgName)+"\n            "),1==e.must?s("div",{staticClass:"required"},[t._v("必选")]):t._e()])}),0)]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"pannel detail-i"},[s("h3",[t._v("面板品牌")]),t._v(" "),s("div",{staticClass:"btn-group"},t._l(t.panelBrand,function(e,a){return s("div",{key:a,class:e.name==t.currentPanelB?"border btn grey":"btn grey",on:{click:function(s){return t.btnChoice(e,"currentPanelB")}}},[t._v(t._s(e.name))])}),0)]),t._v(" "),s("div",{staticClass:"pannel detail-i"},[s("h3",[t._v("面板颜色")]),t._v(" "),s("div",{staticClass:"btn-group"},t._l(t.panelColor,function(e,a){return s("div",{key:a,class:e==t.currentPanelC?"border btn grey":"btn grey",on:{click:function(s){return t.btnChoice(e,"currentPanelC")}}},[t._v("\n            "+t._s(e)+"\n          ")])}),0)]),t._v(" "),s("div",{staticClass:"pannel"},[s("h3",[t._v("门锁颜色")]),t._v(" "),s("div",{staticClass:"btn-group"},t._l(t.doorLockColor,function(e,a){return s("div",{key:a,class:e.name==t.current?"border btn grey":"btn grey",on:{click:function(s){return t.btnChoice(e.name,"current")}}},[t._v("\n            "+t._s(e.name)+"\n          ")])}),0)]),t._v(" "),s("div",{staticClass:"btn-parent"},[t.ifConfirm?s("div",{staticClass:"btn",on:{click:t.confirm}},[t._v("确定")]):s("div",{staticClass:"btn gray",on:{click:t.confirm}},[t._v("确定")])])]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("\n          ——\n          "),e("span",{staticClass:"detail-t"},[this._v("套餐详情")]),this._v(" ——\n        ")])}]};var b=s("VU/8")(k,y,!1,function(t){s("Iv8u")},null,null).exports,P=s("mvHQ"),w=s.n(P),I={name:"order",components:{Message:u.Message},data:function(){return{params:{},username:"",phone:"",address:"",houseId:null,projectId:null}},mounted:function(){this.init(),void 0!==this.$store.state.params.salePkgId?(this.params=this.$store.state.params,localStorage.params=w()(this.$store.state.params)):this.params=JSON.parse(localStorage.params),this.username=p.getCookie("username"),this.phone=p.getCookie("phone"),this.getAddress(),this.houseId=p.getCookie("hid"),this.projectId=p.getCookie("pid")},methods:{init:function(){},check:function(t){"img check"===t.srcElement.className?t.srcElement.className="img nocheck":t.srcElement.className="img check"},submit:function(){var t=this,e={orderMoney:this.params.orderMoney,houseId:parseInt(this.houseId),projectId:parseInt(this.projectId),phone:this.phone,username:this.username,orderType:2,lockColor:this.params.lockColor,planColor:this.params.planColor,planBrand:this.params.planBrand,salePkgId:this.params.salePkgId,salePackageName:this.params.salePackageName,scenePkgIdList:this.params.scenePkgIdList,address:this.address};this.$http.post("/optional/h5/order/add",e).then(function(s){s&&200===s.data.code?t.$router.push({name:"pay",params:e}):u.Message.error(s.data.msg)})},back:function(){history.go(-1)},getAddress:function(){var t=this,e={houseId:p.getCookie("hid")};this.$http.get("/optional/h5/order/getAddress",e).then(function(e){e&&200===e.data.code?t.address=e.data.data:u.Message.error(e.data.msg)})}}},E={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"order"},[s("div",{staticClass:"content address"},[s("div",{staticClass:"items"},[s("span",{staticClass:"name"},[t._v("业主："+t._s(t.username))]),t._v(" "),s("span",{staticClass:"phone"},[t._v(t._s(t.phone.slice(0,3))+"****"+t._s(t.phone.slice(t.phone.length-4,t.phone.length)))])]),t._v(" "),s("p",[t._v("安装地址："+t._s(t.address))])]),t._v(" "),s("div",{staticClass:"grey-bg"}),t._v(" "),s("div",{staticClass:"content detail"},[s("div",{staticClass:"type"},[s("div",{staticClass:"type-name"},[t._v("套餐定制：")]),t._v(" "),s("div",{staticClass:"type-intro"},[t._v(t._s(t.params.scenePkgName))])]),t._v(" "),s("div",{staticClass:"type"},[s("div",{staticClass:"type-name"},[t._v("面板品牌：")]),t._v(" "),s("div",{staticClass:"type-intro"},[t._v(t._s(t.params.planBrand))])]),t._v(" "),s("div",{staticClass:"type"},[s("div",{staticClass:"type-name"},[t._v("面板颜色：")]),t._v(" "),s("div",{staticClass:"type-intro"},[t._v(t._s(t.params.planColor))])]),t._v(" "),s("div",{staticClass:"type"},[s("div",{staticClass:"type-name"},[t._v("门锁颜色：")]),t._v(" "),s("div",{staticClass:"type-intro"},[t._v(t._s(t.params.lockColor))])])]),t._v(" "),s("div",{staticClass:"grey-bg"}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"grey-bg"}),t._v(" "),s("div",{staticClass:"content bottom"},[s("span",{staticClass:"money"},[s("span",[t._v("合计：")]),t._v(" "),s("span",{staticClass:"symbol"},[t._v("¥")]),t._v(" "),s("span",{staticClass:"red"},[t._v(t._s(t.params.orderMoney))])]),t._v(" "),s("span",{staticClass:"btn",attrs:{id:"submit"},on:{click:t.submit}},[t._v("立即结算")])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content listing"},[e("span",{staticClass:"listing-name"},[this._v("支付方式：")]),this._v(" "),e("span",{staticClass:"btn"},[e("span",{staticClass:"online-pay"},[e("img",{attrs:{src:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/Combined%20Shape%402x.png"}}),this._v("\n        线下支付\n      ")]),this._v(" "),e("span",{staticClass:"outline-pay"},[e("span",{staticClass:"circle"}),this._v("\n        在线支付\n      ")])])])}]};var A=s("VU/8")(I,E,!1,function(t){s("9zOY")},null,null).exports,x={name:"pay",data:function(){return{params:{}}},mounted:function(){this.init()},methods:{init:function(){},toResult:function(){this.$router.push({name:"result",params:{}})},toIndex:function(){this.$router.push({name:"index",params:{}})},back:function(){history.go(-1)}}},B={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pay"},[s("div",{staticClass:"content success"},[s("img",{attrs:{src:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/Combined%20Shape%402x.png"}}),t._v(" "),s("div",{staticClass:"font"},[t._v("您已提交成功，请等待销售人员确认订单，并为您安排施工")]),t._v(" "),s("div",{staticClass:"btn-group"},[s("div",{staticClass:"btn grey",on:{click:t.toIndex}},[t._v("返回首页")]),t._v(" "),s("div",{staticClass:"btn red",attrs:{id:"result"},on:{click:t.toResult}},[t._v("预览理想家")])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content process"},[s("div",{staticClass:"title"},[t._v("理想家产品项目流程")]),t._v(" "),s("div",{staticClass:"items-group"},[s("div",{staticClass:"item"},[s("span",{staticClass:"num"},[t._v("1")]),t._v(" "),s("span",{staticClass:"font"},[t._v("专属下单")])]),t._v(" "),s("div",{staticClass:"item"},[s("span",{staticClass:"num"},[t._v("2")]),t._v(" "),s("span",{staticClass:"font"},[t._v("项目施工")])]),t._v(" "),s("div",{staticClass:"item"},[s("span",{staticClass:"num"},[t._v("3")]),t._v(" "),s("span",{staticClass:"font"},[t._v("随房交付")])])])])}]};var S=s("VU/8")(x,B,!1,function(t){s("BoJ7")},null,null).exports,M={name:"result",data:function(){return{id:null}},mounted:function(){this.init(),this.$route.params&&(this.id=this.$route.params.id)},methods:{init:function(){},back:function(){history.go(-1)}}},R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"result"},[s("div",{staticClass:"content top"},[s("span",{staticClass:"call"},[t._v("尊贵的业主：")]),t._v(" "),s("p",[t._v("我是您的智能管家 ，小智。很高兴与您相见，下面为您汇报理想家进展：")])]),t._v(" "),s("div",{staticClass:"grey-bg"}),t._v(" "),s("h3",[s("span",{staticClass:"line"},[t._v("————— ")]),t._v("\n    理想家产品项目流程\n    "),s("span",{staticClass:"line"},[t._v(" —————")])]),t._v(" "),s("div",{staticClass:"content process"},[s("div",{staticClass:"step-one"},[s("h2",{staticClass:"one-item"},[s("span",{staticClass:"circle red"}),t._v("\n        专属理想家定制\n      ")]),t._v(" "),s("div",{staticClass:"date-line line-one"},[s("img",{attrs:{src:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/Combined%20Shape%402x.png"}}),t._v(" "),s("span",{staticClass:"font"},[t._v("专属理想家定制下单")]),t._v(" "),s("span",{staticClass:"date"},[t._v("2019-06-01")])]),t._v(" "),s("h2",{staticClass:"two-item"},[s("span",{staticClass:"circle red"}),t._v("\n        项目施工\n      ")])]),t._v(" "),s("div",{staticClass:"step-two"},[s("div",{staticClass:"date-line line-two"},[s("img",{attrs:{src:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/Combined%20Shape%402x.png"}}),t._v(" "),s("span",{staticClass:"font"},[t._v("智能产品安装完毕")]),t._v(" "),s("span",{staticClass:"date"},[t._v("2019-06-05")])]),t._v(" "),s("div",{staticClass:"date-line line-three"},[s("img",{attrs:{src:"https://greentown-app.oss-cn-shanghai.aliyuncs.com/scene-mall/Combined%20Shape%402x.png"}}),t._v(" "),s("span",{staticClass:"font"},[t._v("智能交互方案调试完成")]),t._v(" "),s("span",{staticClass:"date"},[t._v("2019-06-05")])]),t._v(" "),s("h2",{staticClass:"three-item"},[s("span",{staticClass:"circle gray"}),t._v("\n        随房交付\n      ")])])])])}]};var T=s("VU/8")(M,R,!1,function(t){s("xR5a")},null,null).exports,$=s("//Fk"),N=s.n($),O=s("Xxa5"),U=s.n(O),V=s("exGp"),q=s.n(V),D={props:{order:{type:Array,required:!1,default:[]}},methods:{controlDate:function(t){return""!==t?p.formatDateTime(t,"y-m-d"):""},toResult:function(t){this.$router.push({name:"result",params:{id:t}})}}},L={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contents"},[t.order.length<=0?s("div",{staticClass:"text-none"},[t._v("暂无订单")]):t._l(t.order,function(e){return s("div",{key:e.id,staticClass:"item"},[s("div",{staticClass:"title"},[s("span",[t._v(t._s(t.controlDate(e.updateTime)))]),t._v(" "),s("span",{staticClass:"font-h"},[t._v(t._s(e.orderStatusLabel))])]),t._v(" "),s("div",{staticClass:"middle"},[s("div",{staticClass:"middle-left"},[null!==e.coverImage?s("img",{attrs:{src:e.coverImage}}):s("div",{staticClass:"img-null"},[t._v("暂无图片")]),t._v(" "),s("div",{staticClass:"middle-center"},[s("div",{staticClass:"font-h"},[t._v("套餐名:"+t._s(e.salePackageName))]),t._v(" "),s("div",{staticClass:"space-top"},[t._v("品牌："+t._s(e.masterBrand))])])]),t._v(" "),s("div",{staticClass:"middle-right"},[s("div",[t._v(t._s(e.orderMoney))]),t._v(" "),s("div",{staticClass:"space-top"},[t._v("x1")])])]),t._v(" "),s("div",{staticClass:"foot"},[s("span",[s("span",[t._v("共1件")]),t._v(" "),s("span",[t._v("应付总额："+t._s(e.realMoney))])]),t._v(" "),s("span",{staticClass:"btn",on:{click:function(s){return t.toResult(e.id)}}},[t._v("查看进展")])]),t._v(" "),s("div",{staticClass:"grey-bg"})])})],2)},staticRenderFns:[]};var Y=s("VU/8")(D,L,!1,function(t){s("uSAK")},null,null).exports,F={name:"indent",components:{Tabs:u.Tabs,TabPane:u.TabPane,myOrder:Y,Message:u.Message},data:function(){var t=this;return{activeName:"全部",count:"0",allOrder:[],unconfirmedOrder:[],unconstructionOrder:[],completedOrder:[],labelConstruction:function(e){return e("div",{style:{position:"relative"}},[e("span","待施工"),e("span",{class:"badge"},t.count>99?"99+":t.count)])}}},mounted:function(){var t=this;return q()(U.a.mark(function e(){var s;return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.init(0);case 2:return t.allOrder=e.sent,e.next=5,t.init(2);case 5:s=e.sent,t.count=s.length,document.body.scrollTop=0,document.documentElement.scrollTop=0;case 9:case"end":return e.stop()}},e,t)}))()},methods:{handleClick:function(t,e){var s=this;return q()(U.a.mark(function e(){return U.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(s.activeName=t,s.allOrder=[],s.unconfirmedOrder=[],s.unconstructionOrder=[],s.completedOrder=[],"全部"!==s.activeName){e.next=11;break}return e.next=8,s.init(0);case 8:s.allOrder=e.sent,e.next=27;break;case 11:if("待确认"!==s.activeName){e.next=17;break}return e.next=14,s.init(1);case 14:s.unconfirmedOrder=e.sent,e.next=27;break;case 17:if("待施工"!==s.activeName){e.next=23;break}return e.next=20,s.init(2);case 20:s.unconstructionOrder=e.sent,e.next=27;break;case 23:if("已完成"!==s.activeName){e.next=27;break}return e.next=26,s.init(11);case 26:s.completedOrder=e.sent;case 27:case"end":return e.stop()}},e,s)}))()},init:function(t){var e=this,s=0===t?{phone:p.getCookie("phone")}:{phone:p.getCookie("phone"),orderStatus:t};return new N.a(function(t,a){return e.$http.get("/optional/h5/order/user/list",s).then(function(e){e&&200===e.data.code?t(e.data.data):u.Message.error(e.data.msg)})})},back:function(){history.go(-1)}}},J={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"indent"},[s("div",{staticClass:"grey-bg top-gray"}),t._v(" "),s("Tabs",{attrs:{value:t.activeName},on:{"on-click":t.handleClick}},[s("Tab-pane",{attrs:{label:"全部",name:"全部"}},[s("my-order",{attrs:{order:t.allOrder}})],1),t._v(" "),s("Tab-pane",{attrs:{label:"待确认",name:"待确认"}},[s("my-order",{attrs:{order:t.unconfirmedOrder}})],1),t._v(" "),s("Tab-pane",{attrs:{label:t.count<=0?"待施工":t.labelConstruction,name:"待施工"}},[s("my-order",{attrs:{order:t.unconstructionOrder}})],1),t._v(" "),s("Tab-pane",{attrs:{label:"已完成",name:"已完成"}},[s("my-order",{attrs:{order:t.completedOrder}})],1)],1)],1)},staticRenderFns:[]};var j=s("VU/8")(F,J,!1,function(t){s("fs8/")},null,null).exports;n.default.use(l.a);var G=new l.a({routes:[{path:"/",name:"index",component:h},{path:"/index",name:"index",component:h},{path:"/detail/:salePackageId",name:"detail",component:b},{path:"/order",name:"order",component:A},{path:"/pay",name:"pay",component:S},{path:"/result",name:"result",component:T},{path:"/indent",name:"indent",component:j}]}),H=s("mtWM"),Q=s.n(H),K=function(t,e){return Q()({method:"get",url:""+t,params:e})},W=function(t,e){return Q()({method:"post",url:""+t,data:e,transformRequest:[function(t){var e="";for(var s in t)e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s])+"&";return e}]})},z=function(t,e){return Q()({method:"put",url:""+t,data:e,transformRequest:[function(t){var e="";for(var s in t)e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s])+"&";return e}]})},X=function(t,e){return Q()({method:"delete",url:""+t,data:e,transformRequest:[function(t){var e="";for(var s in t)e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s])+"&";return e}]})},Z=function(t,e){return Q()({method:"post",url:""+t,params:e})};n.default.prototype.$http=a,n.default.prototype.fileMP4=function(t){if(!t)return{images:!0,video:!1};var e=t.toLowerCase();return{images:["jpg","jpeg","png","bmp","gif"].some(function(t){return t===e.substring(e.lastIndexOf(".")+1)}),video:["mp4","mpeg4","mpg","avi","rmvb","flv","rm","mov","mtv","dat","wmv","3gp"].some(function(t){return t===e.substring(e.lastIndexOf(".")+1)})}},n.default.config.productionTip=!1,new n.default({el:"#app",router:G,store:c,components:{App:r},template:"<App/>"})},"fs8/":function(t,e){},hCRV:function(t,e){},uSAK:function(t,e){},v2ns:function(t,e){},xR5a:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.96cb5384f533062a713b.js.map