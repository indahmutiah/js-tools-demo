const isEven = (num) => num % 2 === 0;
const result = isEven(1);
console.log({ result });

const num = document.getElementById("num");
const btn = document.getElementById("check-btn");
const resultEl = document.getElementById("result");

btn.addEventListener("click", () => {
  const numValue = parseInt(num.value);
  resultEl.innerText = isEven(numValue) ? "Yes" : "No";
});
