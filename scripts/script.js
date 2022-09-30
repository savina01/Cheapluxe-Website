function buttonSendOrder() {
    let name = document.getElementById('name').value;
    let address = document.getElementById('address').value;
    console.log(name);
    console.log(address);
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
function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}
//за довършване
window.onclick = function(event) {
    if(!event.target.matches)
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
    }
}