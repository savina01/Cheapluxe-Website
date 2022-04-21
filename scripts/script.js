function buttonSendOrder() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    if (name != null && address != null)
        window.alert(name + ', Thank you for the order!');
}

document.getElementById("buttonSendReview").addEventListener("click", buttonSentReview);

function buttonSentReview() {
    let newReview = document.getElementById("addReview").value;
    let userName = document.getElementById("userName").value;
    let review = "<hr><strong>" + userName + "</strong><br>" + newReview;
    document.getElementById("customerReviews").innerHTML += review;
}