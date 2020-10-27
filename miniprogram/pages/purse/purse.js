// miniprogram/pages/purse/purse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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


  data: {
    items: [
      {
        url: '../recharge/recharge',
        image: 'iconfont icon-chongzhi',
        text: '充值',
        color: 'color:#63B8FF'
      }, {
        url: '../refund/refund',
        image: 'iconfont icon-yue',
        text: '余额退款',
        color: 'color:red'
      }
    ],
    items2: [
      {
        url: '../discount/discount',
        image: 'iconfont icon-youhuiquan',
        text: '优惠券',
        color: 'color:#63B8FF'
      }, {
        url: '../details/details',
        image: 'iconfont icon-mingxi',
        text: '交易明细',
        color: 'color:red'
      }
    ],
    items3: [
      {
        url: '../invoice/invoice',
        image: 'iconfont icon-ticket-fill',
        text: '申请发票',
        color: 'color:#63B8FF'
      }, {
        url: '../declare/declare',
        image: 'iconfont icon-icon-',
        text: '计价说明',
        color: 'color:red'
      }
    ]
  
  }


})