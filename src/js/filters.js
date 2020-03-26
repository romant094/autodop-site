const filterActions = document.querySelectorAll('.filter-params li');
const imgBefore = document.querySelector('#filter-before');
const imgAfter = document.querySelector('#filter-after');
const filterItems = document.querySelector('#filter-items');
const prevPageBtn = document.querySelector('#btn-prev');
const nextPageBtn = document.querySelector('#btn-next');

let allImages = [];
let filteredImages = [];
let pagesTotal = 0;
let currentPage = 1;
const recordsPerPage = 6;

prevPageBtn.addEventListener('click', () => prevPage(currentPage));
nextPageBtn.addEventListener('click', () => nextPage(currentPage));

const removeClass = (array, clazz) => array.forEach(el => el.classList.remove(clazz));
const addClass = (array, clazz) => array.forEach(el => el.classList.add(clazz));
const setOneActive = (array, clazz, el) => {
    removeClass(array, clazz);
    el.classList.add(clazz);
};

filterActions.forEach(el => {
    el.addEventListener('click', () => {
        // goToElement(filterItems);
        setOneActive(filterActions, 'active', el);
        const activeFilter = el.dataset.filter;

        if (activeFilter === '0') {
            filteredImages = [...allImages];
        } else {
            filteredImages = allImages.filter(({filter}) => filter === el.dataset.filter);
        }

        currentPage = 1;
        const index = filters.findIndex(item => item === activeFilter);
        toggleConcept(index);
        renderGallery();
    })
});

const path = ['./database/gallery.json', 'gallery.php?type=1'];
let route = path[1];
if (window.location.host === 'localhost:8888') {
    route = path[0];
}

const filters = ['polishing_1', 'polishing_2', 'repair', 'armoring', 'other'];

const handleClick = (el) => {
    const img = el.querySelector('img');
    const {src, alt} = img;

    const srcArr = src.split('/');
    srcArr.length = srcArr.length - 1;

    const newAlt = alt.replace('after', 'before');
    srcArr.push(newAlt);
    const newSrc = srcArr.join('/');

    imgAfter.src = src;
    imgBefore.src = newSrc;

    // goToElement(imgAfter);
};

// const goToElement = el => el.scrollIntoView({
//     behavior: 'smooth',
//     block: 'start'
// });

const addClasses = (el, classes) => classes.forEach(cl => el.classList.add(cl));

const clearGallery = () => {
    const div = document.querySelector('.filter-list');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
};

const renderGallery = () => {
    clearGallery();
    filteredImages.forEach(({filter, url}) => renderGalleryItem(url, filter));
    pagesTotal = countPages();
    changePage();
};

const toggleConcept = (index) => {
    const resized = document.querySelector('.resized');
    const divider = document.querySelector('.divider');
    if (index > 2) {
        resized.classList.add('d-none');
        divider.classList.add('d-none');
    } else {
        resized.classList.remove('d-none');
        divider.classList.remove('d-none');
    }
};

const renderGalleryItem = (item, filter) => {
    const type = item.split('-')[1].split('.')[0];
    if (type === 'before') return;

    const path = `/img/gallery/${filter}/${item}`;
    const img = new Image();
    const div = document.createElement('div');
    const classes = 'col-lg-2 col-4 filter-list__item';
    div.dataset.filter = filter;
    addClasses(div, classes.split(' '));
    img.src = path;
    img.alt = item;
    img.loading = 'lazy';
    const div1 = document.createElement('div');
    div1.classList.add('filter-list__item-inner');
    div.appendChild(div1);
    div1.appendChild(img);
    div.addEventListener('click', () => handleClick(div));
    document
        .querySelector('#filter-items')
        .appendChild(div);
};

const countPages = () => Math.ceil(filteredImages.length / recordsPerPage);

const prevPage = () => {
    if (currentPage > 1) {
        currentPage--;
        renderGallery();
    }
};

const nextPage = () => {
    if (currentPage < countPages()) {
        currentPage++;
        renderGallery();
    }
};

function changePage() {
    const pageCountBlock = document.querySelector('.pagination-pages');
    const filterListItems = document.querySelectorAll('.filter-list__item');

    pageCountBlock.textContent = `${currentPage} / ${pagesTotal}`;

    addClass(filterListItems, 'd-none');
    filterListItems.forEach((item, i) => {
        if (i >= (currentPage - 1) * recordsPerPage && i < (currentPage * recordsPerPage)) {
            item.classList.remove('d-none')
        }
    });

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === countPages();
}

fetch(route)
    .then(res => res.json())
    .then(res => {
        filters.forEach(filter => {
            Object.values(res[filter]).forEach(item => {
                if (item.includes('after')) {
                    allImages.push({filter, url: item});
                }
            })
        });
        filteredImages = [...allImages];
        renderGallery();
    });
