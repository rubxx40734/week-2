console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});


// ============地區篩選============
let data = [
  {
    "main":"台北",
    "local":"https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate1.jpeg?raw=true",
    "title": "台北中山旗艦店",
    "icontel":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "tel":"(02)000-1234",
    "icontime":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time":"10:00-21:00",
    "iconlocal":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "map":"台北市中山區南京東路25巷1號"
  },
  {
    "main":"台北",
    "local":"https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate2.jpg?raw=true",
    "title": "台北館前店",
    "icontel":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "tel":"(02)0020-1234",
    "icontime":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time":"10:00-21:00",
    "iconlocal":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "map":"台北市忠孝西路22號3F-134櫃"
  },
  {
    "main":"台中",
    "local":"https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate3.jpg?raw=true",
    "title": "台中中港店",
    "icontel":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "tel":"(02)0020-1234",
    "icontime":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time":"10:00-21:00",
    "iconlocal":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "map":"台中市中港路中友百貨12F"
  },
  {
    "main":"台中",
    "local":"https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate4.jpg?raw=true",
    "title": "台中綠色誠品",
    "icontel":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "tel":"(02)0020-1234",
    "icontime":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time":"10:00-21:00",
    "iconlocal":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "map":"台中市綠色誠品B2F-87櫃"
  },
  {
    "main":"高雄",
    "local":"https://github.com/hexschool/webLayoutTraining1st/blob/master/week3/locate5.jpg?raw=true",
    "title": "高雄美麗新百貨店",
    "icontel":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-phone-black.svg",
    "tel":"(02)0220-1534",
    "icontime":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-clock-black.svg",
    "time":"10:00-21:00",
    "iconlocal":"https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/102c91f7b3d8e08005073f54b3283b09a18dc427/week3/icon-map.svg",
    "map":"高雄市前鎮區小港路34號17F"
  },
]

const storeLocal = document.querySelector('.storeLocal')
console.log(storeLocal)
const mapChooseJs = document.querySelector('.mapChooseJs')
console.log(mapChooseJs)

mapChooseJs.addEventListener('click',function(e){
  let str = ''
  console.log(e.target.value)
  data.forEach(function(item){
    if(e.target.value == '全台門市'){
      str+=` <li>
      <img src="${item.local}" alt="">
      <h2>${item.title}</h2>
      <div class="tel">
          <img src="${item.icontel}" alt="">
          <p>電話：${item.tel}</p>
      </div>
      <div class="time">
          <img src="${item.icontime}" alt="">
          <p>營業時間：${item.time}</p>
      </div>
      <div class="local">
          <img src="${item.iconlocal}" alt="">
          <p>地址：${item.map}</p>
      </div>
      <button type="button"><a href="storemap.html">詳細資訊</a></button>`
    }
    else if(e.target.value == item.main){
      str+=` <li>
      <img src="${item.local}" alt="">
      <h2>${item.title}</h2>
      <div class="tel">
          <img src="${item.icontel}" alt="">
          <p>電話：${item.tel}</p>
      </div>
      <div class="time">
          <img src="${item.icontime}" alt="">
          <p>營業時間：${item.time}</p>
      </div>
      <div class="local">
          <img src="${item.iconlocal}" alt="">
          <p>地址：${item.map}</p>
      </div>
      <button type="button"><a href="storemap.html">詳細資訊</a></button>
  </li>`
    }
    storeLocal.innerHTML = str
  })
})


// ===========地圖顯示JS============
// const mapChooseSearchJs = document.querySelector('.mapChooseSearchJs')
// console.log(mapChooseSearchJs)

// const searchitem = document.querySelector('.searchitem')
// console.log(searchitem)

// mapChooseSearchJs.addEventListener('click',function(e){
//   console.log(e.target.value)
// })