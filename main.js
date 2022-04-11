const navs = document.querySelectorAll(".nav li");

function handleNav(e) {
  const one = document.getElementById("one").offsetTop;
  const two = document.getElementById("two").offsetTop;
  const three = document.getElementById("three").offsetTop;
  const four = document.getElementById("four").offsetTop;
  navs.forEach((nav) => {
    nav.classList.remove("active");
  });
  e.target.classList.add("active");
  if (e.target.classList[0] === "one") {
    window.scrollTo({ top: one, behavior: "smooth" });
  } else if (e.target.classList[0] === "two") {
    window.scrollTo({ top: two, behavior: "smooth" });
  } else if (e.target.classList[0] === "three") {
    window.scrollTo({ top: three, behavior: "smooth" });
  } else if (e.target.classList[0] === "four") {
    window.scrollTo({ top: four, behavior: "smooth" });
  }
}
navs.forEach((nav) => {
  nav.addEventListener("click", handleNav);
});

const toggle = document.querySelector("header .toggle");

function handleToggle() {
  const sidebar = document.querySelector("#side-bar");
  if (sidebar.classList.value === "none") {
    sidebar.classList.remove("none");
    toggle.classList.add("open");
  } else {
    sidebar.classList.add("none");
    toggle.classList.remove("open");
  }
}
toggle.addEventListener("click", handleToggle);
