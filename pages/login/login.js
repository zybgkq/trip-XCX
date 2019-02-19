// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modelHidden:true,
    phoneModel: ["你的手机号码","18380589007","微信绑定号码","使用其他手机号码"]
  },
  // 手机号码需要后台支持
  // 允许登录小程序
  allow:function(){
    this.setData({
      modelHidden:!this.data.modelHidden
    }),
    wx.reLaunch({
      url:"../index/index"
    })  
  },
  // 取消授权登录
  refuse:function(){
    this.setData({
      modelHidden: !this.data.modelHidden
    }),
    wx.showToast({
      title: '授权失败',
      icon: 'loading',
      duration: 1000
    })
  },
// 点击显示手机登录
  phoneLogin:function(){
    this.setData({
      modelHidden: !this.data.modelHidden
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