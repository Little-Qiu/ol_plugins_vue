/*
 * @Author: LittleQ
 * @Date: 2022-10-02 21:47:59
 * @LastEditTime: 2022-10-02 22:47:33
 * @LastEditors: LittleQ
 * @Description:
 * @FilePath: \ol_plugins_vue\src\router\menuList.js
 */
const menu = [
  {
    id: "menu-1",
    menuName: "openlayers",
    submenu: [
      {
        id: "menu-1-group-1",
        groupName: "轨迹实现",
        group: [
          {
            id: "menu-1-group-1-1",
            menuName: "实例-1",
            index: "/navigator/index",
          },
          {
            id: "menu-1-group-1-2",
            menuName: "实例-2",
            index: "/navigatortwo/index",
          },
          {
            id: "menu-1-group-1-3",
            menuName: "实例-3",
            index: "/navigatorTherr/index",
          },
        ],
      },
      {
        id: "menu-1-group-2",
        groupName: "大数据渲染",
        group: [
          {
            id: "menu-1-group-2-1",
            menuName: "实例-1",
            index: "/navigatorFour/index",
          },
        ],
      },
    ],
  },
  {
    id: "menu-2",
    menuName: "mapboxGL",
    submenu: [],
  },
  {
    id: "menu-3",
    menuName: "maptalks",
    submenu: [],
  },
];
export default menu;
