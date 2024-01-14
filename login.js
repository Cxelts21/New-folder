const data = localStorage.getItem('users');
let users = [];
if (data) {
  users = JSON.parse(data);
}
document.addEventListener("DOMContentLoaded", function () {
const signupForm = document.getElementById("signup-form");

signupForm?.addEventListener("submit", function (event) {
  event.preventDefault();


  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  if (email == "" && password == "" && confirmPassword == "") {
    alert('Chưa điền đủ thông tin!')
    return;
  }


  if (password !== confirmPassword) {
    console.log(alert("Mật khẩu không khớp"));
    return;
  } else {
    const user = {
      email: email,
      password: password,
    }
    alert('Đăng kí thành công!')
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    location.href = "Báo2.html";
  }
  


  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
});
});


