/*
 * @Author: Little Q
 * @Date: 2022-08-07 00:06:21
 * @LastEditTime: 2022-08-07 16:30:13
 * @LastEditors: qiulongwen
 * @Description: 基于ol的轨迹播放插件
 * @FilePath: \ol_plugins\src\plugins\trajectory\TrajectoryAnimation.js
 */

// import { getUid } from "ol/util";

// 默认参数
const defaultOptions = {
  showArrow: true, // 是否显示白色方向箭头
  strokeOpacity: 0.9, //  线条透明度
  strokeWeight: 10, //  线条宽度
  strokeStyle: "solid", // 轮廓线样式，实线: solid 虚线:dashed
  strokeDasharray: [], // 轮廓线间隙
  lineCap: "butt", // 折线两端线帽的绘制样式，默认值为'butt'无头，其他可选值：'round'圆头、'square'方头
  lineJoin: "round", // 折线拐点的绘制样式，默认值为'round'圆角，其他可选值：'round'圆角、'bevel'斜角
  isOutline: false, // 线条是否带描边，默认false
  borderWeight: 10, // 描边的宽度，默认为1
  outlineColor: "#000000", // 线条描边颜色，此项仅在isOutline为true时有效，默认：#000000
};
class TrajectoryAnimation {
  constructor(opts) {
    const { map, ...otherOptions } = opts;
    const options = Object.assign({}, defaultOptions, {
      ...otherOptions,
    });
    this.map = map;
    this.options = options;
  }
  init() {
    // 1. 初始化原始轨迹图层
    // 2. 初始化已播放图层
  }
  // 播放
  play() {}
  // 重新播放
  replay() {}
  // 暂停、继续播放
  paused() {}
  // 加速播放
  increaseSpeed() {}
  // 减速播放
  reduceSpeed() {}
  // 清除轨迹
  clearTrajectory() {}
}
export default TrajectoryAnimation;
