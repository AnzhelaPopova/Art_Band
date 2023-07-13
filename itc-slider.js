var slideIndex = 0; 
var slides = document.getElementsByClassName("itc-slider__item");  
showSlides(slideIndex);  

function changeSlide(n) { 
    slideIndex += n; 
    if (slideIndex < 0) { 
        slideIndex = slides.length - 1; 
    } 
    if (slideIndex >= slides.length) { 
        slideIndex = 0; 
    } 
    showSlides(slideIndex); 
} 

function showSlides(index) {  
    for (var i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";  
    }  
    slides[index].style.display = "flex";
}  

var prevButton = document.getElementById("prevButton");
var nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", function() {
    changeSlide(-1);
});

nextButton.addEventListener("click", function() {
    changeSlide(1);
});