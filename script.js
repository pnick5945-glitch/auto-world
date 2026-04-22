const cars = [
{id:1,name:"Tesla Model S",price:"₹80L",img:"https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",prebook:true},
{id:2,name:"BMW M4",price:"₹1.2Cr",img:"https://images.unsplash.com/photo-1660310477229-d03d8565f15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",prebook:false},
{id:3,name:"Audi R8",price:"₹2Cr",img:"https://images.unsplash.com/photo-1627612087981-ca1d6dec6eaa?q=80&w=1043&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",prebook:true},
{id:4,name:"Ford Mustang",price:"₹90L",img:"https://images.unsplash.com/photo-1494905998402-395d579af36f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",prebook:false},
{id:5,name:"Lamborghini Huracan",price:"₹4Cr",img:"https://images.unsplash.com/photo-1657217674164-9cbf85acfc6d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",prebook:true},
{id:6,name:"Porsche 911",price:"₹2.5Cr",img:"https://images.unsplash.com/photo-1596813366843-4a0f41a9538e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",prebook:true},
{id:7,name:"Tyota land crusier",price:"₹2.18Cr",img:"https://images.unsplash.com/photo-1650530579355-7ad9d4766043?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",prebook:true}
];

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];

function renderCars(){
  const grid = document.getElementById("carGrid");
  cars.forEach(car=>{
    grid.innerHTML += `
    <div class="card">
      <img src="${car.img}">
      <h3>${car.name}</h3>
      <h4>${car.price}</h4>
      ${car.prebook ? `<button class="prebook" onclick="preBook(${car.id})">Pre-Book</button>` : `<button disabled>Not Available</button>`}
    </div>`;
  });
}

function preBook(id){
  const car = cars.find(c=>c.id===id);
  bookings.push(car);
  localStorage.setItem("bookings",JSON.stringify(bookings));
  alert("Pre-booked successfully!");
}

function goToBookings(){
  window.location.href = "booking.html";
}

renderCars();