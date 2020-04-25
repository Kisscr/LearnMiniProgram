// pages/profile/profile.js
Page({
  data: {
    imagePaths: []
  },

  // 点击选择图片或拍照
  handleChooseImage() {
    // 发送请求
    wx.chooseImage({
      success: (res) => {
        // console.log(res)
        // 获取路径
        this.setData({
          imagePaths: res.tempFilePaths
        })

        // 在新页面中全屏预览图片,参数urls传入一个数组，可以展示多张图片，可以保存和转发
        // wx.previewImage({
        //   urls: res.tempFilePaths
        // })
      },
    })
  },

  // 图片加载完成时回调
  handleImageLoad() {
    console.log('图片加载完成')
  },

  /**
   * 页面的初始数据
   */
  data: {

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