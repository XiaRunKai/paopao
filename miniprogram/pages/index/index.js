//index.js
const app = getApp()

// 引入SDK核心类
var QQMapWX = require('../../libs/qqmap-wx-jssdk.js');

// 实例化API核心类
var demo = new QQMapWX({
  key: 'H6HBZ-T5LCV-CXFPA-UAJJR-UDJTE-5EB3X' // 必填
});

// 获取数据库的引用
const db = wx.cloud.database({
  env: 'test-f41d36'
})

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    // 拼车信息
    msgList: [],
    courseTotalList: [],
    locationInfo: '',
    showType: 0,
    alreadyOrder:[]
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }


    

    //
    this.bindGetLocation();
    // this.getCourseNearby().then(res => {
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 500);
    // });
  },
  onReady: function () {
    //获得dialog组件
    this.courseCard = this.selectComponent("#courseCard");
  // 页面渲染完成
// this.alreadyShow()
this.allorder()
  },
  
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    wx.showLoading({
      title: '加载中...',
    })
    this.getAllCourseTotal();
    this.bindGetLocation().then(()=>{
      
      wx.hideLoading()
      
      wx.hideNavigationBarLoading();
      // 停止下拉动作
      wx.stopPullDownRefresh();
    });
    // this.getCourseNearby().then(res => {
      
    // });
  },



  /**
   * 首页 -- 附近拼车
   */
  getCourseNearby: function () {
    let collection = this.data.showType === 0 ? 'passengerMsg' : 'driverMsg';
    let _this = this;
    return new Promise(resolve => {
      db.collection('passengerMsg').get({
        success: function (res) {
          _this.setData({
            msgList: res.data
          })
          resolve();
        }
      })
    }) 
  },

  getUserLocation: function () {
    return  new Promise(resolve => {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          resolve(res);
        }
      })
    })
  },

  reverseLocation: function () {
    this.getUserLocation().then(res => {
      let latitude = res.latitude
      let longitude = res.longitude

      // 解析经纬度信息
      demo.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: function (res) {
          let address = res.result.address_component
          _this.setData({
            locationInfo: address.city + ',' + address.district
          })
          resolve(res);
        },
        fail: function (res) {
          _this.setData({
            locationInfo: '定位失败'
          })
        },
        complete: function (res) { }
      });
    })
    
  },

  /**
   * 
   */
  bindGetLocation: function () {
    let _this = this;
    return new Promise(resolve => {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          let latitude = res.latitude
          let longitude = res.longitude
          // 解析经纬度信息
          demo.reverseGeocoder({
            location: {
              latitude: latitude,
              longitude: longitude
            },
            success: function (res) {
              let address = res.result.address_component
              _this.setData({
                locationInfo: address.city + ',' + address.district
              })
              resolve(res);
            },
            fail: function (res) {
              _this.setData({
                locationInfo: '定位失败'
              })
            },
            complete: function (res) {}
          });
        }
      })
    }).then(res => {
      let address = res.result.address_component
      let curLocation = {
        latitude: res.result.location.lat,
        longitude: res.result.location.lng
      }
    
      // 调用云函数
      wx.cloud.callFunction({
        name: 'getCourseByDistrict',
        data: {
          curLocation: curLocation,
          start: {
            city: address.city
          },
          end: {
            city: address.city
          },
          showType: this.data.showType
        },
      }).then(res => {
        let courseList = res.result.data;
        // 计算距离信息
        if (res.result.data.length > 0) {
          let arr = res.result.data;
          let startAddressArr = [];
          for (let i = 0; i < arr.length; i++) {
            startAddressArr.push({
              latitude: arr[i].startAddressInfo.latitude,
              longitude: arr[i].startAddressInfo.longitude
            })
          }

          // 请求api，获取距离信息  
          demo.calculateDistance({
            from: curLocation,
            to: startAddressArr,
            success: function (res) {
              let distanceArr = res.result.elements;
              for (let i = 0; i < distanceArr.length; i++) {
                courseList[i].distance = (distanceArr[i].distance / 1000).toFixed(2);
              }
              _this.setData({
                msgList: courseList
              })
            }
          });
        }   
        wx.hideLoading()
      }).catch(console.error)
    })  
  },

  



  bindGoDetail: function(e) {
    let course = e.currentTarget.dataset.course
    wx.navigateTo({
      url: '../courseDetail/courseDetail?course=' + JSON.stringify(course)
    })
  },
  bindToCourseSearch: function (e) {
    //let course = e.currentTarget.dataset.city
    wx.navigateTo({
      url: '../courseSearch/courseSearch'
    })
  },
  allorder: function(e){		//与服务器进行交互
    let that = this
    wx.request({
      url: "http://127.0.0.1:8000/get_order/allorder/" ,	//获取服务器地址，此处为本地地址
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "GET",

      fail: function(err){
        console.log(err)
      }
    })
  },
  // alreadyShow: function(){
  //   this.setData({
  //   alreadyOrder: [{ name: "校园卡", state: "交易成功", time: "2020-09-30 16:00", status: "已完成", url: "../../images/bag.png", money: "13" }, { name: "快递", state: "交易成功", time: "2020-10-12 20:00", status: "已完成", url: "../../images/bag.png", money: "5" },{ name: "带饭", state: "待付款", time: "2020-10-14 16:00",description:"我的包落在望江东二教302的第二排,请帮我拿到华西校区22舍", status: "已接受", url: "../../images/bag.png", money: "8" },{ name: "书包", state: "未接收", time: "2020-10-4 12:00", status: "审核不通过或尚未被接单", url: "../../images/bag.png", money: "2" }]
  //   })
  //   },

  goSearchByLocPage: function (e) {
    wx.navigateTo({
      url: '../courseSearch/courseSearchByLoc'
    })
  },
  orderdetail:function(event){
    console.log(event)
    var id=event.currentTarget.dataset.orderid;
    var ordername=event.currentTarget.dataset.ordername;
    var date=event.currentTarget.dataset.date;
    var time=event.currentTarget.dataset.time;
    var price=event.currentTarget.dataset.price;
    var start=event.currentTarget.dataset.start;
    var end=event.currentTarget.dataset.end;
    var phone=event.currentTarget.dataset.phone;
    var information=event.currentTarget.dataset.information;
    console.log(ordername)
    wx.navigateTo({
      url: '../dingdanxiangqing/dingdanxiangqing?id='+id+'&ordername='+ordername+'&date='+date+'&time='+time+'&information='+information+'&price='+price+'&start='+start+'&end='+end+'&phone='+phone
    })
  }



  // onGetOpenid: function() {
  //   // 调用云函数
  //   wx.cloud.callFunction({
  //     name: 'login',
  //     data: {},
  //     success: res => {
  //       console.log('[云函数] [login] user openid: ', res.result.openid)
  //       app.globalData.openid = res.result.openid
  //       wx.navigateTo({
  //         url: '../userConsole/userConsole',
  //       })
  //     },
  //     fail: err => {
  //       console.error('[云函数] [login] 调用失败', err)
  //       wx.navigateTo({
  //         url: '../deployFunctions/deployFunctions',
  //       })
  //     }
  //   })
  // },
})
