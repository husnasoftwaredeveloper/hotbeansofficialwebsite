//Navbar Code
$('nav ul li.btn span').click(function(){
  $('nav ul div.items').toggleClass("show");
  $('nav ul li.btn span').toggleClass("show");
});
//Dark Mode Code
function darkLightMode(){
  let darkMode = document.getElementById('dark-mode');
  let lightMode = document.getElementById('light-mode');
  darkMode.addEventListener('click', function() {
    let display = document.body;
    let content = document.getElementById('dark-mode');
    display.className = 'dark-mode'
  });
  lightMode.addEventListener('click', function() {
    let lightDisplay= document.body;
    let lightContent = document.getElementById('light-mode');
    lightDisplay.className = 'light-mode'
  }); 
};
//Slider Image Code
var slides = document.querySelectorAll(".slide");
var dots = document.querySelectorAll(".dot");
var index = 0;

function prevSlide(n) {
  index += n;
  changeSlide();
}

function nextSlide(n) {
  index += n;
  changeSlide();
}

changeSlide();

function changeSlide() {
  if (slides.length === 0 || dots.length === 0) {
    return; // Exit the function if no slides or dots are found
  }

  if (index > slides.length - 1) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

    if (dots[i]) {
      dots[i].classList.remove("active");
    }
  }

  slides[index].style.display = "block";

  if (dots[index]) {
    dots[index].classList.add("active");
  }
}
//Search Bar Activation
document.addEventListener('DOMContentLoaded', () => {
  const search = document.querySelector('.search-bar');
  search.addEventListener('keyup', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const allSections = document.querySelectorAll('section');
    allSections.forEach(section => {
      const textContent = section.textContent.toLowerCase();
      const images = section.querySelectorAll('img');
      const headings = section.querySelectorAll('h1, h2, h3, h4');
      const paragraphs = section.querySelectorAll('p');
      const listItems = section.querySelectorAll('li');
      if (textContent.includes(searchTerm)) {
        section.style.display = 'block';
        images.forEach(img => {
          img.style.display = 'block'; // show the images
        });
        headings.forEach(heading => {
          heading.style.display = 'block'; // show the headings
        });
        paragraphs.forEach(para => {
          para.style.display = 'block'; // show the paragraphs
        });
        listItems.forEach(item => {
          item.style.display = 'block'; // show the list items
        });
      } else {
        section.style.display = 'none';
        images.forEach(img => {
          img.style.display = 'none'; // hide the images
        });
        headings.forEach(heading => {
          heading.style.display = 'none'; // hide the headings
        });
        paragraphs.forEach(para => {
          para.style.display = 'none'; // hide the paragraphs
        });
        listItems.forEach(item => {
          item.style.display = 'none'; // hide the list items
        });
      }
    });
  });
});