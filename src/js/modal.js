const buttons = document.querySelectorAll('button[data-modal="open"]');

const modal = (params) => {
    const {
        modalSelector,
        formSelector,
        state,
        animationIn,
        animationOut,
        overflow = true
    } = params;

    const modal = document.querySelector(modalSelector);
    let form = modal.querySelector(formSelector);

    if (modalSelector === formSelector){
        form = modal;
    }

    if (state === 'close') {
        form.classList.add(animationOut);
        setTimeout(() => {
            modal.classList.add('d-none');
            form.classList.remove(animationOut);
            form.classList.add(animationIn);
            if (overflow) document.body.style.overflow = 'auto';
        }, 650)
    } else {
        form.classList.add(animationIn);
        modal.classList.remove('d-none');
        if (overflow) document.body.style.overflow = 'hidden';
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

    switch (attr) {
        case 'close':
            modal({
                modalSelector: '#modal',
                formSelector: '.modal-form',
                state: 'close',
                animationIn: 'fadeInDown',
                animationOut: 'fadeOutUp'
            });
            break;
        case 'close-privacy':
            modal({
                modalSelector: '.privacy',
                formSelector: '.privacy-policy',
                state: 'close',
                animationIn: 'fadeInDown',
                animationOut: 'fadeOutUp'
            });
            break;
    }
});

document
    .querySelectorAll('a[data-modal="policy"]')
    .forEach(a => a.addEventListener('click', e => {
            e.preventDefault();
            modal({
                modalSelector: '.privacy',
                formSelector: '.privacy-policy',
                state: 'open',
                animationIn: 'fadeInDown',
                animationOut: 'fadeOutUp'
            });
        })
    );
