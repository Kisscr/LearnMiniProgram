// components/my-event/my-event.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleIncrement () {
      // 将事件从子组件发射出去,第一个参数是事件名称，可以在页面的组件标签中bind事件名称
      // 第二个参数是一个对象，可以传递数据
      this.triggerEvent('increment', {name: 'cr', age: 26}, {})
    }
  }
})
