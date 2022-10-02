<!--
 * @Author: 
 * @Date: 2022-08-05 23:40:22
 * @LastEditTime: 2022-10-02 21:48:36
 * @LastEditors: LittleQ
 * @Description: 
 * @FilePath: \ol_plugins_vue\src\views\Home.vue
-->
<template>
  <div class="home">
    <Main />
  </div>
</template>

<script>
// @ is an alias to /src
import Main from "@/views/Main.vue";

export default {
  name: "Home",
  components: {
    Main,
  },
};
</script>
<style lang="less" scoped>
.home {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
