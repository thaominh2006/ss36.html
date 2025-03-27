let hello = localStorage.getItem("saveName") || null;
let text = document.getElementById("container-text");
let input = document.getElementById("input");
let button = document.getElementById("save-btn");
let textName = document.getElementById("text-name");
function showCard(name) {
    textName.innerHTML = `
    <p>👋 Chao ban, ${name}!</p>
    <button onclick="changeName()">Doi ten</button>
   `;
    textName.style.display = "block";
    text.style.display = "none";
}
function changeName() {
    localStorage.removeItem("saveName");
    hello = null;
    textName.style.display = "none";
    text.style.display = "block";
    input.value = "";
}
if (hello) {
    showCard(hello);
}
button.addEventListener("click", function () {
    let helloName = input.value;
    if (helloName) {
        localStorage.setItem("saveName", helloName);
        hello = helloName;
        showCard(hello);
    } else {
        alert("Vui long nhap ten cua ban!")
    }
})