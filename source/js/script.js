// показ/скрытие главного меню

let pageHeader = document.querySelector('.page-header');
let headerToggle = document.querySelector('.page-header__menu-toggle');

pageHeader.classList.remove('page-header--no-js');

headerToggle.addEventListener('click', function() {
  pageHeader.classList.toggle('page-header--menu-open')
});

// показ/скрытие модального окна

let modal = document.querySelector('.page__modal');
let modalToggle = document.querySelectorAll('.modal-toggle');

if (modal) {
  for (let i = 0; i < modalToggle.length; i++) {
    modalToggle[i].addEventListener('click', function() {
      modal.classList.toggle('modal--open')
      modalToggle.preventDefault();
    });
  }
}
