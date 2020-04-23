// pages/index/index.js
Page({
  data: {
    name: 'CR',
    age: 26,
    students: [
      {id: 110, name: 'cr', age: 26},
      {id: 111, name: 'lyz', age: 29},
      {id: 112, name: 'lll', age: 18}
    ],
    counter: 0
  },
  handleBtnClick() {
    // 1. 错误做法：界面是不会刷新的
    // this.data.counter++

    // 2. 正确做法：this.setData()
    this.setData({
      counter: this.data.counter+=1
    })
  },
  handleSubtraction(){
    this.setData({
      counter: this.data.counter-=2
    })
  }
})