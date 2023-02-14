let gnb = document.querySelector('#gnb');
let gnb_bg = document.querySelector('#gnb_bg');
let lnb = document.querySelectorAll('.lnb');
console.log(lnb);
gnb.addEventListener('mouseenter',()=>{
  gnb_bg.style.height = '190px';
  for(i=0; i<lnb.length; i++) {
    lnb[i].style.height = '190px';
  }
})
gnb.addEventListener('mouseleave',()=>{
  gnb_bg.style.height = '0px';
  for(i=0; i<lnb.length; i++) {
    lnb[i].style.height = '0px';
  }
})

//main_4 / src의 값을 바꾸는 방법으로
let list = document.querySelectorAll('.list');

for(let i=0; i<list.length; i++) {
  list[i].addEventListener('mouseenter', ()=>{
    list[i].src = `img/main3-on${i + 1}.jpg`
  })
  list[i].addEventListener('mouseleave', ()=>{
    list[i].src = `img/main3-img${i + 1}.jpg`
  })
}

//main_5
let floor = document.querySelectorAll('.Floor');
let vr = document.querySelector('.vr');
for(let i=0; i<floor.length; i++) {
  floor[i].addEventListener('mouseenter', () => {
    floor[i].style.backgroundImage = 'url(img/floorplan-icon-on.png)'
    floor[i].style.backgroundColor = '#fff'
    floor[i].style.color = '#333'

  })
  floor[i].addEventListener('mouseleave', () =>  {
    floor[i].style.backgroundImage = 'url(img/floorplan-icon.png)'
    floor[i].style.backgroundColor = '#8d7249'
    floor[i].style.color = '#fff'

  })
  // vr[i].addEventListener('mouseenter')
}
