const API_URL = "https://fair-rose-bear-hose.cyclic.app";

// toggle class active
const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
    navbarNav.classList.remove("active");
});

const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper i");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;

let isDragging = false,
  startX,
  startScrollLeft;

let cardPerview = Math.round(carousel.offsetWidth / firstCardWidth);

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);

async function fetchResiByNoResi() {
  const resiId = document.getElementById("resicheck").value;
  try {
    const response = await fetch(`${API_URL}/resi/${resiId}`);
    const Resi = await response.json();
    const resiDetails = document.getElementById("resi-details");
    resiDetails.innerHTML = `Nomor Resi: ${Resi.resi}<br> Pengirim: ${Resi.namapengirim} <br> Penerima: ${Resi.namapenerima}<br> Status: ${Resi.status}`;
  } catch (error) {
    console.error("Error fetching resi:", error);
  }
}
// fetchResi();

// pop up
document.addEventListener("click", function () {
  document.querySelector("#popup").style.display = "block";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector("#popup").style.display = "none";
});
