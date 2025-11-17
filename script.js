// OPEN MODAL
document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", () => {
    document.getElementById(card.dataset.modal).style.display = "flex";
  });
});

// CLOSE MODAL
document.querySelectorAll(".close").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

// CLICK OUTSIDE TO CLOSE
window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});

// TAB SWITCHING
document.querySelectorAll(".modal-tabs .tab").forEach(tab => {
  tab.addEventListener("click", () => {
    const container = tab.closest(".modal-content");

    container.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    container.querySelectorAll(".tab-content").forEach(tc => tc.classList.remove("active"));

    tab.classList.add("active");
    container.querySelector(`#${tab.dataset.target}`).classList.add("active");
  });
});

/* ===============================
   SCROLL REVEAL FOR TRAITS
=============================== */

const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.88;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('active');
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
// Reveal On Scroll
const reveals = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.2 });

reveals.forEach(section => {
    revealObserver.observe(section);
});
// ===========================
// GOOGLE FORM SUCCESS DETECTOR (Fixed)
// ===========================

setTimeout(() => {
    const iframe = document.getElementById("hidden_iframe");
    if (!iframe) return;

    iframe.addEventListener("load", function () {
        // Do not trigger if the page is loaded the first time
        if (!document.getElementById("contactForm").submitted) return;

        let popup = document.getElementById("successPopup");

        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 3000);

        // Reset form
        document.getElementById("contactForm").reset();
        document.getElementById("contactForm").submitted = false;
    });
}, 500);


// Mark form as submitted BEFORE sending
document.getElementById("contactForm").addEventListener("submit", function () {
    this.submitted = true;
});

