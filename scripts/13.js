


// function show() {
//     event.preventDefault();
//     document.getElementById("h2Id").innerHTML = "안녕하세요";
// }


// 화살표 함수로 변환 
const show = () =>  {
    event.preventDefault();
    document.getElementById("h2Id").innerHTML = "안녕하세요";
    let num = Math.floor(Math.random() * 6) + 1
    console.log(num);
    document.getElementById("h2Id").innerHTML = "<img src = '../image/"+num+".png'>";

    //Another Case
    //document.getElementById("h2Id").innerHTML=`<img src="./images/${n}.png">`;
}


// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("h2Id").innerHTML = "시작입니다.";
// });

document.addEventListener("DOMContentLoaded", () => {
    // document.getElementById("h2Id").innerHTML = "시작입니다.";

    // document.querySelector('#h2Id').innerHTML = "아이디선택자: 시작입니다";
    // document.querySelector('.h2Class').innerHTML = "클래스선택자: 시작입니다";
    // document.querySelector("#h2Id").innerHTML = ".\image\1.png"
    
    // const bt = document.createElement('button');
    // document.getElementById('hdiv').append(bt);
    // bt.textContent= "확인";


});