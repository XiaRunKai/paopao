// pages/signIn/signIn.js
//获取应用实例
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //img_url: config.imgUrl, //图片地址

    //签到模块
    signNum: 0,  //签到数
    signfens: 0,
    signState: false, //签到状态
    min: 1,  //默认值日期第一天1
    max: 7,  //默认值日期最后一天7
    be: 0,    //默认倍数
    // 
    
  },
  getProWeekList: function () {
    let that = this
    let date = new Date()
    let dateTime = date.getTime(); // 获取现在的时间
    let dateDay = date.getDay();// 获取现在的
    let oneDayTime = 24 * 60 * 60 * 1000; //一天的时间
    let proWeekList;
    let weekday;
    console.log(dateTime)
    for (let i = 0; i < 7; i++) {
      let time = dateTime - (dateDay - 1 - i) * oneDayTime;
      proWeekList = new Date(time).getDate(); //date格式转换为yyyy-mm-dd格式的字符串
      weekday = "day[" + i + "].wook"
      that.setData({
        [weekday]: proWeekList,
      })
      //that.data.day[i].wook = new Date(time).getDate();
    }
  },
 
 
  dataTime: function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var months = date.getMonth() + 1;

    //获取现今年份
    this.data.year = year;

    //获取现今月份
    this.data.month = months;

    //获取今日日期
    this.data.getDate = date.getDate();

    //最后一天是几号
    var d = new Date(year, months, 0);
    this.data.lastDay = d.getDate();

    //第一天星期几
    let firstDay = new Date(year, month, 1);
    this.data.firstDay = firstDay.getDay();
  },

  
  //签到
  bindSignIn(e) {
    var that = this,
      num = e.currentTarget.dataset.num;
    num++

    wx.showToast({
      icon: 'success',
      title: '签到成功',
    })
    that.setData({
      signNum: num,
      //signState: true
    })
    if (this.data.signNum < 7) {
      this.setData({
        signfens: this.data.signfens += 1
      })
      wx.setStorageSync('jifen', this.data.signfens)
    } else {
      this.setData({
        signfens: this.data.signfens += 1
      })
      wx.setStorageSync('jifen', this.data.signfens)
    }
    var be = e.currentTarget.dataset.be;

    if (num % 7 == 0) {
      be += 1;
      that.setData({
        be: be
      })
    }

    if (num == 7 * be + 1) {
      that.setData({
        min: 7 * be + 1,
        max: 7 * be + 7
      })
    }


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      signfens: wx.getStorageSync('jifen') ? wx.getStorageSync('jifen') : 0
    })
  
    var that = this;
    this.setNowDate();
    this.getProWeekList()

    this.dataTime();
    

    /**
     * 获取系统信息
     */
   
  },


  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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

  }
})