// ******************Фиксация шапки страницы****************************************

// const header = document.getElementById('header');

// window.addEventListener('scroll', function(){
//   let skrollPos = window.scrollY;
//   if (skrollPos > 670) { 
//     header.classList.add('fixed');
//   }else{
//     header.classList.remove('fixed');
//   }
// });

const header = document.getElementById('header');

window.addEventListener('scroll', function(){
  header.classList.add('fixed');
});


// ******************Скрытие меню Услуга********************************************

const service = document.getElementById('service');
const navLink = document.getElementById('navLink');

navLink.addEventListener('click', function(){
  service.classList.toggle('hiden');
});

// ******************Бургер меню****************************************************

const navToggle = document.getElementById('navToggle');
const menu = document.getElementById('menu');

navToggle.addEventListener('click', function(){
  menu.classList.toggle('active');
  navToggle.classList.toggle('active');

  

});

// **************************Убераем Услуги при скроле******************************

const servicePos = document.getElementById('service')

window.addEventListener('scroll', function(){
  
  servicePos.classList.add('hiden')
  
  });

// *************************Убераем Бургер при скроле*******************************

const menuHide = document.getElementById('menu')
const navToggleHide = document.getElementById('navToggle');

window.addEventListener('scroll', function(){
  menuHide.classList.remove('active');
  navToggleHide.classList.remove('active');

});

// *********************************Слайдер*****************************************

// var swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   direction: getDirection(),
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   on: {
//     resize: function () {
//       swiper.changeDirection(getDirection());
//     },
//   },
// });

// function getDirection() {
//   var windowWidth = window.innerWidth;
//   var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

//   return direction;
// }
// ***********************************Слайдер**********************************\

$("[data-slider]").slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 400,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// *************************Маска ввода поля (номер телефона)****************************

window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tests__numb'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+38(___) ___ __ __",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

});

});
  

