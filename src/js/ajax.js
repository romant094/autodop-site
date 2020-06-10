const messages = {
    success: {
        header: 'Форма успешно отправлена',
        text: 'Скоро мы с вами свяжемся',
        img: 'img/smile-success.jpg'
    },
    sending: {
        header: 'Пожалуйста, подождите',
        text: 'Идет отправка...',
        img: 'img/loading.gif'
    },
    failure: {
        header: 'Что-то пошло не так...',
        text: 'Пожалуйста, повторите отправку формы или свяжитесь с нами по телефону',
        img: 'img/smile-failure.jpg'
    }
};

const sendForm = form => {
    const postData = (body, callback) => {
        const request = new XMLHttpRequest();
        let status;

        modal({
            modalSelector: '.results',
            formSelector: '.results-content',
            state: 'open',
            animationIn: 'fadeIn',
            animationOut: 'fadeOut'
        });

        callback('sending');

        request.addEventListener('readystatechange', () => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                status = 'success';
            } else {
                status = 'failure';
            }

            callback(status);

            setTimeout(() => {
                modal({
                    modalSelector: '.results',
                    formSelector: '.results-content',
                    state: 'close',
                    animationIn: 'fadeIn',
                    animationOut: 'fadeOut'
                });
                modal({
                    modalSelector: '#modal',
                    formSelector: '.modal-form',
                    state: 'close',
                    animationIn: 'fadeInDown',
                    animationOut: 'fadeOutUp'
                });
                if (status === 'success'){
                    clearFields(form)
                }
            }, 3000);
        });

        request.open('POST', form.action);
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        request.setRequestHeader('X-Bots', 'I am not a bot');
        request.send(body);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);

        let data = {};
        formData.forEach((value, key) => data[key] = value);
        console.log(data);

        postData(JSON.stringify(data), ajaxStatusModal, clearFields);
    })
};

const ajaxStatusModal = (status) => {
    const statusInfo = messages[status];
    const elements = [
        document.querySelector('.results img'),
        document.querySelector('.results h5'),
        document.querySelector('.results p')
    ];

    elements.forEach(el => {
        const type = el.dataset.ajax;
        if (type === 'img') {
            el.src = statusInfo[type];
            el.alt = status;
        } else {
            el.textContent = statusInfo[type]
        }
    });

};

const clearFields = form => form.querySelectorAll('input[type="text"], select').forEach(el => el.value = '');
