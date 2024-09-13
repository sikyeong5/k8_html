let arr = [0, 0, 0, 0, 0, 0, 0, 0, 1];
let isShuffle = false;
let cnt = 0;

const init = (bt) => {
  bt.innerHTML = '폭탄을 섞어 주세요.' ;
  isShuffle = false ;
  cnt = 0; 
}

document.addEventListener('DOMContentLoaded', () => {
  const cols = document.querySelectorAll('.col');
  const bt = document.querySelector('button');
  const msg = document.querySelector('#msg');

  bt.addEventListener('click', (e) => {
    e.preventDefault();
    if (!isShuffle) {
      isShuffle = true;

      arr.sort(() => Math.random() - 0.5);
      console.log(arr)
      bt.innerHTML = '----게임중----'

      msg.innerHTML ='';
      for(let [idx,col] of cols.entries()) {
        col.innerHTML = idx + 1;
      }
    
    }
  });

  //div 박스처리
  for(let [idx, col] of cols.entries()) {
    col.addEventListener('click', () => {

      //폭탄이 섞이지 않으면 클릭 안되게
      if (!isShuffle) {
        msg.style.color = 'white';
        msg.innerHTML = '폭탄을 섞어야 게임을 시작할 수 있습니다'
        return;
      }

      if (col.innerHTML.includes('img')) return; //이미 클릭된 칸은 무시

      if (msg.innerHTML.includes('실패')) return ;// 실패한 경우 더이상 안눌리게

      //let idx = col.getAttribute('id').slice(-1) - 1;
      console.log(idx, arr[idx])

      if (arr[idx] == 0) {
        col.innerHTML = '<img src="../img/hart.png">'
        cnt = cnt + 1;
        if (cnt == 8) {
          msg.style.color = 'blue';
          msg.innerHTML = '성공'

          let i = arr.indexOf(1)

          // document.querySelector('.col').innerHTML = '<img src="../img/hart.png">'
         
          document.querySelector(`#box${i+1}`).innerHTML = '<img src="../img/hart.png">' ;
          
         init(bt);
          
          isShuffle = false;
        }
      } else {
        col.innerHTML = '<img src="../img/boom.png">'
        msg.style.color = 'red';
        msg.innerHTML = '실패'
      }


    })

  }

});

