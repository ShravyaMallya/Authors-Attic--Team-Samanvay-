$book1More = document.querySelector("#book1-more");
$book1Name = document.querySelector("#book1-name");
$book1Cost = document.querySelector("#book1-cost");
$book1Avail = document.querySelector("#book1-avail");
$book1Num = document.querySelector("#book1-number");
$book1Image = document.querySelector("#book1-image");

$book2More = document.querySelector("#book2-more");
$book2Name = document.querySelector("#book2-name");
$book2Cost = document.querySelector("#book2-cost");
$book2Avail = document.querySelector("#book2-avail");
$book2Num = document.querySelector("#book2-number");
$book2Image = document.querySelector("#book2-image");

$book3More = document.querySelector("#book3-more");
$book3Name = document.querySelector("#book3-name");
$book3Cost = document.querySelector("#book3-cost");
$book3Avail = document.querySelector("#book3-avail");
$book3Num = document.querySelector("#book3-number");
$book3Image = document.querySelector("#book3-image");

$book4More = document.querySelector("#book4-more");
$book4Name = document.querySelector("#book4-name");
$book4Cost = document.querySelector("#book4-cost");
$book4Avail = document.querySelector("#book4-avail");
$book4Num = document.querySelector("#book4-number");
$book4Image = document.querySelector("#book4-image");

$book5More = document.querySelector("#book5-more");
$book5Name = document.querySelector("#book5-name");
$book5Cost = document.querySelector("#book5-cost");
$book5Avail = document.querySelector("#book5-avail");
$book5Num = document.querySelector("#book5-number");
$book5Image = document.querySelector("#book5-image");

$book6More = document.querySelector("#book6-more");
$book6Name = document.querySelector("#book6-name");
$book6Cost = document.querySelector("#book6-cost");
$book6Avail = document.querySelector("#book6-avail");
$book6Num = document.querySelector("#book6-number");
$book6Image = document.querySelector("#book6-image");

document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
            "body").style.visibility = "hidden";
        document.querySelector(
            "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
            "#loader").style.display = "none";
        document.querySelector(
            "body").style.visibility = "visible";
    }
};

$book1More.addEventListener('click', () => {
    console.log('clicked book1');
    var dataForPage = {
        "bookName": $book1Name.innerHTML,
        "bookCost": $book1Cost.innerHTML,
        "bookAvail": $book1Avail.innerHTML,
        "bookNum": $book1Num.innerHTML,
        "bookImage": $book1Image.src
    };
    localStorage.setItem("data", JSON.stringify(dataForPage));
    console.log(JSON.stringify(dataForPage));
    window.location.href = "bookDetails.html";
});
$book2More.addEventListener('click', () => {
    console.log('clicked book2');
    var dataForPage = {
        "bookName": $book2Name.innerHTML,
        "bookCost": $book2Cost.innerHTML,
        "bookAvail": $book2Avail.innerHTML,
        "bookNum": $book2Num.innerHTML,
        "bookImage": $book2Image.src
    };
    localStorage.setItem("data", JSON.stringify(dataForPage));
    console.log(JSON.stringify(dataForPage));
    window.location.href = "bookDetails.html";
});
$book3More.addEventListener('click', () => {
    console.log('clicked book3');
    var dataForPage = {
        "bookName": $book3Name.innerHTML,
        "bookCost": $book3Cost.innerHTML,
        "bookAvail": $book3Avail.innerHTML,
        "bookNum": $book3Num.innerHTML,
        "bookImage": $book3Image.src
    };
    localStorage.setItem("data", JSON.stringify(dataForPage));
    console.log(JSON.stringify(dataForPage));
    window.location.href = "bookDetails.html";
});
$book4More.addEventListener('click', () => {
    console.log('clicked book4');
    var dataForPage = {
        "bookName": $book4Name.innerHTML,
        "bookCost": $book4Cost.innerHTML,
        "bookAvail": $book4Avail.innerHTML,
        "bookNum": $book4Num.innerHTML,
        "bookImage": $book4Image.src
    };
    localStorage.setItem("data", JSON.stringify(dataForPage));
    console.log(JSON.stringify(dataForPage));
    window.location.href = "bookDetails.html";
});
$book5More.addEventListener('click', () => {
    console.log('clicked book5');
    var dataForPage = {
        "bookName": $book5Name.innerHTML,
        "bookCost": $book5Cost.innerHTML,
        "bookAvail": $book5Avail.innerHTML,
        "bookNum": $book5Num.innerHTML,
        "bookImage": $book5Image.src
    };
    localStorage.setItem("data", JSON.stringify(dataForPage));
    console.log(JSON.stringify(dataForPage));
    window.location.href = "bookDetails.html";
});
$book6More.addEventListener('click', () => {
    console.log('clicked book6');
    var dataForPage = {
        "bookName": $book6Name.innerHTML,
        "bookCost": $book6Cost.innerHTML,
        "bookAvail": $book6Avail.innerHTML,
        "bookNum": $book6Num.innerHTML,
        "bookImage": $book6Image.src
    };
    localStorage.setItem("data", JSON.stringify(dataForPage));
    console.log(JSON.stringify(dataForPage));
    window.location.href = "bookDetails.html";
});
