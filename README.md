# vill-message

> a vue plugins about time directive

## Build Setup

### install the plugin on bash and the sass module support

```
npm install vill-directive --save-dev
```

### register the plugins on global file (main.js)

```
import time from 'vill-directive'
Vue.use(time);
```

### on the vue template file ,you can use it by

```
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
<style scoped></style>
```

```

| 字段 | 说明 | 类型 | 默认值
|----- | ----- | ----- | -----
|任意时间 | 必选值 Number/String| String | -
## License
[MIT](http://opensource.org/licenses/MIT)
```
