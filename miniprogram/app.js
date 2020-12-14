//app.js
App({
<<<<<<< HEAD
  globalData:{
  studentnumber:"未登录"
  },
=======
>>>>>>> e2dec52d11571cf129a85ce6a16965e7b74955b1
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {}
  }
})
