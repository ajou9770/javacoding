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
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
}

function paintToDo(newTodo) {
const Li = document.createElement("li");
 const span = document.createElement("span");
 const Btn = document.createElement("button");
 span.innerText = newTodo;
 Btn.innerText = "✔️";
 Btn.addEventListener("click", deletetoDo);
 Li.appendChild(span); //<-- span의 위치지정 (Li의안에 있다)
 Li.appendChild(Btn); //<-- Btn의 위치지정(Li안에 있다)
 toDoList.appendChild(Li);//<-- Li의 위치지정(toDoList안에 있다)
}
// 1.요소를 새로 생성하고(document createElemnet), 
// 2.요소안에 Text를 지정(요소.innerText)하고, 
// 3.위치를 지정해준다. 상위요소.appendChild(const 된 요소)
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
