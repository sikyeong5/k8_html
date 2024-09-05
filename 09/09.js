document.addEventListener('DOMContentLoaded', () => {

  const text1 = document.querySelector('#text1');
  const text2 = document.querySelector('#text2');

  const bt1 = document.querySelector('#bt1');
  const bt2 = document.querySelector('#bt2');


    bt1.addEventListener('click', (e) => {
      e.preventDefault();
      let s1 = text1.value.replaceAll(' ','') ;
      let s2 = '' ;
//반복문이용
      // for(let i = s1.length - 1; i >= 0; i--) {
      //   s2 = s2 + s1[i];
      // }

s2 = s1.split('').reverse().join('');
//split이 배열을 나누고 reverse가 글자를 뒤집어주고 join이 배열요소를 연결해준다.

      console.log('s1:', s1);
      console.log('s2:', s2);


      if(s1 == s2) text2.value ='회문입니다' ;
      else text2.value = '회문이 아닙니다'
    });

    
  
});