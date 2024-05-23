const loginFrom = document.getElementById("loginFrom");
if (loginFrom.checkValidity()) {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
} else {
  console.log("Form not valid!");
}
loginFrom.classList.add("was-validated");