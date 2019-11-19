const firstDate = new Date(2019, 10, 1);
const today = new Date();
today.setHours(0, 0, 0, 0);
const oneDay = 24 * 60 * 60 * 1000;
const between = Math.round(Math.abs((firstDate - today) / oneDay));
const startValue = 5000;
const worksPerDay = 3;
const worksCount = startValue + worksPerDay * between;

const firstWorkingYear = 2012;
const firstSiteYear = 2019;
const yearToday = today.getFullYear();
const yearsWorking = yearToday - firstWorkingYear;
const yearSite = yearToday - firstSiteYear;

let renderSiteYear = `${firstSiteYear} — ${yearToday}`;
if (yearSite === 0){
    renderSiteYear = firstSiteYear;
}

document.querySelector('#yearsInMarket').textContent = yearsWorking.toString();
document.querySelector('#siteYear').textContent = renderSiteYear;
document.querySelector('#worksCount').textContent = worksCount.toLocaleString('ru');
