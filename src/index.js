import { legacy_createStore } from "redux";

const cntText = document.getElementById("cnt");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");

const onChange = () => {
  cntText.innerText = countStore.getState();
};

const incCntHandler = () => {
  countStore.dispatch({ type: "INCREMENT" });
};

const decCntHandler = () => {
  countStore.dispatch({ type: "DECREMENT" });
};

const countModifier = (cnt = 0, action) => {
  console.log(cnt, action);
  switch (action.type) {
    case "INCREMENT":
      return cnt + 1;
      break;
    case "DECREMENT":
      return cnt - 1;
      break;
    default:
      return cnt;
  }
  return cnt;
};

const countStore = legacy_createStore(countModifier);
countStore.subscribe(onChange);

incBtn.addEventListener("click", incCntHandler);
decBtn.addEventListener("click", decCntHandler);
