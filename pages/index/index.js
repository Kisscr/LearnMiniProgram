// pages/index/index.js
Page({
  data: {
    counter: 0
  },
  handleIncrement(event) {
    console.log(event)
    this.setData({
      counter: this.data.counter + 5
    })
  },


  handleAddCpn() {
    // 修改组件内的数据
    // selectComponent()获取组件,使用css选择器
    const my_sel = this.selectComponent("#sel")
    console.log(my_sel)

    // 通过setData修改组件的数据，但不推荐直接修改数据
    // my_sel.setData({
    //   counter: my_sel.data.counter + 20
    // })

    // 通过获取组件内部的方法来修改组件自身的数据
    my_sel.addCounter(10)
  }
})