const hamburger = document.querySelector(".hamburger"),
  header = document.querySelector(".header"),
  navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
  const isHamburgerOpen = hamburger.classList.contains("hamburger-active");

  if (isHamburgerOpen) {
    navList.classList.remove("nav-list-active");
    header.classList.remove("header-active");

    setTimeout(() => {
      hamburger.classList.remove("hamburger-active");
    }, 600);
  } else {
    header.classList.add("header-active");
    navList.classList.add("nav-list-active");
    hamburger.classList.add("hamburger-active");
  }
});
