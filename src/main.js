import Vue from 'vue'
import App from './App'
// 引入全局CSS样式
//在vue项目中安装stylus，执行
import './assets/styles/global.styl'
  

Vue.config.productionTip = false

// 在body下创建一个根节点
const root = document.createElement('div');
document.body.appendChild(root);
// 将根节点root注入到app.vue组件中
new Vue({
  render: (h) => h(App)
}).$mount(root);  

