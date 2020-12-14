// miniprogram/pages/courseSearch/courseSearch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currtab: 0,
swipertab: [{ name: '我的下单', index: 0 }, { name: '我的接单', index: 1 }, { name: '已取消', index: 2 }],
    endRegion: [],
    startRegion: [],
    showType: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件
    this.courseCard = this.selectComponent("#courseCard");

// 页面渲染完成
this.getDeviceInfo()
this.orderShow()
},
 
getDeviceInfo: function () {
let that = this
wx.getSystemInfo({
success: function (res) {
that.setData({
deviceW: res.windowWidth,
deviceH: res.windowHeight
})
}
})
},
 
/**
* @Explain：选项卡点击切换
*/
tabSwitch: function (e) {
var that = this
if (this.data.currtab === e.target.dataset.current) {
return false
} else {
that.setData({
currtab: e.target.dataset.current
})
}
},
 
tabChange: function (e) {
this.setData({ currtab: e.detail.current })
this.orderShow()
},
 
orderShow: function () {
let that = this
switch (this.data.currtab) {
case 0:
that.alreadyShow()
break
case 1:
that.waitPayShow()
break
case 2:
that.lostShow()
break
}
},
alreadyShow: function(){
this.setData({
alreadyOrder: [{ name: "校园卡", state: "交易成功", time: "2020-09-30 16:00", status: "已完成", url: "../../images/bag.png", money: "13" }, { name: "快递", state: "交易成功", time: "2020-10-12 20:00", status: "已完成", url: "../../images/bag.png", money: "5" }]
})
},
 
waitPayShow:function(){
this.setData({
waitPayOrder: [{ name: "带饭", state: "待付款", time: "2020-10-14 16:00",description:"我的包落在望江东二教302的第二排,请帮我拿到华西校区22舍", status: "已接受", url: "../../images/bag.png", money: "8" }],
})
},
 
lostShow: function () {
this.setData({
lostOrder: [{ name: "书包", state: "未接收", time: "2020-10-4 12:00", status: "审核不通过或尚未被接单", url: "../../images/bag.png", money: "2" }],
})
},
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  myxorder: function(e){		//与服务器进行交互
    wx.request({
      url: "http://127.0.0.1:8000/get_order/getorder/" ,	//获取服务器地址，此处为本地地址
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "GET",
      success:function(res){
        console.log(res)
        that.setData({
        myxorder: res.data
        })
      },
      fail: function(err){
        console.log(err)
      }
    })
  },
  myjorder: function(e){		//与服务器进行交互
    wx.request({
      url: "http://127.0.0.1:8000/get_order/getorder/" ,	//获取服务器地址，此处为本地地址
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "GET",
      success:function(res){
        console.log(res)
        that.setData({
        myjorder: res.data
        })
      },
      fail: function(err){
        console.log(err)
      }
    })
  }

  // getCourseByDistrict: function () {
  //   let _this = this;

  //   // 加载动画
  //   wx.showLoading({
  //     title: '加载中...',
  //   })
  //   // 调用云函数，更新统计数据
  //   wx.cloud.callFunction({
  //     name: 'getCourseByDistrict',
  //     data: {
  //       start: {
  //         city: _this.data.startRegion[1],
  //         district: _this.data.startRegion[2],
  //       },
  //       end: {
  //         city: _this.data.endRegion[1],
  //         district: _this.data.endRegion[2],
  //       },
  //       showType: _this.data.showType
  //     },
  //   }).then(res => {
  //     _this.setData({
  //       courseList: res.result.data
  //     })
  //     setTimeout(function () {
  //       wx.hideLoading()
  //     }, 500);
  //     console.log(res)
  //   }).catch(console.error)
  // },

  // bindEndRegionChange: function (e) {
  //   this.setData({
  //     endRegion: e.detail.value
  //   })
  //   if (this.data.startRegion.length > 0) {
  //     this.getCourseByDistrict();
  //   }
  // },

  // bindStaRegionChange: function (e) {
  //   this.setData({
  //     startRegion: e.detail.value
  //   })
  //   if (this.data.endRegion.length > 0) {
  //     this.getCourseByDistrict();
  //   }
  // },

  // bindGoDetail: function (e) {
  //   let course = e.currentTarget.dataset.course
  //   wx.navigateTo({
  //     url: '../courseDetail/courseDetail?course=' + JSON.stringify(course)
  //   })
  // },

  // _getDriverCourse: function () {
  //   this.setData({
  //     showType: 1
  //   })  
  //   this.getCourseByDistrict();
  // },

  // _getPassengerCourse: function () {
  //   console.log('点击乘客')
  //   this.setData({
  //     showType: 0
  //   })  
  //   this.getCourseByDistrict();
  // }
  
})