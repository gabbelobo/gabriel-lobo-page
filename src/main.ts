import "./style.css";

// Active navigation state
const sections = document.querySelectorAll<HTMLElement>(".section");
const navLinks = document.querySelectorAll<HTMLAnchorElement>(".top-nav__link");

const navObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        for (const link of navLinks) {
          link.classList.toggle(
            "top-nav__link--active",
            link.getAttribute("href") === `#${id}`
          );
        }
      }
    }
  },
  { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
);

for (const section of sections) {
  navObserver.observe(section);
}

// Scroll-reveal animations
const revealElements = document.querySelectorAll<HTMLElement>(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal--visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.1 }
);

for (const el of revealElements) {
  revealObserver.observe(el);
}
