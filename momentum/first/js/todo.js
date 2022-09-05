const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input"); // todo-form 태그 안에 input이 있기 때문에 document로 안 하고 저렇게 해서 찾아도 됨.
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = []; 

function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}
function deleteTodo(event){
    /* console.log(event.target.parentElement.innerText); 어떤 버튼이 눌린지 확인하기 위해서 했던 사전 작업. 
    event(click) 안에 있는 target은 html element를 뜻함. 여기서는 버튼이겠지? parentElement는 target(버튼)의 parent, 즉 li를 찾을 수 있게 한다.*/
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); // toDo는 toDos DB 안에 있는 요소 중 하나라는 의미의 매개변수
    saveToDos()
}
function paintToDo(newTodo) { // parameter === newtodoobj
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span); // li에 span 넣기.
    li.appendChild(button); // li에 button 넣기.
    todoList.appendChild(li);
}
function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value; // 비우기 전에 저장
    todoInput.value = "" // 비우기
    const newTodoObj = {
        text : newTodo,
        id : Date.now()
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // string

if (savedToDos !== null){ //savedToDos가 비어있지 않다면 계속 Todo를 띄워줄 수 있도록.
    const parseToDos = JSON.parse(savedToDos); // string 형태로 반환되는 savedToDos를 array로 바꿔주는 역할.
    toDos = parseToDos; // localStorage가 새로고침되면 계속 빈 상태로 됨. 맨 위에 let toDos 때문에. 그걸 방지하기 위한 코드.
    parseToDos.forEach(paintToDo); // array 안의 각각의 element에 접근할 수 있는 forEach. paintToDo 함수를 실행.
}
