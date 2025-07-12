// RSVP-Formular Logik
const attendingSelect = document.getElementById('attending');
const guestsField = document.getElementById('guests-field');

attendingSelect.addEventListener('change', function () {
  if (attendingSelect.value === 'Ja, ich bin dabei') {
    guestsField.style.display = 'block';
  } else {
    guestsField.style.display = 'none';
  }
});


// Countdown
const countdown = document.getElementById('countdown');
const weddingDate = new Date("2025-09-06T14:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;

  if (diff <= 0) {
    countdown.innerHTML = "Es ist so weit!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `${days} Tage, ${hours} Std, ${minutes} Min, ${seconds} Sek`;
}

setInterval(updateCountdown, 1000);
updateCountdown();



// FAQ Akkordeon (sanftes Ausklappen, Pfeil dreht sich)
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    item.classList.toggle('active');
    faqItems.forEach(other => {
      if (other !== item) other.classList.remove('active');
    });
  });
});

const dividers = document.querySelectorAll('.section-divider');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

dividers.forEach(divider => {
  observer.observe(divider);
});

// AOS-ähnliche Animation für Abschnitte
function animateOnScroll() {
  const animatedSections = document.querySelectorAll('.love-story, .rsvp-section, .drive-section, .faq-section, .countdown-section');
  animatedSections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      section.classList.add('aos-animate');
    }
  });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// --- Countdown Fehlerbehebung ---
function showCountdown() {
  const countdown = document.getElementById('countdown');
  if (countdown) countdown.style.display = 'block';
}
window.addEventListener('DOMContentLoaded', showCountdown);

// --- Story-Bild Slideshow ---
const storyImages = [
  'couples-photography-afp-27.jpg',
  // Hier können weitere Bildnamen ergänzt werden, z.B. 'bild2.jpg', 'bild3.jpg'
];
let currentStoryImg = 0;
const storyImgElement = document.querySelector('.story-image img');
if (storyImgElement && storyImages.length > 1) {
  setInterval(() => {
    currentStoryImg = (currentStoryImg + 1) % storyImages.length;
    storyImgElement.src = storyImages[currentStoryImg];
  }, 20000);
}

// Hero Fade-In Animation (falls nicht durch CSS allein)
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.querySelector('.hero-content');
  if (hero) hero.style.opacity = 1;
});


