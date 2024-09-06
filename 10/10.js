const disp = ( divNum,divplus,divBonus, disp ) => {
  divNum.style.display = disp;
  divplus.style.display = disp;
  divBonus.style.display = disp;
  
}

document.addEventListener('DOMContentLoaded', () => { //callback함수


  //요소 가져오기

  const divNum = document.getElementById('divN');
  // const divNum = document.querySelector('#divNum');
  const divplus = document.querySelector('.divplus');
  const divBonus = document.querySelector('#divBonus');
  const bt = document.querySelector('.sec> button');

  //요소숨기기
  // divNum.style.display = 'none';
  // divplus.style.display = 'none';
  // divBonus.style.display = 'none';
  disp(divNum, divplus, divBonus, 'none');
  

  bt.addEventListener('click', (e) => {
    e.preventDefault();
    let arr =[];
    while(arr.length < 7) {
    let n = Math.floor(Math.random() * 45) + 1;
    if (!arr.includes(n)) arr.push(n);
}

// console.log(arr);
let arrBonus =arr.splice(6,1);
arr.sort((a,b)=> a-b);
// console.log(arr);
console.log(arrBonus);

arr = arr.map(item => `<span class= 'sp$(Math.floor(item/10))>$(item)</span>`);
arr= arr.join('');
divNum.innerHTML = arr;
console.log(arr);

arrBonus = arrBonus.map(item => `<span class= 'sp$(Math.floor(item/10))>$(item)</span>`);
arrBonus= arrBonus.join('');
divBonus.innerHTML = arrBonus;

divNum.style.display = 'block';
divplus.style.display = 'block';
divBonus.style.display = 'block';

});


});

// while쓰고 include로 넣을지 말지를 결정해야 한다