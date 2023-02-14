// 메인 스와이퍼
  var swiper = new Swiper(".mySwiper", {
    // spaceBetween: 30,
    // centeredSlides: true,
    autoplay: { 
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
      // clickable: true,
    },
    navigation: {
      nextEl: ".slide_next",
      prevEl: ".slide_prev",
    },
  });







//인기계정랭킹 탭
function tabOpen(e, tabName) { 
  let tabContent = document.getElementsByClassName('tabcont');
  for(i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = 'none';
  }
  document.getElementById(tabName).style.display = "block";   
  //컨텐츠를 보여주기 위해서 사용


  //텝리스트에 클래스를 추가하기 위함
  let tabL = document.getElementsByClassName("tablink");
  for(i = 0; i < tabL.length; i++) {
    tabL[i].className = tabL[i].className.replace(' active' , ' ');
  }
  e.currentTarget.className += ' active';   //현재 내가 클릭한 것의 class에 active를 추가하는 것
}