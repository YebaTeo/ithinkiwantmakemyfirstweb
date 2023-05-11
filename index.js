const theBody = document.querySelector("body");
const openNav = document.querySelector(".menu-bar button");
const closeNav = document.querySelector(".close-nav button");
const Navbar = document.querySelector(".navbar");
let slideIndex = 3;

function bodyScroll() {
  if (Navbar.classList.contains("show")) {
    theBody.classList.add("hide-scroll");
  } else if (theBody.classList.contains("hide-scroll")) {
    theBody.classList.remove("hide-scroll");
  }
}

function showHide() {
  Navbar.classList.toggle("show");
  bodyScroll();
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

openNav.onclick = showHide;
closeNav.onclick = showHide;

showSlides(slideIndex);

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;


  if (name === "") {
    alert("Name must be filled out");
    return false;
  }

  var email = document.f1.email.value;
  const email_pattern = /^[^\s@]+\s@]+\.[^\s@]+$/;
  var email_error = document.querySelector("email_error");
  if (email == "") {
    email_error.innerHTML = "Email is Required";
    email_error.style.color = "red";
    return false;
  }
  else if (!email_pattern.test(email)) {
    email_error.innerHTML = "Email not Matched";
    email_error.style.color = "red";
    return false;
  } else {
    alert("Form submitted successfully");
    return true;
  }
}