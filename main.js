function openNav(){
    document.getElementById("side_nav").style.width = "100%";
}

function closeNav(){
    document.getElementById("side_nav").style.width = "0";
}

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}



// animation 1//
var i = 0;
var txt1 = "Skill Tech has provided specialized Knowledge Services to a wide range of industry around 2 years. This puts us in a unique position where we are able to not only deliver cutting edge solutions but also help build in-house competencies of our Clients, be it in the Knowledge Services domain or a part of our Enterprise Services.We believe in strategic partners rather than solution providers in our professional arena that allows transforming higher business results than fulfilling the business operation alone. Our Service towards the higher vision and dictum provisions the optimal solution to any target with great assurance in this competitive world.We are open to technological challenges with Strategic scheme that experiences you from a well planned requirement initiative to quality business deliverables with great efficiency and responsiveness.";
var speed1 = 10;

// Call the typeWriter function when the page loads
window.onload = function() {
  typeWriter();
};

function typeWriter() {
  if (i < txt1.length) {
    document.getElementById("demo1").innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed1);
  }
}

//number count
function animateNumber(target, finalValue, duration) {
  let current = 0;
  let step = (finalValue - current) / (duration / 50);

  function updateNumber() {
    if (current <= finalValue) {
      document.getElementById(target).textContent = Math.floor(current);
      current += step;
      setTimeout(updateNumber, 5);
    } else {
      document.getElementById(target).textContent = finalValue;
    }
  }

  updateNumber();
}

function checkIfVisible(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateNumber("number1", 800, 13000);
      animateNumber("number2", 90, 14000);
      animateNumber("number3", 42, 500);
      animateNumber("number4", 20, 300);
      observer.unobserve(entry.target); 
    }
  });
}

const observer = new IntersectionObserver(checkIfVisible, { root: null, rootMargin: "0px", threshold: 0.5 });
const countdownContainer = document.getElementById("countdownContainer");

observer.observe(countdownContainer);


// newsletters

const scriptURL = 'https://script.google.com/macros/s/AKfycbw4XlphBj-DBcEktULS4whX0rF5Hx6JVnvlncXhKEzGkrAXWz9FtQECGMtxmRNUK_4Z/exec'
  const form = document.forms['newsletterForm']
    const msg =document.getElementById("confirmationMessage")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        confirmationMessage.innerHTML = "Thank you for Subscribing!"
        setTimeout(function(){
            confirmationMessage.innerHTML = ""
         
        },5000)
        form.reset() 
      })
      .catch(error => console.error('Error!', error.message))
  })