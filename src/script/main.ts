const adviceNum = document.querySelector<HTMLSpanElement>("#advice-num")!;
const adviceText =
  document.querySelector<HTMLParagraphElement>("#advice-text")!;
const adviceBtn = document.querySelector<HTMLButtonElement>("#advice-btn")!;

const getNewAdvice = (): void => {
  fetch("https://api.adviceslip.com/advice")
    .then((res: Response) => res.json())
    .then((advice: { slip: { id: number; advice: string } }) => {
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
