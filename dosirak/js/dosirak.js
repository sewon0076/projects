//header 반응형
let header = document.querySelector('.header');
let headerHeight = header.offsetHeight;
let logoImg = document.querySelector('.logoImg');
let gnbA = document.querySelectorAll('.gnbA');
let btnNav = document.querySelector('.btn_nav');

window.addEventListener('scroll',()=>{
  let windowTop = window.scrollY;

  if(windowTop>headerHeight){
    header.classList.add('active');
    logoImg.src='img/logo.png'
    btnNav.classList.add('active');
    console.log(gnbA.length);
    for(i=0; i<gnbA.length; i++){
      gnbA[i].classList.add('active');
    }
  } else {
    header.classList.remove('active');
    logoImg.src='img/logo_white.png'
    btnNav.classList.remove('active');
    for(i=0; i<gnbA.length; i++){
      gnbA[i].classList.remove('active');
    }
  }
})


// <!-- Initialize Swiper -->
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
        navigation: {
          nextEl: ".right",
          prevEl: ".left",
        },
      });


      // about 섹션
      let about_btn = document.querySelector('.about_btn');
      let aboutArrow = document.querySelector('.about_btn>a>span');

      about_btn.addEventListener('mouseover',()=>{
        aboutArrow.classList.add('active');
      })
      about_btn.addEventListener('mouseleave',()=>{
        aboutArrow.classList.remove('active');
      })


      // banners 섹션
      let article = document.querySelectorAll('.bannersA');
      let bnr_btn = document.querySelector('.bnr_btn');

      for(let i=0; i<article.length; i++){
        article[i].addEventListener('mouseover',()=>{
          article[i].classList.add('active');
        })
        article[i].addEventListener('mouseleave',()=>{
          article[i].classList.remove('active');
        })



        // article[j].addEventListener('mouseleave',()=>{
        //   for(i=0; i<bannersTit.length; i++){
        //     bannersTit[i].classList.remove('active');
        //   }
        // })
      }
