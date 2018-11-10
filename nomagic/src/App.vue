<template src="./App.html" />
<script>
export default {
  data: function(){
    return{
      counter:0
    }
  },
  methods:{
    handleClick(){
      this.counter++;
    }
  },
  computed:{
    message(){
      return this.counter==0 ? "Button Not Pressed":`Button Pressed: ${this.counter}`;
    }
  }
}
</script>

