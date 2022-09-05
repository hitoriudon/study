const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0"); // padding 해주는 코드.
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // 이게 setInterval에서 1000ms(1초)지나고 호출되니까 함수가.. 바로 우선 먼저 실행시키자는 뜻의 코드
setInterval(getClock, 1000); //realtime method. 파라미터1은 함수, 2는 ms