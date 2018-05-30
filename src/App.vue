<template>
  <div id="app">
    <div id="cover"></div>
    <App_Header></App_Header>
    <App_Todo></App_Todo>
    <App_Footer></App_Footer>
  </div>
</template>

<script>  
    // 引入header.vue组件
    import App_Header from './components/header.vue';
    // 引入footer.jsx组件
    import App_Footer from './components/footer.jsx';
    // 引入todo.vue组件
    import App_Todo from './components/todo.vue';

    export default {
      components: {
            App_Header,
            App_Footer,
            App_Todo
      }
    }

</script>

<style lang="stylus" scoped>
    #app {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover {
        position absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #555
        opacity 0.5
        z-index -1
    }
</style>

