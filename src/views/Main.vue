<!--
 * @Author: LittleQ
 * @Date: 2022-10-02 21:44:08
 * @LastEditTime: 2022-10-02 22:46:36
 * @LastEditors: LittleQ
 * @Description: 导航页
 * @FilePath: \ol_plugins_vue\src\views\Main.vue
-->
<template>
  <div style="height: 100%">
    <el-container style="height: 100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu
          v-for="item in menuList"
          :key="item.id"
          router
          :default-openeds="getOpends"
        >
          <el-submenu :index="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.menuName }}</span>
            </template>
            <el-menu-item-group
              v-for="submenu in item.submenu"
              :key="submenu.id"
            >
              <template slot="title">{{ submenu.groupName }}</template>
              <el-menu-item
                v-for="groupItem in submenu.group"
                :key="groupItem.id"
                :index="groupItem.index"
                >{{ groupItem.menuName }}</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menuList from "../router/menuList";
export default {
  data() {
    return {
      menuList: [],
      // openeds:["menu-1"]
    };
  },
  computed: {
    getOpends: () => {
      return menuList.map((m) => {
        return m.id;
      });
    },
  },
  mounted() {
    this.menuList = menuList;
  },
  methods: {},
};
</script>

<style></style>
