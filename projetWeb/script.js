document.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            var inputs = form.querySelectorAll("input, textarea");
            var ok = true;
            inputs.forEach(function(i) {
                if (i.value.trim() === "") ok = false;
            });
            if (ok) alert("Message envoyé !");
            else alert("Veuillez remplir tous les champs.");
        });
    }

    var cards = document.querySelectorAll(".card");
    cards.forEach(function(card, index) {
        setTimeout(function() {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 150);
    });

    var topBtn = document.createElement("button");
    topBtn.textContent = "↑";
    topBtn.style.position = "fixed";
    topBtn.style.bottom = "20px";
    topBtn.style.right = "20px";
    topBtn.style.padding = "10px 15px";
    topBtn.style.border = "none";
    topBtn.style.background = "#003366";
    topBtn.style.color = "white";
    topBtn.style.cursor = "pointer";
    topBtn.style.display = "none";
    document.body.appendChild(topBtn);

    window.addEventListener("scroll", function() {
        topBtn.style.display = window.scrollY > 200 ? "block" : "none";
    });

    topBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    var links = document.querySelectorAll("nav a");
    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.style.textDecoration = "underline";
        }
    });

    var profs = document.querySelectorAll(".prof");
    profs.forEach(function(p) {
        var timer;
        p.addEventListener("mouseenter", function() {
            var mailSpan = p.querySelector(".mail");
            timer = setTimeout(function() {
                mailSpan.textContent = p.dataset.mail;
                mailSpan.style.opacity = "1";
            }, 600);
        });
        p.addEventListener("mouseleave", function() {
            var mailSpan = p.querySelector(".mail");
            clearTimeout(timer);
            mailSpan.style.opacity = "0";
            setTimeout(function() {
                mailSpan.textContent = "";
            }, 300);
        });
    });

    var mapButtons = document.querySelectorAll(".btn-map");
    mapButtons.forEach(function(btn) {
        btn.addEventListener("click", function() {
            window.open(btn.dataset.url, "_blank");
        });
    });

    var hero = document.querySelector(".hero");
    var images = [
        "images/campus.jpg",
        "images/campus2.jpg",
        "images/campus3.jpg",
        "images/campus4.jpg"
    ];
    var indexImg = 0;

    setInterval(function() {
        indexImg = (indexImg + 1) % images.length;
        hero.style.backgroundImage = "url('" + images[indexImg] + "')";
    }, 5000);

});
