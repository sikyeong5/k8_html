//전역변수
const testAPI = '82ca741a2844c5c180a208137bb92bd7';


//상세정보 가져오기
const getDetail = (movieCd) => {
  const mvinfo = document.querySelector('#mvinfo');
  let url = `https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?`;
  url = `${url}key=${testAPI}&movieCd=${movieCd}`;

  // movieinfo.innerHTML = movieCd;
 

  console.log(url);

  fetch(url) //가져와서 던지기
    .then(resp => resp.json())
    .then(data => {
     
      let movieInfo = data.movieInfoResult.movieInfo ;
      let genres = movieInfo.genres.map(item => item.genreNm).join(',');
      let companys =movieInfo.companys.map(item =>`${item.companyNm} (${item.companypartNm})`).join(', ');
      console.log(genres)
      console.log(companys)


      mvinfo.innerHTML = `
      <div>${movieInfo.movieNm} (${movieInfo.openDt})</div>
      <ul>
      <li> 장르: ${genres}</li>
      <li> 제작사: ${companys}</li>
      </ul>
      `;
    })

    .catch(err => console.log(err))

  mvinfo.innerHTML = movieCd;


};


//OPEN api 데이터 가져오기
const getData = (selDt, ul, gubun) => {
  // console.log(selDt);


  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?`;
  url = `${url}key=${testAPI}&targetDt=${selDt}`;

  if (gubun != 'T') {
    url = `${url}&repNationCd=${gubun}`;
  }

  console.log(url);


  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      let dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList)


      let tm = dailyBoxOfficeList.map(item =>
        `<a href="#" onclick="getDetail(${item.movieCd});"> 
        <li class='mvli'>
        <span class='rank'>${item.rank}</span>
        <span class='movieNm'>${item.movieNm}</span>
        <span class='openDt'>${item.openDt}</span>
        <span class='rankInten'>


        ${item.rankInten > 0 ?
          '<span class= "spRed">▲</span>' : item.rankInten < 0 ?
            '<span class= "spBlue">▼</span>' : ' - '}
        ${item.rankInten != 0 ? Math.abs(item.rankInten) : ''}
        </span>

      </li></a>
      `)


      tm = tm.join('')
      ul.innerHTML = tm;
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



//radio 값 가져오기
const getGubun = () => {
  // //radio 요소 가져오기
  // const r1 = document.querySelector('#r1');
  // const r2 = document.querySelector('#r2');
  // const r3 = document.querySelector('#r3');

  // console.log("r1=", r1.checked);
  // console.log("r2=", r2.checked);
  // console.log("r3=", r3.checked);

  // if (r1.checked) return r1.value;
  // else if(r2.checked) return r2.value;
  // else if(r3.checked) return r3.value;

  //radio 버튼의 클릭된 것만 가져오기 (위에 있는 코드를 이걸로 대체 가능)
  const gubun = document.querySelector('input[name= mvGubun]:checked');
  console.log('gubun=', gubun.value);

  return gubun.value;
}



//DOM 생성후
document.addEventListener('DOMContentLoaded', () => {
  //어제 날짜 구하기
  //getYesterday(); 
  //console.log('yesterday:', yesterday); 
  //오류 나는 이유: yesterday는 getyesterday에서 선언한 변수라 content load가 될때 못 가져옴


  //Dom 요소 가져오기
  const dt = document.querySelector('#dt');
  const ul = document.querySelector('.sec > ul');
  //const radios = document.querySelectorAll('input[type=radio]')
  //const radios= document.getElementsByName('mvGubun');


  const radios = document.querySelectorAll('input[name= mvGubun]');





  let yesterday = getYesterday();
  console.log('yesterday:', yesterday);

  //date 요소 최대값 결정
  dt.max = yesterday;

  //date의 기본값
  dt.value = yesterday;

  //Gubun의 값
  console.log(getGubun());


  //기본 첫 페이지 보이기
  getData(dt.value.replaceAll('-', ''), ul, getGubun());

  //데이터 가져오기
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), ul, getGubun());
  });


  for (let radio of radios) {
    radio.addEventListener('click', () => {
      if (radio.checked)
        getData(dt.value.replaceAll('-', ''), ul, radio.value);
    })
  }



});