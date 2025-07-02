let username = "";
let heartClicks = 0;

const sweetWords = [
  "Semoga harimu secerah senyummu 😊",
  "Kamu spesial! Terus semangat ya 💪",
  "Hari ini harimu, nikmati tiap momennya ✨",
  "Semoga makin sukses dan bahagia!",
  "Kamu bintang yang selalu bersinar 🌟",
  "Selamat ulang tahun yaa...",
  "Terus jadi pribadi yang menginspirasi 🤗",
  "Semoga tahun ini penuh berkah dan cinta",
  "Kesehatan, kebahagiaan, dan rezeki melimpah!",
  "Kamu sudah hebat! Yuk buka hadiah 🎁"
];

const giftMessages = [
  "Tetap jadi dirimu yang luar biasa!",
  "Dunia lebih indah karena ada kamu 💖",
  "Semua impianmu akan terwujud!",
  "Kamu pantas mendapatkan yang terbaik!",
  "Terima kasih sudah menjadi kamu 😊",
  "Semoga tahun ini penuh petualangan seru!",
  "Jangan pernah berhenti bermimpi!",
  "Kebahagiaan akan selalu menyertaimu ✨",
  "Kamu membuat dunia lebih berwarna!",
  "Selamat menikmati tahun baru dalam hidupmu! 🎉"
];

const bgMusic = document.getElementById('bgMusic');
const celebrationSound = document.getElementById('celebrationSound');
const musicControl = document.getElementById('musicControl');

musicControl.addEventListener('click', function () {
  if (bgMusic.paused) {
    bgMusic.play();
    musicControl.textContent = "🔊";
  } else {
    bgMusic.pause();
    musicControl.textContent = "🔇";
  }
});

function startBirthday() {
  const input = document.getElementById('namaInput').value.trim();
  if (input !== "") {
    username = input;
    document.getElementById('namaDisplay').innerText = username;
    nextPage(2);
    createFloatingHearts(10);
    bgMusic.play();
  } else {
    const inputField = document.getElementById('namaInput');
    inputField.style.animation = 'shake 0.5s';
    inputField.placeholder = "Isi nama dulu donggg... 🙏";
    setTimeout(() => {
      inputField.style.animation = '';
    }, 500);
  }
}

function nextPage(n) {
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.toggle('active', index === n - 1);
  });

  for (let i = 1; i <= 4; i++) {
    document.getElementById('page' + i).classList.add('hidden');
  }

  const currentPage = document.getElementById('page' + n);
  currentPage.classList.remove('hidden');
  currentPage.style.animation = 'fadeIn 0.5s ease';

  if (n === 2) {
    createFloatingHearts(15);
  } else if (n === 4) {
    document.getElementById('giftMsg').classList.add('hidden');
  }
}

function clickHeart() {
  heartClicks++;

  const heart = document.getElementById('heart');
  heart.style.transform = `scale(${1 + heartClicks * 0.05})`;

  if (heartClicks === 1) {
    heart.innerText = "❤️";
  }

  const progress = Math.min(heartClicks * 10, 100);
  document.getElementById('progressBar').style.width = `${progress}%`;

  const msgIndex = Math.min(heartClicks - 1, sweetWords.length - 1);
  document.getElementById('clickMsg').innerText = sweetWords[msgIndex];

  createFloatingHearts(3);

  if (heartClicks >= 10) {
    document.getElementById('nextAfterGame').classList.remove('hidden');
  }

  if (heartClicks === 5) {
    heart.innerText = "💥";
    setTimeout(() => {
      heart.innerText = "❤️";
    }, 300);
  }
}

function openGift() {
  const gift = document.getElementById('gift');
  const giftMsg = document.getElementById('giftMsg');

  gift.innerText = "🎀";
  gift.style.transform = "scale(1.2) rotate(10deg)";

  setTimeout(() => {
    gift.innerText = "🎉";
    gift.style.transform = "scale(1.5)";
    giftMsg.classList.remove('hidden');

    const randomMsg = giftMessages[Math.floor(Math.random() * giftMessages.length)];
    giftMsg.innerHTML = `Untuk <strong>${username}</strong>, ${randomMsg}`;

    celebrationSound.play();
    createConfetti();
    createFloatingHearts(20);
  }, 500);
}

function createFloatingHearts(count) {
  for (let i = 0; i < count; i++) {
    const heart = document.createElement('div');
    heart.className = 'floating-hearts';
    heart.innerHTML = ['❤️', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍'][Math.floor(Math.random() * 9)];
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDuration = `${2 + Math.random() * 3}s`;
    heart.style.animationDelay = `${Math.random() * 0.5}s`;
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }
}

function createConfetti() {
  const celebration = document.getElementById('celebration');
  celebration.style.display = 'block';
  celebration.innerHTML = '';

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.width = `${5 + Math.random() * 10}px`;
    confetti.style.height = `${5 + Math.random() * 10}px`;
    confetti.style.borderRadius = `${Math.random() * 50}%`;
    confetti.style.animation = `fadeIn 0.5s ease ${Math.random() * 0.5}s forwards`;
    celebration.appendChild(confetti);

    setTimeout(() => {
      confetti.style.transform = `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`;
      confetti.style.transition = `transform ${2 + Math.random() * 3}s ease-out`;
      confetti.style.opacity = '0';
    }, 100);
  }

  setTimeout(() => {
    celebration.style.display = 'none';
  }, 3000);
}

window.onload = function () {
  for (let i = 0; i < 8; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.top = `${Math.random() * 100}%`;
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
    balloon.style.width = `${40 + Math.random() * 40}px`;
    balloon.style.height = `${60 + Math.random() * 40}px`;
    balloon.style.animationDelay = `${Math.random() * 3}s`;
    document.body.appendChild(balloon);
  }
};