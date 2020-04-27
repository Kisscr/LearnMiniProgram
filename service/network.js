// 封装网络请求
export default function request(options){
  return new Promise((reslove, reject) => {
    wx.request({
      url: options.url,
      method: options.method || 'get',
      data: options.data || {},
      success: res => {
        reslove(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
}