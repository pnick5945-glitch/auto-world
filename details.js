function confirmBooking(){
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  localStorage.setItem("user",JSON.stringify({name,phone,address}));
  window.location.href = "final.html";
}

