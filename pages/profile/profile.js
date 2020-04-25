// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    score: 55,
    movies: ['变形金刚', '盗梦空间', '大话西游'],
    num: [
      [10, 20, 30, 40],
      [1, 2, 3, 4, 5],
      [100, 200, 300, 500]
    ]
  },

  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  },

  handleIncrement() {
    this.setData({
      score: this.data.score += 5
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