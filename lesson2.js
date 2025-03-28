let like = JSON.parse(localStorage.getItem("like")) || {
    "beef-noodle": 0,
    "beef-noodleHaNoi": 0,
    "rice": 0,
};
let likeButton = document.querySelectorAll('.like')
function likeReact(foods) {
    let count = document.getElementById(`count-${foods}`)
    if (count) {
        count.textContent = `${like[foods]} luot thich`;
    }
}
likeReact("beef-noodle")
likeReact("beef-noodleHaNoi")
likeReact("rice")
likeButton.forEach(button => {
    button.addEventListener("click", function () {
        let foods = button.getAttribute("data-food")
        if (like[foods] !== undefined) {
            like[foods] += 1;
            likeReact(foods);
            localStorage.setItem("like", JSON.stringify(like));
        }
    });
});