function displayResult() {
  const dropdown = document.getElementById("dropdown");
  const result = document.getElementById("result");
  const selectedOption = dropdown.options[dropdown.selectedIndex].text;
  result.innerText = `Anda memilih: ${selectedOption}`;
}

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});
