'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));
// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
///////////////////////////////////////

// Selectiong elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
// return Nodelist
const allSections = document.querySelectorAll('.section');
console.log(allSections)

document.getElementById('section--1')
document.getElementsByClassName('btn')
// HTML collection
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

// Creating and inserting elements
// .insertAdjacentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionally and analytics.';
message.innerHTML = 
  'We use cookies for improved functionally and analytics. <button class="btn btn--close-cookie">Got it!</button>';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true))
// header.before(message);
// header.after(message);

// Delete elements 
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  message.remove();
  // message.parentElement.removeChild(message);
});

///////////////////////////////////////

// Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%'
console.log(getComputedStyle(message).height);
message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orange');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);

// Non-standard
console.log(logo.desiner); // cannot access
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src); 
console.log(logo.getAttribute('src'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.toggle('c');

// Don't use
logo.className = 'jonas'