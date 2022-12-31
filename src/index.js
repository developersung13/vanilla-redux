import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const addToDo = (text) => {
  return { type: ADD_TODO, text };
};

const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

const toDoHandler = (toDos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [{ text: action.text }, ...toDos];
    case DELETE_TODO:
      return [];
    default:
      return toDos;
  }
};

const store = legacy_createStore(toDoHandler);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
  store.dispatch(addToDo(text));
};

const dispatchDeleteToDo = (e) => {
  const id = e.target.parentNode.id;
  store.dispatch(deleteToDo(id));
};

const paintToDo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.map((toDo, idx) => {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    li.innerText = toDo.text;
    li.id = idx;
    delBtn.innerText = "DELETE";
    delBtn.style.marginLeft = "0.5rem";
    delBtn.addEventListener("click", dispatchDeleteToDo);
    li.append(delBtn);
    ul.appendChild(li);
  });
};

store.subscribe(paintToDo);

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddToDo(toDo);
};

form.addEventListener("submit", onSubmit);
