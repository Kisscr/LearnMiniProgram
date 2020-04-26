// pages/profile/profile.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子']
  },
  handleItemClick (event) {
    console.log(event)
    const index = event.currentTarget.dataset.index
    const item = event.currentTarget.dataset.item
    console.log(index)
    console.log(item)
  },

  handleClick(){
    console.log('按钮被点击了')
  },

  // 开始触摸的时候触发
  handleTouchStart () {
    console.log('handleTouchStart')
  },

  // 手指移动商务时候触发
  handleTouchMove () {
    console.log('handleTouchMove')
  },

  // 手指离开时候触发
  handleTouchEnd () {
    console.log('handleTouchEnd')
  },

  // 手指点击的时候触发
  handleTap () {
    console.log('handleTap')
  },

  // 手指长按超过350ms触发
  handleLongPress() {
    console.log('handleLongPress')
  },

  handleBtnTap (event) {
    console.log('------', event)
  },

  handleBtnEnd (event) {
    console.log('++++++', event)
  }
})