import { legacy_createStore } from "redux";

const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const toDoHandler = (toDos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...toDos, { text: action.text }];
    case DELETE_TODO:
      return [];
    default:
      return toDos;
  }
};

const store = legacy_createStore(toDoHandler);

store.subscribe(() => console.log(store.getState()));

const onSubmit = (e) => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  store.dispatch({ type: ADD_TODO, text: toDo });
};

form.addEventListener("submit", onSubmit);
