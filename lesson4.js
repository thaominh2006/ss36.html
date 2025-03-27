let saveWeb = localStorage.getItem("mode") === "dark";
let darkMood = document.getElementsByClassName("dark-mode-toggle")[0];
if (saveWeb) {
    document.body.classList.add("dark-mode")
} else {
    document.body.classList.remove("dark-mode");
}
darkMood.addEventListener("click", function(){
    saveWeb = !saveWeb
    if(saveWeb){
        document.body.classList.add("dark-mode")
        localStorage.setItem("mode", "dark")
    }else{
        document.body.classList.remove("dark-mode")
        localStorage.setItem("mode", "light")
    }
});