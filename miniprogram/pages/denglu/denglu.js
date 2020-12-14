const app = getApp()

Page({
  data:{		//此处定义本页面中的全局变量
    studentnumber: '',
    password: ''
  },
  inputName: function(e){	// 用于获取输入的账号
    this.setData({
      studentnumber: e.detail.value	//将获取到的账号赋值给studentnumber变量
    })
  },
  inputPwd: function (e) {		// 用于获取输入的密码
    this.setData({
      password: e.detail.value	//将获取到的账号赋值给password变量
    })
  },
  

  log:function(e){		//与服务器进行交互

    wx.request({
      url: 'http://127.0.0.1:8000/trytest/login/',	//获取服务器地址，此处为本地地址
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "GET",
      data: {		//向服务器发送的信息
        studentnumber: this.data.studentnumber,
        password: this.data.password
      },
      success:function(res){
        console.log(res)
        app.globalData.studentnumber=res.data.studentnumber
        console.log(app.globalData.studentnumber)
        wx.showToast({
          title: res.data.msg,
        })
        if(res.data.msg=="登录成功"){

          wx.switchTab({
            url: '../index/index',
          })
        }
      },
      fail: function(err){
        console.log(err)
      }
    })

  },

  bindmima: function () {
    wx.navigateTo({
      url: '../zhuce/zhuce'
    })
  }
})