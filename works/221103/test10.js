'use strict';

//오늘 날짜를 전역변수로 생성
const today = new Date();
const year = today.getFullYear(); //연도 4자리
const month = today.getMonth() +1; //월(0부터 시작해서 +1)
const date = today.getDate(); //일
const hour = today.getHours(); //시간 함수는 무조건 괄호 안에 넣는다
const minute = today.getMinutes(); //분
const second = today.getSeconds(); //초
const yymmdd = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" +second;

//시스템 날짜 가져와 폼에 출력
function datebring(){
  document.getElementById("startdate").value = yymmdd;
}

//날짜비교함수
function comparedate(){
  let start = document.getElementById("startdate").value;
  let end = document.getElementById("enddate").value;
  
  const startdate = new Date(start); //2022-2-5 년 월 일
  const enddate = new Date(end);
  
  let result;
  
  if(issameday(startdate,enddate)){
    result ="입력된 날짜는 같습니다."
  }
  else {
    result ="입력된 날짜는 다름니다."
  }
  
  document.getElementById("demo").innerHTML = result;
}

// === (완전일치(타입까지))
function issameday(startdate,enddate){
  return startdate.getFullYear() === enddate.getFullYear() && // 0 = false 0 != ture
  startdate.getMonth() === enddate.getMonth() &&
  startdate.getDate() === enddate.getDate();
}

function comparedate2(){
  let start = document.getElementById("startdate").value;
  let end = document.getElementById("enddate").value;
  
  const startdate = new Date(start); //2022-2-5 년 월 일
  const enddate = new Date(end);
  
  //날짜 형식 데이터를 시간(1/1000초)로 바꿔 연산처리한다.
  let elapsedTime = enddate.getTime() - startdate.getTime();
  let strdate = elapsedTime / (60*60*24*1000); //날(day) 수로 변경
  strdate = strdate.toFixed(0);

  document.getElementById("demo").innerHTML = strdate;
}
