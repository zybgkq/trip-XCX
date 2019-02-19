//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imageUrl:[
      '../../image/book.jpg',
      '../../image/book1.jpg',
      '../../image/book3.jpg',
    ],
    indexPullData: "text",
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    motto: 'Hello World',
  },
// 页面跳转
  search: function (e) {
    wx.navigateTo({
      url: '../search/search',
    })
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
    // var that = this;
    console.log("I'm here...")
    // wx.showNavigationBarLoading()
     //在标题栏中显示加载
    //模拟加载
    setTimeout(function () {
      // complete
      // wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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