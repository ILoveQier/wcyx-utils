// 设置 rem 函数,设置浏览器的字体大小
export function setRem(baseSize, originWidth, maxScale) {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
  const scale = document.documentElement.clientWidth / originWidth
  // 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
  document.documentElement.style.fontSize = baseSize * Math.min(scale, maxScale) + 'px'
}
/**
 * @description 深度克隆
 */
export function deepClone(obj) {
  let t = typeof obj,
    newObj;
  if (obj === null || t !== "object") return obj;
  newObj = obj instanceof Array ? [] : {};
  for (let i in obj) {
    newObj[i] = deepClone(obj[i]);
  }
  newObj.__proto__ = obj.__proto__;
  return newObj;
}
/**
 * @description 组织FormData数据
 * @param {*} obj key-value
 */
export function formData(obj) {
  const d = new FormData();
  for (let k in obj) {
    d.append(k, obj[k]);
  }
  return d;
}

/**
 * @description 获取某个区间的随机数 [a, b)
 * @param {*} a min
 * @param {*} b max
 */
export function randomBetween(a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a);
}

/**
 * @description 按照固定格式化时间
 * @param {*} t
 * @param {*} format "yyyy-MM-dd hh:mm:ss"
 */
export function timeFormat(t, fmt) {
  let time = new Date(t)
  var o = {
    "M+": time.getMonth() + 1, //月份
    "d+": time.getDate(), //日
    "H+": time.getHours(), //小时
    "m+": time.getMinutes(), //分
    "s+": time.getSeconds(), //秒
    "q+": Math.floor((time.getMonth() + 3) / 3), //季度
    S: time.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (time.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? o[k]
          : ("00" + o[k]).substr(("" + o[k]).length)
      );
  return fmt;
}

export default {
  timeFormat,
  randomBetween,
  deepClone,
  formData,
  setRem
}