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

const API_URL = "https://fair-rose-bear-hose.cyclic.app/orderr";

async function fetchOrders() {
  try {
    const response = await fetch(`${API_URL}/orderr`);
    const data = await response.json();
    const orderList = document.getElementById("orders-list");
    orderList.innerHTML = "";

    data.forEach((order) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${order.title} by ${order.author}`;
      bookList.appendChild(listItem);
    });
  } catch (error) {
    console.error(error);
  }
}

async function addNewOrder() {
  const penerima = document.getElementById("order-penerima").value;
  const pengirim = document.getElementById("order-pengirim").value;
  const alamatPenerima = document.getElementById("order-alamatPenerima").value;
  const alamatPengirim = document.getElementById("order-alamatPengirim").value;
  const telp_Penerima = document.getElementById("order-telp_Penerima").value;
  const telp_Pengirim = document.getElementById("telp_Pengirim").value;
  const berat = document.getElementById("order-berat").value;
  const keterangan = document.getElementById("order-keterangan").value;
  try {
    const response = await fetch(`${API_BASE_URL}/orderr`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, author }),
    });
    const data = await response.json();
  } catch (error) {
    console.error("Error adding order:", error);
  } finally {
    fetchOrders();
  }
}

async function fetchOrderById() {
  const orderId = document.getElementById("order-id").value;
  try {
    const response = await fetch(`${API_URL}/orderr/${orderId}`);
    const order = await response.json();
    const orderDetails = document.getElementById("order-details");
    orderDetails.innerHTML = `Nama Pengirim: ${order.pengirim}<br>Nama Penerima: ${order.penerima}
      <br> Alamat Pengirim: ${order.alamatPengirim} <br> Alamat Penerima: ${order.alamatPenerima} 
      <br> No. Telpon Pengirim: ${order.telp_Pengirim} <br> No. Telpon Penerima: ${order.telp_Penerima}
      <br> Jumlah Berat: ${order.berat} <br> Keterangan: ${order.keterangan}`;
  } catch (error) {
    console.error("Error fetching order:", error);
  }
}

// fetchOrders();
