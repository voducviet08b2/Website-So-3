// document.addEventListener("DOMContentLoaded", function() {
// var btn_left = document.querySelector(".blue-square");
// var btn_right = document.querySelector(".white-square");

// var slideIndex = 1;
// showSlides(slideIndex);



// function plusSlides(n) {

//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     console.log("OK");
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.querySelectorAll(".block-2 img");

//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].classList.remove("leftO");
//     }

//     slides[slideIndex - 1].classList.add("leftO");

// }
// }, false);
var block2 = document.querySelector(".block-2");
var images = document.querySelectorAll(".block-2 img")
console.log(images.length);
var n = 530;
var pos = 0;
var max = (images.length * 530) - (2 * n);


function sangtrai() {
    pos = pos - n;
    block2.style.transform = "translateX(" + pos + "px)";
    console.log(pos);
    if (pos < -(max)) {
        pos = 0;
        block2.style.transform = "translateX(" + pos + "px)";

    }
}

function sangphai() {
    if (pos < 0) {
        pos = pos + n;
        block2.style.transform = "translateX(" + pos + "px)";
    }
}