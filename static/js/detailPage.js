$bookName = document.querySelector("#name-of-book");
$bookCost = document.querySelector("#book-cost");
$bookNum = document.querySelector("#book-span");
$bookAval = document.querySelector("#book-avail");
$bookImage = document.querySelector("#book-image");

$backButton = document.querySelector("#back");

console.log(JSON.parse(localStorage.getItem("data")));
var dataForThisPage = JSON.parse(localStorage.getItem("data"));

$bookName.innerHTML = dataForThisPage.bookName;
$bookCost.innerHTML = dataForThisPage.bookCost.split(" ")[0];
$bookAval.innerHTML = dataForThisPage.bookAvail;
$bookNum.innerHTML = dataForThisPage.bookNum;
$bookImage.src = dataForThisPage.bookImage;


$backButton.addEventListener('click', () => {
    localStorage.clear();
});

document.getElementById("book-now-overlay").addEventListener("click", () => {
    var x = document.getElementById("snackbar");

    x.className = "show";

    setTimeout(function() {
        x.className = x.className.replace("show", "");
        window.location.href = "index.html";
    }, 3000);

});
