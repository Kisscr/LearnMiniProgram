//app.js
App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('onlanuch');
    console.log(options);
    // 获取用户信息
    wx.getUserInfo({
      success(res){
        // console.log(res);
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('onshow');
    // console.log(options);
    console.log(options.scene); // 小程序进入场景
    switch (options.scene) {
      case 1001: console.log('发现栏小程序主入口')
        break;
      case 1005: console.log('顶部搜索框的搜索结果页')
        break;
    }
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('onError')
  },
  globalData: {
    name: 'crr',
    age: 26
  }
})
