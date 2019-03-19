<template>
  <div class="demo">
    <h4>v-time 指令</h4>
    <span v-time="now"></span>
    <h4>v-clock 指令</h4>
    <span v-clock></span>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {};
  },
  computed: {
    now() {
      return Date.now();
    }
  }
};
</script>
<style scoped>
</style>
