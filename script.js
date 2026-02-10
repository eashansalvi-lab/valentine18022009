const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const heartsContainer = document.getElementById("hearts");

const noTexts = [
  "Are you sure? 😢",
  "Really? 🥺",
  "Think again 💔",
  "Last chance 😭",
  "One last chance😢",
  "Plssssssss💔",
  "For me plsss😭",
  "You really sure😢",
  "Don't miss the chance💔",
  "I will not give up😭",
  "Do this till infinity😢",
  "I hope you turned to yes😭",
  "Still not yet?💔"
];

let noIndex = 0;
let yesScale = 1;

noBtn.addEventListener("click", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;

  noBtn.innerText = noTexts[noIndex % noTexts.length];
  noIndex++;

  yesScale += 0.2;
  yesBtn.style.transform = `scale(${yesScale})`;
});
yesBtn.addEventListener("click", () => {
  document.getElementById("btnBox").style.display = "none";
  document.getElementById("question").innerText = "Yayyy 💕";
  document.getElementById("letter").classList.remove("hidden");

  setInterval(createHeart, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "0px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}