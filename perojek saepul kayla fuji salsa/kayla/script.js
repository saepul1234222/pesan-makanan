<script>
    // Tombol Scroll ke Atas
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () 
        if (window.scrollY  300) 
            scrollTopBtn.style.display = "block";
         else 
            scrollTopBtn.style.display = "none";
        
    );

    scrollTopBtn.addEventListener("click", ()  {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    });

    // Efek muncul saat scroll
    const cards = document.querySelectorAll(".card");

    const observer = new IntersectionObserver((entries)  {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        })
    }, 
        threshold: 0.2
    )

    cards.forEach(card 
        observer.observe(card);
    )

    // Salam otomatis berdasarkan waktu
    window.addEventListener("load", () 
        const hour = new Date().getHours();
        let greeting = "";

        if (hour 12) 
            greeting = "Selamat Pagi!";
         else if (hour  18) 
            greeting = "Selamat Siang!";
        else 
            greeting = "Selamat Malam!";
        

        alert(greeting + " Selamat datang di Portofolio Kayla Fuji Citra Lestari");
    )

    // Animasi klik pada skill
    const skills = document.querySelectorAll(".skill-badge");

    skills.forEach(skill  {
        skill.addEventListener("click", () => {
            skill.style.transform = "scale(1.2)";
            setTimeout(() => {
                skill.style.transform = "scale(1)";
            }, 300);
        })
    })
</script>