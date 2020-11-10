const app = getApp()

Page({
  data:{		//此处定义本页面中的全局变量		
    phonenumber:'',
    studentnumber: '',
    password: ''
  },
  inputName: function(e){	// 用于获取输入的学号
    this.setData({
      studentnumber: e.detail.value	//将获取到的账号赋值给studentnumber变量
    })
  },
  inputphonenumber: function(e){	// 用于获取输入的电话
    this.setData({
      phonenumber: e.detail.value	//将获取到的账号赋值给phonenumber变量
    })
  },
  inputPwd: function (e) {		// 用于获取输入的密码
    this.setData({
      password: e.detail.value	//将获取到的账号赋值给password变量
    })
  },
  

  register: function(e){		//与服务器进行交互
    wx.request({
      url: "http://127.0.0.1:8000/trytest/register/" ,	//获取服务器地址，此处为本地地址
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "POST",
      data: {		//向服务器发送的信息
        studentnumber: this.data.studentnumber,
        password: this.data.password,
        phonenumber: this.data.phonenumber
      },
      success:function(res){
        console.log(res)
        wx.showToast({
          title: res.data.data,
        })
        if(res.data.data="注册成功"){
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
 
})