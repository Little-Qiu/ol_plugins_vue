<!--
 * @Author: 
 * @Date: 2022-08-05 23:40:22
 * @LastEditTime: 2022-08-25 17:38:37
 * @LastEditors: Little_Q longwen@spacesystech.com
 * @Description: 
 * @FilePath: \ol_plugins_vue\src\views\Home.vue
-->
<template>
  <div class="home">
    <Map />
  </div>
</template>

<script>
// @ is an alias to /src
import Map from "@/components/Map_Tracker.vue";

export default {
  name: "Home",
  components: {
    Map,
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
