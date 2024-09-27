let p = document.getElementsByClassName('hidden');
let myText;

for (i = 0; i < p.length; i++) {
  if (p[i].innerHTML == "My Text") {
    // console.log(myText, p[0].innerHTML);
    myText = p[i];
    break;
  }
}
//hamburger menu
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
});

// Add smooth scrolling to the nav links
const navLinks = document.querySelectorAll('.nav-link');

// Function to activate link on click and smooth scroll to the section
navLinks.forEach(link => {
  link.addEventListener('click', function() {
      // Remove 'active' class from all links
      navLinks.forEach(nav => nav.classList.remove('active'));

      // Add 'active' class to the clicked link
      this.classList.add('active');
  });
});

// Active link on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let scrollPosition = window.scrollY;

  sections.forEach(section => {
      const sectionTop = section.offsetTop - 80;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
      } else {
          document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.remove('active');
      }
  });
});

myText.removeAttribute("hidden");

function validateEmail() {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailValue = emailInput.value;

  // Basic email validation pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // If the email does not match the pattern, show error
  if (!emailPattern.test(emailValue)) {
    emailError.style.display = "block";  // Show error message
    return false;  // Prevent form submission
  } else {
    emailError.style.display = "none";  // Hide error message
    return true;  // Allow form submission
  }
}
const phoneInputField = document.querySelector("#phone");

const iti = window.intlTelInput(phoneInputField, {
  initialCountry: "auto",  // Automatically detects the user's country
  geoIpLookup: function (callback) {
    fetch('https://ipinfo.io?token=<YOUR_IPINFO_TOKEN>')
      .then(response => response.json())
      .then(data => {
        callback(data.country);
      })
      .catch(() => callback('us')); // Default to US if the lookup fails
  },
  utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.13/js/utils.js"  // Loads extra functionality
});
document.querySelector("form").addEventListener("submit", function (e) {
  const phoneNumber = iti.getNumber();  // Gets the full phone number with country code
  document.querySelector("input[name='contact']").value = phoneNumber;
});

document.getElementById("menu-icon").addEventListener("click", function() {
  const navList = document.getElementById("nav-list");
  navList.classList.toggle("show"); // Toggle the 'show' class to display the menu
});
