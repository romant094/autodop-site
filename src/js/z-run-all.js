(new SliderAbout('#slider-about', false)).addListener();
// const imp = (input) => input.value.replace('^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$', '');

// document
//     .querySelectorAll('input[data-input="masked"]')
//     .forEach(input => false);

const data = [
    {
        name: 'Михаил Поляков',
        text: 'Скола как будто и не было. Но я в шоке от покрытия Aquapel. Я за вчерашний день, а ездил по всему городу, не разу дворники не включал! Могу предположить, что стоимостью омывайки за пол зимы можно полностью отбить цену покрытия. Парни, спасибо вам огромное!',
        img: 'https://sun9-57.userapi.com/c845323/v845323760/e60f9/fEHhh91IXpM.jpg?ava=1'
    },
    {
        name: 'Родион Живаев',
        text: 'Отполировали лобовое стекло — было затёртое, дворники оставляли «жирные» разводы. Теперь всё отлично — видимость улучшилась, мелкие царапины тоже ушли. Также спасибо за 10% скидку. Фото до и после не делал, но разница существенная) Рекомендую.',
        img: 'https://sun9-65.userapi.com/c830208/v830208209/15a35c/8Gf93tZnS3c.jpg?ava=1Я'
    },
    {
        name: 'Андрей Калишин',
        text: 'Приехал, сделали всё быстрее чем я думал. Трещина оказалось внутренней, что осложняет работу специалиста, но всё равно всё было сделано безупречно! Пока мастер работал, можно было спокойно смотреть телевизор, сидя на мягком диване или полистать журналы.',
        img: 'https://sun9-45.userapi.com/c855428/v855428208/147155/V5nnB3IV62I.jpg?ava=1'
    },
    {
        name: 'Татьяна Иванова',
        text: 'Сервис обалденный, приятная и дружелюбная обстановка. Пока ремонтировали трещину все рассказывали и объясняли. Отвечали на все вопросы. В итоге получилось отлично! Подогрев работает, трещины почти не видно! Дали гарантию на свою работу! В общем, я довольна!',
        img: 'https://sun9-13.userapi.com/c621824/v621824843/16b58/ddhUqNEyqFw.jpg?ava=1'
    },
    {
        name: 'Леонид Стрельников',
        text: 'Спасибо большое за полировку лобового и заднего стекол, а также за покрытие всех стекол «антидождь». Эффект идеальный. Не верил, что стекла можно отполировать, пока не убедился сам. Обращаюсь с проблемами уже не впервые и каждый раз получаю эффект больший, чем ожидал.',
        img: 'https://sun9-62.userapi.com/c871/u3842962/d_7593f456.jpg?ava=1'
    }
];

new SliderFeedback('#slider-feedback', data, true);

document
    .querySelectorAll('form')
    .forEach(form => sendForm(form));

const settings = {
    slideshow: true,
    speed: 500,
    slideshowInterval: 5000
};
const slider = Peppermint(document.getElementById('peppermint'), settings);
