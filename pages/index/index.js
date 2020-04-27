// pages/index/index.js
import request from '../../service/network'

Page({
  onLoad: function () {
    console.log(1)
    request({
      url: 'http://123.207.32.32:8000/api/h8/recommend'
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }
})