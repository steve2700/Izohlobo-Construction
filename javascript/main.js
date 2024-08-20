// sticky Navigation
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  
// Ham Menu
const hamMenu = document.querySelector(".menu");
const offMenu = document.querySelector(".offScreenMenu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offMenu.classList.toggle("active");
});

// Pre-Loader
window.addEventListener("load", () => {
  const loader = document.querySelector(".preloader");

  loader.classList.add("preloader_hidden");

  loader.addEventListener("transitionend", () => {
      document.body.removeChild("loader");
  })
});

// Hamburger Menu Dropdown
function toggleDropdown() {
    var dropdownContent = document.querySelector('.menu_down');
    dropdownContent.classList.toggle('show');
}


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.menu_down');
        dropdowns.forEach(function(dropdown) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}

// Hero Section
const heroItems = document.querySelectorAll('.hero-item');
    const heroControls = document.querySelectorAll('.hero-controls button');
    let currentIndex = 0;

    function showHeroItem(index) {
      heroItems.forEach((item, i) => {
        item.classList.toggle('active', i === index);
      });

      heroControls.forEach((button, i) => {
        button.classList.toggle('active', i === index);
      });
    }

    function autoRotateHero() {
      currentIndex = (currentIndex + 1) % heroItems.length;
      showHeroItem(currentIndex);
    }

    heroControls.forEach((button, index) => {
      button.addEventListener('click', () => {
        currentIndex = index;
        showHeroItem(currentIndex);
      });
    });

    setInterval(autoRotateHero, 8000);

// Counter
function animateCounter(id, start, end, duration) {
  let obj = document.getElementById(id);
  let range = end - start;
  let stepTime = Math.abs(Math.floor(duration / range));
  let startTime = new Date().getTime();
  let endTime = startTime + duration;
  let timer;

  function run() {
      let now = new Date().getTime();
      let remaining = Math.max((endTime - now) / duration, 0);
      let value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }

  timer = setInterval(run, stepTime);
  run();
}

// Initialize Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          // Start counters when the section is in view
          animateCounter('counter_clients', 0, 120, 2000);
          animateCounter('counter_deliveries', 0, 200, 2000);
          animateCounter('counter_winning_awards', 0, 20, 2000);
          animateCounter('counter_certifications', 0, 12, 2000);
          // Unobserve the section after animation starts
          observer.unobserve(entry.target);
      }
  });
}, {
  threshold: 0.5 // Adjust threshold as needed
});

// Observe the counter section
document.addEventListener('DOMContentLoaded', function() {
  const counterSection = document.getElementById('counter');
  observer.observe(counterSection);
});