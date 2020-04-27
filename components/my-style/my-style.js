// components/my-style/my-style.js
Component({
  options: {
    // styleIsolation: 'apply-shared'  页面的样式会对自定义组件影响
    styleIsolation: 'shared'    // 页面和组件的样式会相互影响
  }
})
