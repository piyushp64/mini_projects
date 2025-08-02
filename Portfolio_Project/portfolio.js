const typingElement = document.getElementById("typing");
const texts = ["Piyush Priyanshu", "Full Stack Developer", "Tech Explorer"];
let charIndex = 0;
let textIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];
  typingElement.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 1000);
  }
}
typeEffect();

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

const projects = [
  {
    title: "AI News Summarizer",
    desc: "Summarizes news using OpenAI API, React frontend, deployed with Netlify."
  },
  {
    title: "Weather App",
    desc: "Built with vanilla JS + OpenWeather API. Shows current weather with animated icons."
  },
  {
    title: "Portfolio Generator CLI",
    desc: "A CLI tool to create portfolios automatically using Node.js and Handlebars."
  },
  {
    title: "Study Tracker",
    desc: "Track study time using timers and charts. Built with React + Chart.js."
  }
];

const projectList = document.getElementById("project-list");
projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `<h3>${project.title}</h3><p>${project.desc}</p>`;
  projectList.appendChild(card);
});

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-status").textContent = "Thanks for reaching out! ✅";
  this.reset();
});

let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
