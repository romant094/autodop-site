class Tabs {
    constructor(selector) {
        this.tabContainer = document.querySelector(selector);
        this.actions = this.tabContainer.querySelectorAll('.tabs-actions li');
        this.tabContent = this.tabContainer.querySelectorAll('.tabs-content li');
    }

    removeActive = elements => elements.forEach(el => el.classList.remove('active'));

    addActive = el => el.classList.add('active');

    addListener = () => this.actions.forEach((el, i) => el.addEventListener('click', () => {
        this.removeActive(this.actions);
        this.removeActive(this.tabContent);
        this.addActive(this.actions[i]);
        this.addActive(this.tabContent[i]);
    }))
}


const tabsAbout = new Tabs('#about-us');
const tabsPrice = new Tabs('#price-list');
tabsAbout.addListener();
tabsPrice.addListener();
