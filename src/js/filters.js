const filterActions = document.querySelectorAll('.filter-params li');
const notFiltered = document.querySelectorAll('.filter-list__item');

const removeClass = (array, clazz) => array.forEach(el => el.classList.remove(clazz));
const setOneActive = (array, clazz, el) => {
    removeClass(array, clazz);
    el.classList.add(clazz);
};

filterActions.forEach(el => {
    el.addEventListener('click', () => {
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
