const buttons = document.querySelectorAll('button[data-modal="open"]'),
    mainForm = document.querySelector('#modal');

const modal = (modal, state) => {
    const form = modal.querySelector('.modal-form');
    // const fields = form.querySelectorAll('input[type="text"], select');
    // fields.forEach(f => f.value = '');

    if (state === 'close') {
        form.classList.add('fadeOutUp');
        setTimeout(() => {
            form.classList.add('fadeInDown');
            form.classList.remove('fadeOutUp');
            modal.classList.add('d-none');
            document.body.style.overflow = 'auto';
        }, 650)
    } else {
        form.classList.add('fadeInDown');
        modal.classList.remove('d-none');
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            form.classList.remove('fadeInDown');
        }, 1000)
    }
};

buttons.forEach(
    btn => btn.addEventListener('click', () => {
        modal(mainForm, 'open');
    })
);

document.addEventListener('click', event => {
    const t = event.target;
    const attr = t.dataset.modal;
    if (attr === 'close') {
        modal(mainForm, 'close');
    }
});
