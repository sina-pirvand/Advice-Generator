const adviceNum = document.querySelector("#advice-num");
const adviceText = document.querySelector("#advice-text");
const adviceBtn = document.querySelector("#advice-btn");

const getNewAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((advice) => {
      adviceNum.textContent = `ADVICE ${advice.slip.id}`;
      adviceText.textContent = `${advice.slip.advice}`;
    })
    .catch(() => {
      adviceText.innerHTML = `Couldn't get you an advice :( <br>
        Try again`;
    });
};

document.addEventListener("DOMContentLoaded", getNewAdvice);
adviceBtn.addEventListener("click", getNewAdvice);
