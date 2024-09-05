document.addEventListener('DOMContentLoaded', () => {
  const img = document.querySelector('.pic> img');
  const txt1 = document.querySelector('#txt1');
  const bt1 = document.querySelector('#bt1');

  //랜덤수
  let n;
  //flag변수
  let flag = false;

  bt1.addEventListener('click', (e) => {
    e.preventDefault();

    //if (flag == false) {
    if (!flag) {
      n = Math.floor(Math.random() * 100) + 1;
      console.log('n=', n);
      flag = true;

      if (txt1.style.display == 'none') {
        txt1.style.display = 'inline';
        img.setAttribute('src', '../img/what.png');
        txt1.value = '';
        txt1.focus();
        bt1.innerHTML = '확인';
        return;
      }
    }

    if (n === parseFloat(txt1.value)) {
      img.setAttribute('src', '../img/good.png');
      txt1.style.display = 'none';
      bt1.innerHTML = '번호를 다시 생성하세요'
      flag = false;
    } else if (n > parseFloat(txt1.value)){
      img.setAttribute('src', '../img/up.png');
    } else {
      img.setAttribute('src', '../img/down.png');
    }
  });

});