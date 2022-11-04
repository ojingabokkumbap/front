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


// 표준날짜 출력함수
function fcheck1() {
  let date1 = new Date();
  console.log("date1 : ", date1);
  document.getElementById("demo").innerHTML = date1;
}

//편집날짜 함수
function fcheck2(){
  let strdate = yymmdd;
  demo.innerHTML = strdate;
}

//쉬운날짜 함수
function fcheck3(){
  let str = "";
  str += year +"년 ";
  str += month +"월 ";
  str += date +"일 ";
  str += hour +"시 ";
  str += minute +"분 ";
  str += second + "초 ";

  // 요일 : 0(일),1(월),2(화),3(수),4(목),5(금),6(토)
  
  // str += today.getDay() + "요일"; //요일가져오기 : gerDay()
  let week = ["일","월","화","수","목","금","토"];//요일표시를 위한배열 변수 생성
  str += week[today.getDay()] + "요일";

  let strdate=str;
  demo.innerHTML = strdate;
  }
  //시간출력 함수
  function fcheck4(){
    // let strdate = today.getTime();
    let startDate = today.getTime();
    let lastDate = new Date();
    let elapsedTime  = lastDate.getTime() - today.getTime();
    let strDate = elapsedTime / (60*60*24*1000);
    demo.innerHTML = strDate;
  }

  //해당 월의 마지막 일자  꺼내기 함수
  function fcheck5(){
    
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;
  
    let str = new Date(year,month,0);   // new Date(년,월,일,시,분,초);
    strdate = str.getFullYear() + "-";
    strdate += (str.getMonth() + 1) + "-";
    strdate += str.getDate();
    strdate = "해당월의 마지막 일자는? " + strdate;
    demo.innerHTML = strdate;
  }
  
// 오늘날짜형식에 맞춰서 출력(yyyy-mm-dd)
function fCheck6() {
  let strDate = year + "-" + month + "-" + date;
  let fmtDate = strDate.split("-");
  let yy = fmtDate[0];
  let mm = ('0' + fmtDate[1]).slice(-2);    // 2월 --> 02월 : 02 --> 002
  let dd = ('0' + fmtDate[2]).slice(-2)
  strDate = yy + "-" + mm + "-" + dd;

  demo.innerHTML = strDate;
}

// 선택 년/월의 마지막 일자(yy-mm-dd)
  function fcheck7(){
    let year = document.getElementById("year").value;
    let month = document.getElementById("month").value;

    let str = new Date(year,month,0);
    strdate = 


    demo.innerHTML = strDate;
  }

