<template>
  <div class="demo">
    <span v-time="now"></span>
  </div>
</template>
<script>
export default {
  name: 'Demo',
  data () {
    return {
      
    }
  },
  computed:{
    now(){
      return Date.now();
    }
  }
}
</script>
<style scoped>

</style>
