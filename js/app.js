document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.classList.toggle("show");
    });

    // close on link click
    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => menu.classList.remove("show"));
    });
  }
});

// Popular slider scroll
document.addEventListener("DOMContentLoaded", function () {
  const track = document.getElementById("popularTrack");
  const btnPrev = document.getElementById("popularPrev");
  const btnNext = document.getElementById("popularNext");

  if (track && btnPrev && btnNext) {
    const scrollByCard = () => {
      // bir kartın enini + gap-i götürmək üçün
      const firstCard = track.querySelector(".popular-card");
      if (!firstCard) return 300;
      return firstCard.getBoundingClientRect().width + 16;
    };

    btnNext.addEventListener("click", () => {
      track.scrollBy({
        left: scrollByCard(),
        behavior: "smooth",
      });
    });

    btnPrev.addEventListener("click", () => {
      track.scrollBy({
        left: -scrollByCard(),
        behavior: "smooth",
      });
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (typeof Swiper !== "undefined") {
    new Swiper(".news-swiper", {
      spaceBetween: 16,
      grabCursor: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2.5,
        },
        992: {
          slidesPerView: 3,
        },
      },
      speed: 500,
      navigation: {
        nextEl: "#newsNext",
        prevEl: "#newsPrev",
      },
      // containerdən çıxmasın deyə
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".popular-track");

  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse start
  track.addEventListener("mousedown", (e) => {
    isDown = true;
    track.classList.add("is-grabbing");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
  });

  // Mouse stop
  track.addEventListener("mouseleave", () => {
    isDown = false;
    track.classList.remove("is-grabbing");
  });

  track.addEventListener("mouseup", () => {
    isDown = false;
    track.classList.remove("is-grabbing");
  });

  // Mouse move
  track.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.5; // sürəti tənzimləyə bilərsən
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch start
  track.addEventListener(
    "touchstart",
    (e) => {
      isDown = true;
      track.classList.add("is-grabbing");
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    },
    { passive: true }
  );

  // Touch end
  track.addEventListener("touchend", () => {
    isDown = false;
    track.classList.remove("is-grabbing");
  });

  // Touch move
  track.addEventListener(
    "touchmove",
    (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    },
    { passive: true }
  );

  if (typeof Swiper !== "undefined") {
    new Swiper(".cert-swiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: "#certNext",
        prevEl: "#certPrev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.05, // mobile
        },
        768: {
          slidesPerView: 2,
        },
      },
    });
  }
});

function animateStatsNumbers() {
  const numbers = document.querySelectorAll(".stats-number");
  numbers.forEach((num) => {
    const target = +num.getAttribute("data-target");
    const duration = 2000; // ümumi vaxt (ms)
    const step = target / (duration / 16); // təxminən 60fps
    let count = 0;

    const update = () => {
      count += step;
      if (count < target) {
        num.textContent = Math.floor(count);
        requestAnimationFrame(update);
      } else {
        num.textContent = target.toLocaleString();
      }
    };
    update();
  });
}

// Sayılar səhifədə görünəndə işləsin (Intersection Observer ilə)
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateStatsNumbers();
        obs.disconnect(); // yalnız bir dəfə işləsin
      }
    });
  });

  const firstStatsNumber = document.querySelector(".stats-number");
  if (firstStatsNumber) {
    observer.observe(firstStatsNumber);
  }
} else {
  // Köhnə brauzerlər üçün birbaşa animasiya
  animateStatsNumbers();
}

document.addEventListener("DOMContentLoaded", function () {
  // Ancaq ana səhifədə işləsin
  if (
    window.location.pathname === "/" ||
    window.location.pathname.endsWith("index.html")
  ) {
    const heroNav = document.querySelector(".hero-nav");
    if (!heroNav) return;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 120) {
        heroNav.classList.add("active");
      } else {
        heroNav.classList.remove("active");
      }
    });
  }
  else{
    const heroNav = document.querySelector(".hero-nav");
    if (heroNav) {
      heroNav.classList.add("active");
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const mainButton = document.getElementById("main-button");
  if (mainButton) {
    mainButton.addEventListener("click", function () {
      this.classList.toggle("open");
    });
  }
});
// HERO SWIPER
    new Swiper(".hero-swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop:true,
      speed: 800,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".hero-next",
        prevEl: ".hero-prev",
      },
    });
