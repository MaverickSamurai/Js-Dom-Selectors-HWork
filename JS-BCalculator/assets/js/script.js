let number1 = document.querySelector("#calc .number .number-1");
let number2 = document.querySelector("#calc .number .number-2");
let result = document.querySelector("#calc .my-result ");




let add = document.querySelector("#calc .operators .add");
let subtract = document.querySelector("#calc .operators .subtract");
let multiply = document.querySelector("#calc .operators .multiply");
let divide = document.querySelector(" #calc .operators .divide");



function onlyNumbers(str) {
  return /^-?\d+(?:[.,]\d*?)?$/.test(str)
};



add.addEventListener("click", function () {
  let demoResult = parseFloat(number1.value) + parseFloat(number2.value);
  if (onlyNumbers(demoResult)) {
    result.innerHTML = demoResult;
  }
  else {
    alert("Add correct number")
  }
})

subtract.addEventListener("click", function () {
  let demoResult = parseFloat(number1.value) - parseFloat(number2.value);
  if (onlyNumbers(demoResult)) {
    result.innerHTML = demoResult;
  }
  else {
    alert("Add correct number")
  }
})

multiply.addEventListener("click", function () {
  let demoResult = parseFloat(number1.value) * parseFloat(number2.value);
  if (onlyNumbers(demoResult)) {
    result.innerHTML = demoResult;
  }
  else {
    alert("Add correct number")
  }
})

divide.addEventListener("click", function () {
  if (number2.value != 0) {
    let demoResult = parseFloat(number1.value) / parseFloat(number2.value);
    if (onlyNumbers(demoResult)) {
      result.innerHTML = demoResult;
    }
    else {
      alert("Add correct number")
    }
  }
  else {
    alert("Enter a mode other than 0")
  }
})

