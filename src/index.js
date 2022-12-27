import { legacy_createStore } from "redux";

const cntText = document.getElementById("cnt");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const tmpBtn = document.getElementById("asd");

const countModifier = (cnt = 0) => {
  return cnt;
};

const countStore = legacy_createStore(countModifier);

console.log(countStore.getState());
