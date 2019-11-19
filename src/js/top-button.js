const topButton = document.querySelector('.go-to-top');

const scrollTop = () => {
    const html = document.documentElement;
    const body = document.body;

    const fromTop = html.scrollTop || body && body.scrollTop || 0;

    if (fromTop > 200) {
        topButton.classList.remove('d-none')
    } else {
        topButton.classList.add('d-none')
    }
};

document.addEventListener('scroll', scrollTop);
