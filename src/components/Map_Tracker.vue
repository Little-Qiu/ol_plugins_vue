<!--
 * @Author: 
 * @Date: 2022-08-07 00:04:12
 * @LastEditTime: 2022-08-25 18:08:10
 * @LastEditors: Little_Q longwen@spacesystech.com
 * @Description: 
 * @FilePath: \ol_plugins_vue\src\components\Map_Tracker.vue
-->
<template>
  <div class="map" id="map"></div>
</template>

<script>
import Map from "ol/Map";
import XYZ from "ol/source/XYZ";
import TileLayer from "ol/layer/Tile";
import View from "ol/View";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";

import ol_style_Style from "ol/style/Style";
import ol_style_Icon from "ol/style/Icon";
import ol_style_Stroke from "ol/style/Stroke";

import routearrow from "../assets/routearrow.png";

import Point from "ol/geom/Point";
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

      let layer = new VectorLayer({
        source: new VectorSource(),
      });
      map.addLayer(layer);

      let geojsonFormat = new GeoJSON();

      let gjson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            properties: {},
            geometry: {
              type: "LineString",
              coordinates: [
                [114.2924451828003, 30.548735055676342],
                [114.29841041564941, 30.543006308026428],
                [114.29866790771484, 30.53731418530321],
                [114.29763793945311, 30.530623666534726],
                [114.29145812988281, 30.526927049704433],
                [114.28613662719725, 30.528479645904042],
                [114.27154541015625, 30.50666709259759],
                [114.28184509277342, 30.49305949630156],
                [114.30931091308594, 30.500750980290693],
                [114.32304382324219, 30.51494904517773],
                [114.32785034179688, 30.525004753369974],
                [114.31686401367188, 30.534467998833467],
                [114.30107116699219, 30.517906714408557],
                [114.29557800292969, 30.513174400443376],
                [114.30107116699219, 30.491876137098675],
                [114.29969787597656, 30.484183951487754],
                [114.29008483886717, 30.4711650216242],
                [114.2749786376953, 30.47471581151385],
                [114.2633056640625, 30.484183951487754],
                [114.2523193359375, 30.49483450812004],
                [114.24819946289062, 30.517906714408557],
                [114.25506591796875, 30.538607878854556],
                [114.27566528320312, 30.54688710949595],
                [114.31137084960938, 30.554574334398687],
                [114.33334350585938, 30.547478456100688],
                [114.34364318847656, 30.53328514356082],
                [114.3402099609375, 30.50903343674927],
              ],
            },
          },
        ],
      };
      let feat = geojsonFormat.readFeature(gjson.features[0], {
        featureProjection: map.getView().getProjection(),
      });
      layer.getSource().addFeature(feat);
      feat.setStyle(function (resolution) {
        let geometry = this.getGeometry();
        let length = geometry.getLength(); //获取线段长度
        let radio = (50 * resolution) / length;
        let dradio = 1; //投影坐标系，如3857等，在EPSG:4326下可以设置dradio=10000
        let styles = [
          new ol_style_Style({
            stroke: new ol_style_Stroke({
              color: "green",
              width: 10,
            }),
          }),
        ];
        for (let i = 0; i <= 1; i += radio) {
          let arrowLocation = geometry.getCoordinateAt(i);
          geometry.forEachSegment(function (start, end) {
            if (start[0] == end[0] || start[1] == end[1]) return;
            let dx1 = end[0] - arrowLocation[0];
            let dy1 = end[1] - arrowLocation[1];
            let dx2 = arrowLocation[0] - start[0];
            let dy2 = arrowLocation[1] - start[1];
            if (dx1 != dx2 && dy1 != dy2) {
              if (Math.abs(dradio * dx1 * dy2 - dradio * dx2 * dy1) < 0.001) {
                let dx = end[0] - start[0];
                let dy = end[1] - start[1];
                let rotation = Math.atan2(dy, dx);
                styles.push(
                  new ol_style_Style({
                    geometry: new Point(arrowLocation),
                    image: new ol_style_Icon({
                      src: routearrow,
                      anchor: [0.75, 0.5],
                      rotateWithView: false,
                      rotation: -rotation + Math.PI,
                    }),
                  })
                );
              }
            }
          });
        }
        return styles;
      });

      map.getView().fit(feat.getGeometry());
      console.log("init finished");
    },
    styles(resolution) {
      let geometry = this.getGeometry();
      let length = geometry.getLength(); //获取线段长度
      let radio = (50 * resolution) / length;
      let dradio = 1; //投影坐标系，如3857等，在EPSG:4326下可以设置dradio=10000
      let styles = [
        new ol_style_Style({
          stroke: new ol_style_Stroke({
            color: "green",
            width: 10,
          }),
        }),
      ];
      for (let i = 0; i <= 1; i += radio) {
        let arrowLocation = geometry.getCoordinateAt(i);
        geometry.forEachSegment(function (start, end) {
          if (start[0] == end[0] || start[1] == end[1]) return;
          let dx1 = end[0] - arrowLocation[0];
          let dy1 = end[1] - arrowLocation[1];
          let dx2 = arrowLocation[0] - start[0];
          let dy2 = arrowLocation[1] - start[1];
          if (dx1 != dx2 && dy1 != dy2) {
            if (Math.abs(dradio * dx1 * dy2 - dradio * dx2 * dy1) < 0.001) {
              let dx = end[0] - start[0];
              let dy = end[1] - start[1];
              let rotation = Math.atan2(dy, dx);
              styles.push(
                new ol_style_Style({
                  geometry: new Point(arrowLocation),
                  image: new ol_style_Icon({
                    src: "assets/imgs/routearrow.png",
                    anchor: [0.75, 0.5],
                    rotateWithView: false,
                    rotation: -rotation + Math.PI,
                  }),
                })
              );
            }
          }
        });
      }
      return styles;
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
