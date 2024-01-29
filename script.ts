export {}; // cannot redeclare block-scoped variables

const first = document.getElementById("firstMeter") as HTMLInputElement;
const second = document.getElementById("secondMeter") as HTMLInputElement;
const result = document.getElementById("result") as HTMLElement;

/* Trigger the typing-function */
first.addEventListener("input", sum);
second.addEventListener("input", sum);

function sum(): void {
  const firstMeter: number = parseFloat(first.value) || 0;
  const secondMeter: number = parseFloat(second.value) || 0;
  /* See what has been typed inside the console log */
  console.log(firstMeter + " x " + secondMeter);

  /* Display the result(s) that has been typed in */
  const squareMeters = firstMeter * secondMeter;
  result.innerHTML = squareMeters.toFixed(2) + " m².";
  result.style.display = "block";
  
  /* Control the result outcome while typing */
  console.log(squareMeters.toFixed(2) + " m²");
}
