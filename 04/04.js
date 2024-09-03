//dom이 생성된 후 이벤트를 감지
document.addEventListener('DOMContentLoaded', () => {
  //버튼 요소 가져오기
  const bt1 = document.getElementById('bt1');
  //Id를 가지고 오는 것
  const bt2 = document.querySelector('#bt2');
  //셀렉터로 찾는거라서 # 추가
  const bt3 = document.querySelector('#bt3');
  const msg = document.querySelector('#msg');
  //()=>{}, 화살표 함수가 인수로 들어감
  //버튼에 이벤트 달기

  bt1.addEventListener('click', () => {
    alert(bt1.innerHTML); //HTML코드를가져옴
  });
  bt2.addEventListener('click', () => {
    alert(bt2.textContent); //콘텐츠 사이에 글자를 가져옴
  });
  bt3.addEventListener('click', () => {
    // msg.innerHTML = '<h2>랜덤수 생성</h2>';
    let n = Math.floor(Math.random() * 6) + 1;
    console.log('n=', n);
    msg.innerHTML = `<h2>${bt3.textContent}: <span>${n}</span></h2>`;
  });

});