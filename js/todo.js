const toDOForm = document.getElementById("todo-form");
const toDoInPut = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; 

let toDos = [] ;

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
} // 문자배열로 변경해주는 함수 JSON.stringify(const 된)

function deletetoDo(event) {
  const li = event.target.parentElement;
  console.log(li.id);
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newTodo) {
const li = document.createElement("li");
 li.id = newTodo.id;
 const span = document.createElement("span");
 span.innerText = newTodo.text;
 const Btn = document.createElement("button");
 Btn.innerText = "✔️";
 Btn.addEventListener("click", deletetoDo);
 li.appendChild(span); //<-- span의 위치지정 (Li의안에 있다)
 li.appendChild(Btn); //<-- Btn의 위치지정(Li안에 있다)
 toDoList.appendChild(li);//<-- Li의 위치지정(toDoList안에 있다)
}

function handleToDoSubmit (event) {
    event.preventDefault();
    const newTodo = toDoInPut.value;
    toDoInPut.value = "";
    toDos.push(newTodo); //<-- array로 보내기
    paintToDo(newTodo); //<-- 새로운 리스트 보여주기
    saveToDos();// <-- 새로운 리스트 저장하기(로컬스토리지)
}

toDOForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

/*(item) => console.log("this is the turn of", item)

function sayHello(item) {
    console.log("this is the turn of", item)
}*/
