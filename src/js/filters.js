const filterActions = document.querySelectorAll('.filter-params li');
const imgBefore = document.querySelector('#filter-before');
const imgAfter = document.querySelector('#filter-after');
const filterItems = document.querySelector('#filter-items');

const removeClass = (array, clazz) => array.forEach(el => el.classList.remove(clazz));
const setOneActive = (array, clazz, el) => {
    removeClass(array, clazz);
    el.classList.add(clazz);
};

filterActions.forEach(el => {
    el.addEventListener('click', () => {
        filterItems.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        const notFiltered = document.querySelectorAll('.filter-list__item');
        setOneActive(filterActions, 'active', el);
        const activeFilter = el.dataset.filter;

        if (activeFilter === '0') {
            removeClass(notFiltered, 'd-none');
        } else {
            notFiltered.forEach(notF => {
                const currentParam = notF.dataset.filter;
                notF.classList.remove('d-none');
                if (activeFilter !== currentParam) {
                    notF.classList.add('d-none');
                }
            })
        }
    })
});

const path = ['./database/gallery.json', 'gallery.php?type=1'];
let route = path[1];
if (window.location.host === 'localhost:8888') {
    route = path[0];
}
console.log(route)

const filters = ['polishing_1', 'polishing_2', 'repair'];

const handleClick = (el) => {
    const img = el.querySelector('img');
    const {src, alt} = img;

    const srcArr = src.split('/')
    srcArr.length = srcArr.length - 1;

    // const altArr = alt.split('-')[1].split('.')[0];
    const newAlt = alt.replace('after', 'before');
    srcArr.push(newAlt);
    const newSrc = srcArr.join('/');

    imgAfter.src = src;
    imgBefore.src = newSrc;

    imgAfter.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

const addClasses = (el, classes) => classes.forEach(cl => el.classList.add(cl));

const renderGallery = (item, filter) => {
    const type = item.split('-')[1].split('.')[0];
    if (type === 'before') return;

    const path = `/img/gallery/${filter}/${item}`;
    const img = new Image();
    const div = document.createElement('div');
    const classes = 'col-lg-2 col-4 filter-list__item animated fadeIn';
    div.dataset.filter = filter;
    addClasses(div, classes.split(' '));
    img.src = path;
    img.alt = item;
    img.loading = 'lazy';
    const div1 = document.createElement('div');
    div1.classList.add('filter-list__item-inner');
    div.appendChild(div1);
    div1.appendChild(img);
    div.addEventListener('click', () => handleClick(div))
    document
        .querySelector('#filter-items')
        .appendChild(div);
};

fetch(route)
    .then(res => res.json())
    .then(res => {
        let items = {};
        filters.forEach(filter => {
            items[filter] = res[filter].filter(item => item.length > 2);
            items[filter].forEach(item => renderGallery(item, filter))
        });

        console.log(items)
    });

// toggle-more
// filter-items
