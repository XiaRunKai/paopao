// index/details.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    goods_img: [
      {'img': '../../images/bag.png'},
      {'img': '../../images/bag.png' },
      {'img': '../../images/bag.png' },
      {'img': '../../images/bag.png' },
      ],
    orderdata:{},


    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    pjDataList: [
      { 
        headpic: '../../images/car.png', 
        author: '张三', 
        add_time: '2018-06-01', 
        content:'好评好评，真实太好了!'},

      { headpic: '', 
      author: '张三', 
      add_time: '2018-06-01', 
      content: '好评好评，真实太好了!' }
    ],//评价数据
  },


  handleContact (e) {
    console.log(e.detail.path)
    console.log(e.detail.query)
},
 
 
  previewImage: function (e) {
    var current = e.target.dataset.src;
    var href = this.data.imghref;
    var goodsimg = this.data.goods_img;
    var imglist = [];
    for (var i = 0; i < goodsimg.length; i++) {
      imglist[i] = href + goodsimg[i].img
    }
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: imglist// 需要预览的图片http链接列表  
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let orderid = options.id;
    var ordername=options.ordername
    var time=options.time
    var date=options.date
    var price=options.price
    var start=options.start
    var end=options.end
    var information=options.information
    var phone=options.phone
    
    this.setData({
      ordername:ordername,
      information:information,
      date:date,
      time:time,
      start:start,
      end:end,
      price:price,
      phone:phone,
      orderid:orderid});
}
})