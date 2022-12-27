const cntText = document.getElementById("cnt");
const incBtn = document.getElementById("inc");
const decBtn = document.getElementById("dec");
const tmpBtn = document.getElementById("asd");

let cnt = 0;

const updateCntText = (operand) => (cntText.innerText = cnt += operand);

const incCntHandler = () => updateCntText(1);

const decCntHandler = () => updateCntText(-1);

incBtn.addEventListener("click", incCntHandler);
decBtn.addEventListener("click", decCntHandler);
