<template>
  <div>
    <p>{{title}}</p>
    <!--    <child :list='list'></child>-->
    <child @getMessage="message"></child>
  </div>

</template>

<script>
  import Child from "./child";

  export default {
    name: "father",
    components: {Child},
    data() {
      return {
        // list: [12, 67]
        title: '111'
      }
    },
    methods: {
      message(title) {
        this.title = title;
      }
    }
  }
</script>

<style scoped>

</style>
