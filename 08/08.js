document.addEventListener('DOMContentLoaded', ()=>{
const img = document.querySelector('alt> img');
const txt = document.querySelector('#txt1');
const bt1 = document.querySelector('#bt1');

//랜덤수
let n;

bt1.addEventListener('click',(e)=>{
  e.preventDefault();
  n = Math.floor(Math.random()*100)+ 1;
  if (n === parseFloat(txt1.value)) {
    img.setAttribute('scr', '../img/good.png');
  } else if {
    img.setAttribute('scr', '../img/up.png');
   } else {
    img.setAttribute('scr', '../img/down.png');
  }
});

});