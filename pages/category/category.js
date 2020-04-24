// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  handleTextClick() {
    console.log('哈哈哈哈哈被点击了')
  },

  // 监听页面滚动事件
  onPageScroll (obj) {
    // console.log(obj)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://123.207.32.32:8000/api/h8/recommend',
      success: res => {
        console.log(res.data.data.list)
        this.setData({
          list: res.data.data.list
        })
      }
    })
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
    console.log('用户下拉刷新页面啦')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('到底啦')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  
  // 监听当前tab页，当点击的是当前的tab页时，返回该页面的tab信息
  onTabItemTap(item) {
    console.log(item)
  }
})