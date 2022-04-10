const navs = document.querySelectorAll(".nav li");

const one = document.getElementById("one").offsetTop;
const two = document.getElementById("two").offsetTop;
const three = document.getElementById("three").offsetTop;
const four = document.getElementById("four").offsetTop;

function handleNav(e) {
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
