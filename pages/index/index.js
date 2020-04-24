// pages/index/index.js
// getApp() 可以获取 App() 产生的示例对象
const app = getApp()
console.log(app.globalData.name)
console.log(app.globalData.age)

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