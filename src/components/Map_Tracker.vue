<!--
 * @Author: 
 * @Date: 2022-08-07 00:04:12
 * @LastEditTime: 2022-08-07 00:04:30
 * @LastEditors: qiulongwen
 * @Description: 
 * @FilePath: \ol_plugins\src\components\Map_Tracker.vue
-->
<template>
  <div class="map" id="map"></div>
</template>

<script>
import Map from "ol/Map";
import XYZ from "ol/source/XYZ";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
export default {
  name: "Map_Tracker",
  components: {},
  data() {
    return {};
  },
  props: {},
  watch: {},
  methods: {
    initMap() {
      var gaodeMapLayer = new TileLayer({
        source: new XYZ({
          url: "http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}",
        }),
      });

      new Map({
        layers: [gaodeMapLayer],
        view: new View({
          center: [114.31, 30.55],
          projection: "EPSG:4326",
          zoom: 14,
        }),
        target: "map",
      });

      console.log("init finished");
    },
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {},
};
</script>

<style lang="less" scoped>
.map {
  height: 100%;
  width: 100%;
  margin: 0;
}
</style>
