let arr = [1,2,3,4,5];

console.log('arr :', arr)
console.log('arr 개수 :', arr.length)

//배열요소 접근
console.log('맨처음요소에 접근:', arr[0]);
console.log('두번째요소에 접근:', arr[1]);

//배열의 전체 요소에 접근: 배열순회
console.log('for')
for(let i= 0; i < arr.length; i++ ){
console.log(`${i+1}번째요소: ${arr[i]}`);
}

//인덱스가 필요한 경우에는 in이 나음
console.log('for ... in')
for(let i in arr ){
console.log(`${parseInt(i)+1}번째요소: ${arr[i]}`);
}

//for문 중에 교수님 픽
console.log('for... of')
for(let item of arr){
console.log(`${item} : ${item%2 == 0? "짝": "홀"}`);
}

//값을 2개를 준다
for(let [i,item] of arr.entries()){
console.log(`${parseInt(i)+1}번째: ${item} : ${item%2 == 0? "짝": "홀"}`);
}

//item, i 순서로 넣음 (항목, 인덱스)
arr.forEach((item,i) =>{
  console.log(`${item} : ${item%2 == 0? "짝": "홀"}`);
  })


// arr = []
//console.log('arr :', arr)
//console.log('arr 개수 :', arr.length)

arr.push(6)
console.log('arr push :', arr)
arr.pop()
console.log('arr pop:', arr)
//pop은 맨뒤에꺼 지워줌

arr.unshift(6);
console.log('arr unshift:', arr);
arr.shift();
console.log('arr shift:', arr);

arr.splice(2,2);  //(2(인덱스 번호), 2(갯수))
console.log('arr splice:', arr);

//spilce로 삭제
let arr2 = arr.splice(2,1);
console.log('arr splice:', arr);
console.log('arr splice:', arr2);

//splice로 추가
arr.splice(2,1,3);
console.log('arr splice :', arr);

//splice로 변경
arr.splice(2,1,'a');
console.log('arr splice :', arr);

arr = [1,2,3,4,5] ;
arr2 =[];

for(let item of arr) {
  let item2 = item * 2;
  arr2.push(item2);
}

arr2 =arr.map((item)=>{
let item2 = item*2;
return item2;
});

console.log('arr map 결과 arr2:', arr2)

//줄이기
for(let item of arr) {
  let item2 = item * 2;
  arr2.push(item2);
}
//callback 함수의 매개변수가 1개일때는 괄호 생략 가능
//callback 함수의 바디에 리턴만 있으면 {}와 return 생략가능
arr2 =arr.map(item=> item*2);
console.log('arr map 결과 arr2:', arr2)

//삼항연산을 사용
arr2 =arr.map(item=> item%2 == 0? '짝' : '홀');
console.log('arr map 결과 arr2:', arr2)


arr2=[]; //초기값
for(let item of arr) {
  if(item % 2== 0) arr2.push(item);
};

//하나씩 가져와서 맞는 걸 찾아줌
arr2 =arr.filter(item=> item%2 == 0);
console.log('arr map 결과 arr2:', arr2)

arr[4,5,2,1,3]
console.log(`${arr} => 정렬${arr.sort((a,b)=> b-a)}`)