"use strict";
// 卖萌标题
var OriginTitile = document.title,
  titleTime;
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    document.title = "赛车的终点是赛道的尽头~";
    clearTimeout(titleTime);
  } else {
    document.title = "我的终点是你的身边~";
    titleTime = setTimeout(function () {
      document.title = OriginTitile;
    }, 2000);
  }
});
