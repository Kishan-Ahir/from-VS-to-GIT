let submit = document.getElementById("submit");

submit.addEventListener("click", saveinfo);

function saveinfo(event) {
  event.preventDefault();
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
let email = document.getElementById("email").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

let details = [fname, lname, email, date, time];

let string = JSON.stringify(details);
  localStorage.setItem(fname, string);
}
