function displayShowRegister() {
    document.getElementById("regester").style.display = "block";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("welcome").style.display = "none";
};
function displayShowLogin() {
    document.getElementById("regester").style.display = "none"
    document.getElementById("loginForm").style.display = "block"
    document.getElementById("welcome").style.display = "none";
};
function displayRegister() {
    let userName = document.getElementById("name").value.trim();
    let password = document.getElementById("pass").value.trim();
    if (userName && password) {
        localStorage.setItem("userName", userName)
        localStorage.setItem("password", password)
        alert("Dang ky tai khoan thanh cong!")
        displayShowLogin();
    } else {
        alert("Vui long dien day du thong tin de dang ky tai khoan!")
    }
}
function displayShowWelcome() {
    let userName = localStorage.getItem("userName");
    if (userName) {
        document.getElementById("regester").style.display = "none"
        document.getElementById("loginForm").style.display = "none"
        document.getElementById("welcome").style.display = "block"
        document.getElementById("welcome-mess").innerText = `🎉 Xin chao, ${userName}!`
    }
}
function displayLogin() {
    let userName = document.getElementById("username").value.trim();
    let password = document.getElementById("userPass").value.trim();
    let checkBox = document.getElementById("rememberMe").checked;

    let saveName = localStorage.getItem("userName")
    let savePass = localStorage.getItem("password")
    if (userName === saveName && password === savePass) {
        if (checkBox) {
            localStorage.setItem("logIn", "true")
        }
        localStorage.setItem("userName", userName);
        displayShowWelcome();
    } else {
        alert("Ten dang nhap hoac mat khau khong dung!")
    }
}
function displayLogout() {
    localStorage.removeItem("logIn");
    displayShowLogin();
}
