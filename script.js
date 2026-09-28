import { initializeApp } 
from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBl7rCFMr3XHkbMRk6zx3bstDkPLI_u6sI",
  authDomain: "cloud-vehicle-rental.firebaseapp.com",
  projectId: "cloud-vehicle-rental",
  storageBucket: "cloud-vehicle-rental.firebasestorage.app",
  messagingSenderId: "72712815730",
  appId: "1:72712815730:web:13bd471f56a2d03e96aeeb",
  measurementId: "G-VVHKMQ25VF"
};

const app = initializeApp(firebaseConfig);

console.log("Firebase connected successfully!");
};
function welcomeMessage() {
    alert("Welcome to Cloud Vehicle Rental!");
}
document.getElementById("bookingForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let start = new Date(document.getElementById("startDate").value);
    let end = new Date(document.getElementById("endDate").value);

    let price = Number(document.getElementById("price").value);

    let difference = end - start;

    let days = difference / (1000 * 60 * 60 * 24);

    if (days <= 0) {
        document.getElementById("result").innerHTML =
            "Please select valid dates.";
        return;
    }

    let total = days * price;

    document.getElementById("result").innerHTML =
        "Total Rental Amount: ₹" + total;
});