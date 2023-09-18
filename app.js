const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "black",
  "cyan",
  "#f15025",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const ramdomNumber = getRandomNuber();
  console.log(ramdomNumber);

  document.body.style.backgroundColor = colors[ramdomNumber];
  color.textContent = colors[ramdomNumber];
});
function getRandomNuber() {
  return Math.floor(Math.random() * colors.length);
}
