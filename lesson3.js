let saveColor = localStorage.getItem("backgroundColor") || "white";
document.body.style.backgroundColor = saveColor;

function changeColor(color){
    document.body.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
}