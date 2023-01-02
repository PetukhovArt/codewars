const burger = document.querySelector('.burger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

burger.addEventListener('click', () => {
    menu.classList.add('active')
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active')
});

const percents = document.querySelectorAll('.skills__progress-percent'),
      lines = document.querySelectorAll('.skills__progress-line-in');

percents.forEach( (item, i) => {
    lines[i].style.width = item.innerHTML;
});


