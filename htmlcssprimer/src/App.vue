<!-- Hello word by VueJS
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>
-->

<template>
  <div>
    <h4 class="bg-primary text-while text-center p-2">Adam's To Do list</h4>
    <div class="container-fluid p-4">
      <div class="row">
        <div class="col font-weight-bold">Task</div>
        <div class="col-2 font-weight-bold">Done</div>
      </div>
      <div class="row" v-for="t in tasks" v-bind:key="t.action">
        <div class="col" >{{t.action}}</div>
        <div class="col-2">{{t.done}}</div>
      </div>
    </div>
  </div>
</template>

<!-- helloworld script
<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>
-->
<script>
export default{
  data:function(){
    return{
      tasks:[{action:"Buy flowers", done:false},
      {action:"Buy flowers", done:false},
      {action:"Buy flowers", done:false},
      {action:"Buy flowers", done:false},
      {action:"Buy flowers", done:false},

      ]
    }
  }
}

</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
