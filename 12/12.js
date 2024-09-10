//OPEN api 데이터 가져오기
const getData = (selDt, ul) => {
  console.log(selDt);

  const testAPI = '82ca741a2844c5c180a208137bb92bd7';
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`;

  console.log(url);


  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList)


      let tm = dailyBoxOfficeList.map(item =>
        `<li class='mvli'>
        <span class='rank'>${item.rank}</span>
        <sapn class='movieNm'>${item.movieNm}</sapn>
      </li>`)

      tm = tm.join('')
      ul.innerHTML = tm ;
      console.log(tm)
    })

    .catch(err => console.log(err));
}




//어제 날짜 구하는 함수를 만들겠다
const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const year = yesterday.getFullYear();
  let month = yesterday.getMonth() + 1;
  let day = yesterday.getDate();

  //월 2자리
  month = month < 10 ? '0' + month : month;
  day = day < 10 ? '0' + day : day;

  //month = `0${month}`.slice(-2);

  //month = `${month}`.padStart(2,0);
  //console.log("month=", month);


  return `${year}-${month}-${day}`;

  //console.log('yesterday:', yesterday);
  //return yesterday;
}

//DOM 생성후
document.addEventListener('DOMContentLoaded', () => {
  //어제 날짜 구하기
  //getYesterday(); 
  //console.log('yesterday:', yesterday); 
  //오류 나는 이유: yesterday는 getyesterday에서 선언한 변수라 contednt load가 될때 못 가져옴


  //Dom 요소 가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');

  let yesterday = getYesterday();
  console.log('yesterday:', yesterday);

  //date 요소 최대값 결정
  dt.max = yesterday;

  //데이터 가져오기
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul);
  });


  // const date = new Date(yesterday);
  // const dateFormat = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  // console.log(dateFormat);

});



