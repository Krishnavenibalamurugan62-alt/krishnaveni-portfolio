/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

const links = [
  ...document.querySelectorAll(".nav-links a")
];

const sections = [
  ...document.querySelectorAll("main section[id]")
];


/* =========================================
   OPEN / CLOSE MOBILE MENU
========================================= */

menuBtn.addEventListener("click", () => {

  navLinks.classList.toggle("open");

});


/* =========================================
   CLOSE MENU AFTER CLICKING A LINK
========================================= */

links.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("open");

  });

});


/* =========================================
   REVEAL ANIMATION
========================================= */

const revealObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


document
  .querySelectorAll(".reveal")
  .forEach((element) => {

    revealObserver.observe(element);

  });


/* =========================================
   ACTIVE NAVIGATION ON SCROLL
========================================= */

const sectionObserver =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          const id =
            entry.target.id;

          links.forEach((link) => {

            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );

          });

        }

      });

    },
    {
      rootMargin:
        "-35% 0px -55% 0px",

      threshold: 0
    }
  );


sections.forEach((section) => {

  sectionObserver.observe(section);

});


/* =========================================
   CURRENT YEAR
========================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}