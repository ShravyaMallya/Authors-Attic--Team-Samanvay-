$bookButton = document.querySelector("#button");
$anywhere = document.querySelector("#anywhere");
$overlay = document.getElementById("overlay");

$myName = document.querySelector("#my-name");
$myCost = document.querySelector("#my-cost");
$myTotal = document.querySelector("#my-total");
$myGuests = document.querySelector("#my-guests");
$myDays = document.querySelector("#my-days");

$bookButton.addEventListener('click', () => {
    document.getElementById("overlay").style.display = "block";
});

$overlay.addEventListener('click', () => {
    $overlay.style.display = "none";
});

var dataForOverlay = JSON.parse(localStorage.getItem("data"));

$myName.innerHTML = dataForOverlay.hotelName;
$myCost.innerHTML = dataForOverlay.hotelCost.split(" ")[0];

document.getElementById("days-input").addEventListener("change", () => {
    $myDays.innerHTML = document.getElementById("days-input").value;
    $myGuests.innerHTML = document.getElementById("guests-input").value;
    var days = $myDays.innerHTML;
    var guests = $myGuests.innerHTML;
    if (guests > dataForOverlay.hotelNum) {
        alert('Number of guests exceeds the number of space-lings possible! Please try to be less generous');
        document.getElementById("days-input").value = "";
        document.getElementById("guests-input").value = "";
    } else {
        var total = days * guests * $myCost.innerHTML;
        $myTotal.innerHTML = total + " comets";
    }
});