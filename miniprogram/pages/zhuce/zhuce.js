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
    // 电话输入
  //mobileFormat表示输入是都符合电话号码规则
  mobileinput:function(e) {
    let value = e.detail.value.replace(/\D/g, '')
    this.setData({
      mobile: value,
    })
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
    if (this.data.mobile.length == 0) {
      wx.showToast({
        title: '输入的手机号为空，请重新输入！',
        icon: 'none',
        duration: 2500
      })
      this.setData({
        mobileFormat: false,
      })

    } else if (this.data.mobile.length < 11) {
      wx.showToast({
        title: '手机号长度有误，请重新输入！',
        icon: 'none',
        duration: 1500
      })
      this.setData({
        mobileFormat: false,
      })

    } else if (!myreg.test(this.data.mobile)) {
      wx.showToast({
        title: '手机号有误，请重新输入！',
        icon: 'none',
        duration: 1500
      })
      this.setData({
        mobileFormat: false,
      })

    } else {
      this.setData({
        mobileFormat: true,
      })
    }
  },
  

  register: function(e){		//与服务器进行交互
    wx.request({
      url: "http://127.0.0.1:8000/trytest/register/" ,	//获取服务器地址，此处为本地地址
      header:{
        "content-type": "application/x-www-form-urlencoded"		//使用POST方法要带上这个header
      },
      method: "GET",
      data: {		//向服务器发送的信息
        studentnumber: this.data.studentnumber,
        password: this.data.password,
        phonenumber: this.data.phonenumber
      },
      success:function(res){
        console.log(res)
        wx.showToast({
          icon: 'none',
          title: res.data.data,
        })
        if(res.data.data=="注册成功"){
          wx.switchTab({
            url: '../index/index',
          })
        }
      },
      fail: function(err){
        console.log(err)
      }
    })
  }
})