const app = getApp()

Page({
  data:{		//此处定义本页面中的全局变量
    result: '',		
    username: '',
    password: ''
  },
  inputName: function(e){	// 用于获取输入的账号
    this.setData({
      username: e.detail.value	//将获取到的账号赋值给username变量
    })
  },
  inputPwd: function (e) {		// 用于获取输入的密码
    this.setData({
      password: e.detail.value	//将获取到的账号赋值给password变量
    })
  },
  

  log:function(e){		//与服务器进行交互

    wx.request({
      url: 'http://127.0.0.1:8000/trytest/login',	//获取服务器地址，此处为本地地址
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "POST",
      data: {		//向服务器发送的信息
        username: this.data.username,
        password: this.data.password
      },
      success: res => {
      var resData = res.data;
      console.log("数据" , resData)
        if (res.statusCode == 200) {
          this.setData({
            result: res.data	//服务器返回的结果
          })
        }
      }
    })

  },
  log: function (options) {
    console.log("lll");
    wx.switchTab({
      url: '../index/index',
    })({
      url: '',
    })
  },
  bindmima: function () {
    wx.navigateTo({
      url: '../zhuce/zhuce'
    })
  }
})