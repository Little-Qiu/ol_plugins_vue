<!--
 * @Author: 
 * @Date: 2022-08-07 00:04:12
 * @LastEditTime: 2022-09-30 22:56:50
 * @LastEditors: LittleQ
 * @Description: 
 * @FilePath: \ol_plugins_vue\src\components\Map_WebglPoints.vue
-->
<template>
  <div class="map" id="map"></div>
</template>

<script>
import Map from "ol/Map";
import XYZ from "ol/source/XYZ";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
// import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";

import Point from "ol/geom/Point";
import Feature from "ol/Feature";
import WebGLPoints from "ol/layer/WebGLPoints";

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

      let map = new Map({
        layers: [gaodeMapLayer],
        view: new View({
          center: [114.31, 30.55],
          projection: "EPSG:4326",
          zoom: 14,
        }),
        target: "map",
      });

      let style = {
        symbol: {
          symbolType: "image",
          size: 10,
          color: "#ff0000",
        },
      };
      let features = [];
      for (let i = 0; i < 10000; i++) {
        let ran = Math.random() * 360;
        let ran2 = Math.random() * 360;
        let lon = -180 + ran;
        let lat = -90 + ran2;
        let feature = new Feature({
          geometry: new Point([lon, lat]),
        });
        features.push(feature);
      }
      let vectorSource = new VectorSource({
        features: features,
      });
      let layer = new WebGLPoints({
        source: vectorSource,
        style: style,
      });
      map.addLayer(layer);
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
