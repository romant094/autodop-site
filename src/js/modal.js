const buttons = document.querySelectorAll('button[data-modal="open"]'),
    mainForm = document.querySelector('#modal');

const modal = (params) => {
    const {
        modalSelector,
        formSelector,
        state,
        animationIn,
        animationOut
    } = params;

    const modal = document.querySelector(modalSelector);
    const form = modal.querySelector(formSelector);

    if (state === 'close') {
        form.classList.add(animationOut);
        setTimeout(() => {
            modal.classList.add('d-none');
            form.classList.remove(animationOut);
            form.classList.add(animationIn);
            document.body.style.overflow = 'auto';
        }, 650)
    } else {
        form.classList.add(animationIn);
        modal.classList.remove('d-none');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            form.classList.remove(animationIn);
        }, 1000)
    }
};

buttons.forEach(
    btn => btn.addEventListener('click', () => modal({
        modalSelector: '#modal',
        formSelector: '.modal-form',
        state: 'open',
        animationIn: 'fadeInDown',
        animationOut: 'fadeOutUp'
    }))
);

document.addEventListener('click', event => {
    const t = event.target;
    const attr = t.dataset.modal;
    if (attr === 'close') {
        modal({
            modalSelector: '#modal',
            formSelector: '.modal-form',
            state: 'close',
            animationIn: 'fadeInDown',
            animationOut: 'fadeOutUp'
        });
    }
});
