const button = document.querySelector("#cheerButton");
const message = document.querySelector("#message");
const mascot = document.querySelector(".mascot");

const cheers = [
  "You are doing better than you think! ✨",
  "Small steps still move you forward. 🌱",
  "Look at you, building for the web! 🎉",
];

let cheerIndex = 0;

button.addEventListener("click", () => {
  message.textContent = cheers[cheerIndex];
  cheerIndex = (cheerIndex + 1) % cheers.length;
  mascot.classList.remove("bounce");
  void mascot.offsetWidth;
  mascot.classList.add("bounce");
});
