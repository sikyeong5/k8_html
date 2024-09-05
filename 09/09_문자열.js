//문자열 연습
let s = 'hello haha'

console.log('문자열:',s);
console.log('문자열길이:',s.length); //공백도 문자열
console.log('문자열대문자변환:',s.toUpperCase());
console.log('숫자확인:', isNaN(s));

console.log('첫번째글자:', s.charAt(0));
console.log('첫번째글자:', s[0]);

console.log('마지막글자:', s[s.length- 1]);
console.log('마지막글자:', s.charAt(s.length -1));
console.log('마지막글자:', s.slice(-1));

console.log('문자열분리(중요):',s.split('')); //한글자씩 분리하고 싶을때 사용
for(let c of s) {
  console.log(c);
}

for(let i in s) {
  console.log(i, '=>',s[i]);
}

//문자열 확인
console.log('h문자열 확인:', s.includes('ha'));
console.log('h문자열 확인:', s.indexOf('h'));
console.log('h문자열 확인:', s.indexOf('ha'));

//문자열 자르기
console.log('문자열자르기:',s.substring(5,0));
console.log('문자열자르기:',s.slice(5,0));


// s = '1234' ;
// console.log('문자열:',s)
// console.log('숫자확인:', isNaN(s));