"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
var data = [{
  "main": "台北",
  "local": "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate1.jpeg?raw=true",
  "title": "台北中山旗艦店",
  "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
  "tel": "(02)000-1234",
  "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
  "time": "10:00-21:00",
  "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
  "map": "台北市中山區南京東路25巷1號"
}, {
  "main": "台北",
  "local": "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate2.jpg?raw=true",
  "title": "台北館前店",
  "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
  "tel": "(02)0020-1234",
  "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
  "time": "10:00-21:00",
  "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
  "map": "台北市忠孝西路22號3F-134櫃"
}, {
  "main": "台中",
  "local": "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate3.jpg?raw=true",
  "title": "台中中港店",
  "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
  "tel": "(02)0020-1234",
  "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
  "time": "10:00-21:00",
  "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
  "map": "台中市中港路中友百貨12F"
}, {
  "main": "台中",
  "local": "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate4.jpg?raw=true",
  "title": "台中綠色誠品",
  "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
  "tel": "(02)0020-1234",
  "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
  "time": "10:00-21:00",
  "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
  "map": "台中市綠色誠品B2F-87櫃"
}, {
  "main": "高雄",
  "local": "https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate5.jpg?raw=true",
  "title": "高雄美麗新百貨店",
  "icontel": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
  "tel": "(02)0220-1534",
  "icontime": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
  "time": "10:00-21:00",
  "iconlocal": "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
  "map": "高雄市前鎮區小港路34號17F"
}];
var storeLocal = document.querySelector('.storeLocal');
console.log(storeLocal);
var mapChooseJs = document.querySelector('.mapChooseJs');
console.log(mapChooseJs);
mapChooseJs.addEventListener('click', function (e) {
  var str = '';
  console.log(e.target.value);
  data.forEach(function (item) {
    if (e.target.value == '全台門市') {
      str += " <li>\n      <img src=\"".concat(item.local, "\" alt=\"\">\n      <h2>").concat(item.title, "</h2>\n      <div class=\"tel\">\n          <img src=\"").concat(item.icontel, "\" alt=\"\">\n          <p>\u96FB\u8A71\uFF1A").concat(item.tel, "</p>\n      </div>\n      <div class=\"time\">\n          <img src=\"").concat(item.icontime, "\" alt=\"\">\n          <p>\u71DF\u696D\u6642\u9593\uFF1A").concat(item.time, "</p>\n      </div>\n      <div class=\"local\">\n          <img src=\"").concat(item.iconlocal, "\" alt=\"\">\n          <p>\u5730\u5740\uFF1A").concat(item.map, "</p>\n      </div>\n      <button type=\"button\">\u8A73\u7D30\u8CC7\u8A0A</button>\n  </li>");
    } else if (e.target.value == item.main) {
      str += " <li>\n      <img src=\"".concat(item.local, "\" alt=\"\">\n      <h2>").concat(item.title, "</h2>\n      <div class=\"tel\">\n          <img src=\"").concat(item.icontel, "\" alt=\"\">\n          <p>\u96FB\u8A71\uFF1A").concat(item.tel, "</p>\n      </div>\n      <div class=\"time\">\n          <img src=\"").concat(item.icontime, "\" alt=\"\">\n          <p>\u71DF\u696D\u6642\u9593\uFF1A").concat(item.time, "</p>\n      </div>\n      <div class=\"local\">\n          <img src=\"").concat(item.iconlocal, "\" alt=\"\">\n          <p>\u5730\u5740\uFF1A").concat(item.map, "</p>\n      </div>\n      <button type=\"button\">\u8A73\u7D30\u8CC7\u8A0A</button>\n  </li>");
    }

    storeLocal.innerHTML = str;
  });
});
//# sourceMappingURL=all.js.map
