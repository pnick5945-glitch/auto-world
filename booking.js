let data = JSON.parse(localStorage.getItem("bookings")) || [];

function render(){
  let container = document.getElementById("bookingList");
  data.forEach(car=>{
    container.innerHTML += `<p>${car.name} - ${car.price}</p>`;
  });
}

function proceed(){
  window.location.href = "details.html";
}

render();