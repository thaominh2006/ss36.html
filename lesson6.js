let stars = document.querySelectorAll('.stars')
let selectedRate = document.getElementById("selected-rating")
let commentInput = document.getElementById("comment-input")
let commentList = document.getElementById("comment-list")
let rating = localStorage.getItem("rating") || 0;
let comments = JSON.parse(localStorage.getItem("comments")) || [];
function displayRating() {
    let rate = parseInt(rating);
    stars.forEach((star, index) => {
        if (index < rate) {
            star.classList.add("active")
        } else {
            star.classList.remove("active")
        }
    });
    if (rate > 0) {
        selectedRate.textContent = `Ban da danh gia san pham nay : ${rate} sao`
    } else {
        selectedRate.textContent = "San pham nay chua duoc danh gia"
    }
}
function displayComment() {
    commentList.innerHTML = "";
    comments.forEach(comment => {
        let li = document.createElement("li")
        let starSpan = document.createElement("span")
        starSpan.textContent = "★".repeat(comment.rating)
        let content = document.createElement("b")
        content.textContent = " " + comment.text;
        li.appendChild(starSpan);
        li.appendChild(content)
        commentList.appendChild(li);
    });
}
stars.forEach(star => {
    star.addEventListener("click", function () {
        rating = parseInt(star.getAttribute("data-value"));
        localStorage.setItem("rating", rating)
        displayRating();
    })
})
function submitReview() {
    let commentText = commentInput.value.trim();
    if (commentText) {
        let newComment = {
            rating: rating || 0,
            text: commentText,
        };
        comments.push(newComment);
        localStorage.setItem("comments", JSON.stringify(comments))
        commentInput.value = "";
        displayComment();
    }
}
displayRating();
displayComment();