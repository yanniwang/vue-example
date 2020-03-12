<template>
  <!--  <ul>-->
  <!--    <li>我是子组件</li>-->
  <!--    <li v-for="(item, index) in list">{{item}}</li>-->
  <!--  </ul>-->
  <p>我是子组件</p>
</template>

<script>
  export default {
    name: "child",

    //子组件从父组件那里通过props获得数据
    // props: {
    //   list: {
    //     type: Array,
    //     default() {
    //       return [22]
    //     }
    //   }
    // },
    data() {
      return {
        // array: [33, 78, 67]
      }
    },
    mounted() {
      this.$emit('getMessage', '我是父组件');
    }
  }
</script>

<style scoped>

</style>
