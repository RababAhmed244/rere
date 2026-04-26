const numButtons = document.querySelectorAll('.num-card');
const numVideo = document.getElementById('numVideo');

numButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const video = btn.getAttribute('data-video');  
    numVideo.src = 'video/'+video+".mp4";
    numvideo.style.display="block"; 
    numVideo.play();  
  });
});


const gameArea = document.getElementById('gameArea');
const newQuestionBtn = document.getElementById('newQuestionBtn');
const gameMsg = document.getElementById('gameMsg');

const items = [
  { name: "Apples", icon: "🍎" },
  { name: "Stars", icon: "⭐" },
  { name: "Cars", icon: "🚗" },
  { name: "Balls", icon: "⚽" }
];
function newQuestion() {
  gameMsg.textContent = '';
  gameArea.innerHTML = '';

  
  const count = Math.floor(Math.random() * 5) + 1;
  
  
  const item = items[Math.floor(Math.random() * items.length)];

  const question = document.createElement('p');
  question.textContent = `How many ${item.name} do you see?`;
  gameArea.appendChild(question);

  gameArea.appendChild(question);
  const iconsRow = document.createElement("div");
  iconsRow.style.fontSize = "40px";
  iconsRow.style.margin = "10px 0";
  iconsRow.textContent = item.icon.repeat(count);
  gameArea.appendChild(iconsRow);

  
  const correct = count;
  const wrong1 = correct + 1;
  const wrong2 = correct > 1 ? correct - 1 : correct + 2;

  const options = [correct, wrong1, wrong2].sort(() => Math.random() - 0.5);

  options.forEach(num => {
    const btn = document.createElement('button');
    btn.textContent = num;
    btn.style.margin="5px";
    btn.style.padding="8px 14px";
    btn.style.borderRadius="20px";
    btn.addEventListener('click', () => {
      if (num === correct) {
        gameMsg.textContent = 'Great job! 🎉';
        gameMsg.style.color = 'green';
      } else {
        gameMsg.textContent = 'Try again! 😊';
        gameMsg.style.color = 'red';
      }
    });
    gameArea.appendChild(btn);
  });
}
newQuestionBtn.addEventListener("click", newQuestion);
window.addEventListener("load", newQuestion);