// ===============================
// NOTIFIKASI SAAT WEBSITE DIBUKA
// ===============================
window.addEventListener("load", () => {
    alert("Selamat datang di Website Portfolio Saepul 🚀");
});


// ===============================
// SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});


// ===============================
// ANIMASI CARD SAAT SCROLL
// ===============================
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});


// ===============================
// EFEK HOVER SKILL
// ===============================
const skills = document.querySelectorAll(".skill-box");

skills.forEach(skill => {
    skill.addEventListener("mouseover", () => {
        skill.style.transform = "scale(1.1)";
        skill.style.background = "#00bcd4";
        skill.style.color = "white";
    });

    skill.addEventListener("mouseout", () => {
        skill.style.transform = "scale(1)";
        skill.style.background = "";
        skill.style.color = "";
    });
});


// ===============================
// TOMBOL BACK TO TOP
// ===============================
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "10px";
topBtn.style.background = "#00bcd4";
topBtn.style.color = "white";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontSize = "18px";

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});