const numbers = document.querySelectorAll(".number");
const Response = document.querySelector(".Response");
const firstNumber = document.querySelector(".First-number");
const secondNumber = document.querySelector(".Second-number");
const signs = document.querySelectorAll(".sign");
const AC = document.getElementById("AC");

function calcular(operacion, firstNumber, secondNumber) {
  if (operacion == "suma") {
    return parseInt(firstNumber) + parseInt(secondNumber);
  } else if (operacion == "resta") {
    return parseInt(secondNumber) - parseInt(firstNumber);
  } else if (operacion == "multiplicacion") {
    return parseInt(firstNumber) * parseInt(secondNumber);
  } else if (operacion == "division") {
    return parseInt(secondNumber) / parseInt(firstNumber);
  } else if (operacion == "porciento") {
    let porciento = parseInt(firstNumber) / 100;
    return porciento * parseInt(secondNumber);
  }
}

numbers.forEach(function (number) {
  number.addEventListener("click", function asignar() {
    firstNumber.innerHTML += number.innerHTML;
  });
});

signs.forEach(function (sign) {
  switch (sign.innerHTML) {
    case "/":
      sign.addEventListener("click", function () {
        if (firstNumber.innerHTML.length > 0) {
          Response.classList.toggle("division");
          sign.classList.toggle("white");
          secondNumber.innerHTML = firstNumber.innerHTML;
          firstNumber.innerHTML = "";
        }
      });
      break;

    case "x":
      sign.addEventListener("click", function () {
        if (firstNumber.innerHTML.length > 0) {
          Response.classList.toggle("multiplicacion");
          sign.classList.toggle("white");
          secondNumber.innerHTML = firstNumber.innerHTML;
          firstNumber.innerHTML = "";
        }
      });
      break;

    case "-":
      sign.addEventListener("click", function () {
        if (firstNumber.innerHTML.length > 0) {
          Response.classList.toggle("resta");
          sign.classList.toggle("white");
          secondNumber.innerHTML = firstNumber.innerHTML;
          firstNumber.innerHTML = "";
        } else {
          firstNumber.innerHTML += "-";
        }
      });
      break;

    case "+":
      sign.addEventListener("click", function () {
        if (firstNumber.innerHTML.length > 0) {
          Response.classList.toggle("suma");
          sign.classList.toggle("white");
          secondNumber.innerHTML = firstNumber.innerHTML;
          firstNumber.innerHTML = "";
        }
      });
      break;

    case "%":
      sign.addEventListener("click", function () {
        if (firstNumber.innerHTML.length > 0) {
          Response.classList.toggle("porciento");
          sign.classList.toggle("white");
          secondNumber.innerHTML = firstNumber.innerHTML;
          firstNumber.innerHTML = "";
        }
      });
      break;

    case "=":
      sign.addEventListener("click", function () {
        if (Response.classList.contains("suma")) {
          firstNumber.innerHTML = calcular("suma", firstNumber.innerHTML, secondNumber.innerHTML);
          Response.classList.remove("suma");
          document.querySelector("#suma").classList.remove("white");
        } else if (Response.classList.contains("resta")) {
          firstNumber.innerHTML = calcular("resta", firstNumber.innerHTML, secondNumber.innerHTML);
          Response.classList.remove("resta");
          document.querySelector("#resta").classList.remove("white");
        } else if (Response.classList.contains("multiplicacion")) {
          firstNumber.innerHTML = calcular("multiplicacion", firstNumber.innerHTML, secondNumber.innerHTML);
          Response.classList.remove("multiplicacion");
          document.querySelector("#multiplicacion").classList.remove("white");
        } else if (Response.classList.contains("division")) {
          firstNumber.innerHTML = calcular("division", firstNumber.innerHTML, secondNumber.innerHTML);
          Response.classList.remove("division");
          document.querySelector("#division").classList.remove("white");
        } else if (Response.classList.contains("porciento")) {
          firstNumber.innerHTML = calcular("porciento", firstNumber.innerHTML, secondNumber.innerHTML);
          Response.classList.remove("porciento");
          document.querySelector("#porciento").classList.remove("white");
        }
      });
      break;
  }
});

AC.addEventListener("click", function reseteo() {
  firstNumber.innerHTML = "";
  secondNumber.innerHTML = "";
  if (Response.classList.contains("suma")) {
    Response.classList.remove("suma");
    document.querySelector("#suma").classList.remove("white");
  } else if (Response.classList.contains("resta")) {
    Response.classList.remove("resta");
    document.querySelector("#resta").classList.remove("white");
  } else if (Response.classList.contains("multiplicacion")) {
    Response.classList.remove("multiplicacion");
    document.querySelector("#multiplicacion").classList.remove("white");
  } else if (Response.classList.contains("division")) {
    Response.classList.remove("division");
    document.querySelector("#division").classList.remove("white");
  } else if (Response.classList.contains("porciento")) {
    Response.classList.remove("porciento");
    document.querySelector("#%").classList.remove("white");
  }
});
