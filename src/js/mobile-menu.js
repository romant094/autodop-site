const burger = document.querySelector('#burger-menu');

document
    .querySelector('#burger-menu svg')
    .addEventListener('click', function () {
        const hasClass = this.classList.contains('active');
        this.classList.toggle('active');
        burger.classList.toggle('burger-right');


        modal({
            modalSelector: '#mobile-menu',
            formSelector: '#mobile-menu',
            state: hasClass ? 'close' : 'open',
            animationIn: 'fadeInLeft',
            animationOut: 'fadeOutRight',
            overflow: false
        });
    });
