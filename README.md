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
    <h4>v-down 指令</h4>
    <span v-down="time"></span>
  </div>
</template>
<script>
export default {
  name: "Demo",
  data() {
    return {
      time: "2019-03-20 13:16:00"
    };
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
| 指令选项 | 说明 | 类型 | 默认值
|----- | ----- | ----- | ----- 
| v-clock | 直接添加到html标签| - | -
| v-time | 任意一个合法时间格式 | String | -
| v-down | 任意一个合法时间格式 | String | -
### demos
![demo](https://github.com/Harhao/vill-directive/blob/master/src/assets/demo.gif)
## License
[MIT](http://opensource.org/licenses/MIT)
