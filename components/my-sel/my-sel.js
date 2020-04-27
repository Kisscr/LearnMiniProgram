// components/my-sel/my-sel.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    counter: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 通过向外暴露一个方法来修改数据
    addCounter (num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
