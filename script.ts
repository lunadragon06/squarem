export {};

const first = document.getElementById("firstMeter") as HTMLInputElement;
const second = document.getElementById("secondMeter") as HTMLInputElement;
const result = document.getElementById("result") as HTMLElement;

first.addEventListener("input", sum);
second.addEventListener("input", sum);

function sum(): void {
  const firstMeter: number = parseFloat(first.value) || 0;
  const secondMeter: number = parseFloat(second.value) || 0;

  const squareMeters = firstMeter * secondMeter;
  result.innerHTML = squareMeters.toFixed(2) + " m².";
  result.style.display = "block";
  
  console.log(squareMeters.toFixed(2) + " m²");
}
