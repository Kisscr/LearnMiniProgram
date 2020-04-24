// pages/index/index.js
// getApp() 可以获取 App() 产生的示例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age

Page({
  data:{
    userInfo: {}
  },

  // 获取用户信息
  handleGetUserInfo(event) {
    console.log(event)
    console.log(event.detail.userInfo)
    this.setData({
      userInfo : event.detail.userInfo
    })
  }
})