const continueBtn = document.querySelector('.Continue-Button');
const emailInput = document.querySelector('.Email-bar');
const badMailDiv = document.querySelector('.badmail');

continueBtn.addEventListener('click', function () {
  const email = emailInput.value.trim();
  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    emailInput.style.border = '1px solid red';
    badMailDiv.style.display = 'block';
  } else {
    // redirect to login page with email parameter
    window.location.href = 'https://www.disneyplus.com/en-gb/sign-up?email=' + encodeURIComponent(email);
  }
});

emailInput.addEventListener('input', function () {
  emailInput.style.border = '';
  badMailDiv.style.display = '';
});

emailInput.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    document.getElementsByClassName('Continue-Button')[0].click();
  }
});


// down arrow scrolling function on click

const V = document.querySelector('.down-arrow');

V.addEventListener('click', () => {
  const targetElement = document.querySelector('.bloc2');
  targetElement.scrollIntoView({ behavior: 'smooth' });
});

// Nav going invisible and showing nav2

const fixedNav = document.querySelector('.navfirst');
const scrollNav = document.querySelector('.navmain');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight;
  const scrollThreshold = pageHeight * 0.15; 
  
  if (scrollPosition >= scrollThreshold) {
    scrollNav.style.opacity = '1';
    scrollNav.style.zIndex = '200';

  } else {
    scrollNav.style.opacity = '0';
    scrollNav.style.zIndex = '0';
  }
});

//bloc4 sliding / animation of bars

const buttons = document.querySelectorAll('.button');
const hiddens = document.querySelectorAll('.bar-hidden');
const icons = document.querySelectorAll('.vertical');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(){
    if (hiddens[i].style.maxHeight === '0px' || hiddens[i].style.maxHeight === '') {
      hiddens[i].style.maxHeight = '500px';
      icons[i].style.opacity = '0';
    } else {
      hiddens[i].style.maxHeight = '0px';
      icons[i].style.opacity = '1';
    }
  });
}

// language change 

const languageSelector = document.querySelector('#language-selector');
languageSelector.addEventListener('change', () => {
  const selectedOption = languageSelector.options[languageSelector.selectedIndex];
  window.location.href = selectedOption.value;
});