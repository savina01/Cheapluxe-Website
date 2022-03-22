
function buttonSendOrder() {
    var name = document.getElementById('name').value
    if (name != null)
        window.alert(name + ', Thank you for the order!')
}

document.getElementById("buttonSendReview").addEventListener("click", buttonSentReview)

function buttonSentReview() {
    var newReview = document.getElementById("addReview").value
    document.getElementById("customerReviews").innerHTML += newReview

    var html =
        "<p class='users'>" +
        "<strong>" + newReview +
        "</strong><br>"
        "<strong>Sara</strong><br>" +
        "This is probably one of my favorite dresssed" + "<br> I have ever bought from this site. Holy moly it’s gorgeous!" +
        "<hr>" +
        "<br>" +
        "<strong>Stela</strong>" +
        "<br>" +
        "This dress is beautiful - it is so unique and sexy." + "<br> It is so flattering and I am able to show off my side<br> tattoo.</p>"

}
