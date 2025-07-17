function showSurprise() {
  const surprise = document.getElementById("surprise");
  surprise.classList.remove("hidden");

  // Optional: Scroll into view
  surprise.scrollIntoView({ behavior: "smooth" });

  // Create 30 floating hearts
  for (let i = 0; i < 30; i++) {
    createHeart();
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 2 + 3}s`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}
  const expandableImages = document.querySelectorAll('.expandable');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('close-btn');

  expandableImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.classList.remove('hidden');
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.classList.add('hidden');
    lightboxImg.src = "";
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.add('hidden');
      lightboxImg.src = "";
    }
  });


