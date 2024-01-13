'use strict';

const value = document.querySelector('.dropdown__value');
const menu = document.querySelector('.dropdown__list');
const menuItems = document.querySelectorAll('.dropdown__link');

value.addEventListener('click', function() {
  menu.classList.toggle('dropdown__list_active');
  console.log('click');
})

for (let i = 0; i < menuItems.length; i++)
    menuItems[i].addEventListener('click', function(event) {
    event.preventDefault(); // Отменяем переход по ссылке
    menu.classList.remove('dropdown__list_active');
    value.textContent = this.textContent;
  })