//회문 체크 함수

const palindrome = (input, output) => {
    let s = input.value;

    let reverse_s = '';

    //방법1
    // for (let i = s.length -1; i>=0; i--)    {
    //     reverse_s = reverse_s + s[i];
    // }

    //방법2 - 배열을 이용하는 방법
    reverse_s = s.split('');
    reverse_s = reverse_s.reverse();
    reverse_s = reverse_s.join('');

    if (reverse_s == s) {
        output.value = "회문입니다.";
    }
    else {
        output.value = "회문이 아닙니다.";
    }


}


//숫자합계

const numSum = (input, output) => {
    let s = input.value;

    s = s.split('');
    var sum = 0;


    var sum = 0;
    // 문자열 순회
    for (let ch of s)   {
        if (isNaN(ch) == false) {
            sum = sum + Number(ch);
        }

    }

    output.value = sum;
}


document.addEventListener("DOMContentLoaded", () => {

    //DOM요소 가져오기

    const input = document.querySelector("#input");
    const output = document.querySelector("#output");

    const bts = document.querySelectorAll(".bt");

    //버튼배열에 클릭이벤트 작성

    for (let bt of bts) {
        bt.addEventListener('click', () => {
            event.preventDefault();
            let gubun = bt.innerHTML;

            if (gubun == "회문확인") palindrome(input, output);
            else numSum(input, output);

        });
    }
});