const container = document.getElementById('container');
const registerBtn = document.getElementById('register');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// document.addEventListener('DOMContentLoaded', function() {
//         var loginBtn = document.getElementById('login_btn');

//         loginBtn.addEventListener('click', function() {
//             // Chuyển hướng sang trang HTML 'index.html' khi nút được click
//             window.location.href = 'index.html';
//         });
// });