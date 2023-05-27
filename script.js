//script.js

const mainBtn = document.querySelector('.main-btn');

mainBtn.addEventListener('click', () => {
  alert('Redirecting you to my projects...');
});

const socialIcons = document.querySelectorAll('.social-icons a');

socialIcons.forEach(socialIcon => {
  socialIcon.addEventListener('click', e => {    
    e.preventDefault();    
    window.open(socialIcon.href);   
  });
});