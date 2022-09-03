const loginForm = document.querySelector("#login-form");    
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//"" 값으로 하면 자바스크립트가 오류를 안 잡는데, 변수 명으로 값을 미리 정해버리면 오타나면 알 수 있게 되어서.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault(); // <input type="submit">의 디폴트가 새로고침임. 엔터하든 클릭하든 페이지 새로고침인데, 그걸 막는 역할.
    loginForm.classList.add(HIDDEN_CLASSNAME); //css에 hidden이라는 이름의 숨김 역할을 하는 클래스를 생성해놨음. 그 클래스의 이름을 넣어주면 히든이 됨.
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username); // localStorage에 저장해서 새로고침해도 안 사라지게. key값과 value.
    paintGreetings(); // 여기에도 있어야함. 제출 완료하면 Hello username 띄워주는 역할이라. else랑은 다름 else에선 새로고침해도 띄워주는거고.
}
function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY); // localStorage 안에 있는 value를 key값을 이용해서 가져오는거죵
    greeting.innerText = `Hello ${username}`; // greeting이라는 id를 가진 h1 태그가 있음. 그 innerText값을 저렇게 format 형태로.
    greeting.classList.remove(HIDDEN_CLASSNAME); // 이 h1의 클래스는 hidden. 그걸 빼버리면 드러나겠지?
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//localStorage가 비어있냐 안 비어있냐에 따라 결정. 현재 loginForm이랑 greeting 둘 다 class="hidden"이다.

if (savedUsername === null){
    //form이 보이게
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    //show the greeting(h1)
    paintGreetings(); // 페이지를 새로고침하더라도 유지되게끔. 그래서 onLoginSubmit에서도 paintGreetings 있어야해.
}