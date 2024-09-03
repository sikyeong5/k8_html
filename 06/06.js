document.addEventListener('DOMContentLoaded', () => {

  const imgs = document.querySelectorAll(`.dice > p > img`);

  const bts = document.querySelectorAll('.bt4');

  const msg = document.querySelector('#msg');

  console.log(bts)

  //버튼 클릭
  for (let bt of bts) {
    console.log(bt)
    bt.addEventListener(`click`, () => {
      //컴퓨터 랜덤수
      let comN = Math.floor(Math.random() * 6) + 1;
      imgs[0].setAttribute('src',`../img/${comN}.png`);
      imgs[0].setAttribute('alt',`${comN}.png`);

      //사용자 선택수
      console.log(bt.textContent.charAt(0))
      let userN = parseInt(bt.textContent.charAt(0));
      imgs[1].setAttribute('src',`../img/${userN}.png`);
      imgs[1].setAttribute('alt',`${userN}.png`);

      
      //결과표시
      if(comN === userN) {
        msg.textContent ='맞음';
      } else {
        msg.textContent ='틀림';
      }
    });
  }

});
