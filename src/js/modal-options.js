const carBrands = document.querySelector('#car-brand'),
    carModels = document.querySelector('#car-model');

const setOptions = (array, element) => {
    array.forEach(b => {
        const option = document.createElement('option');
        option.value = b;
        option.textContent = b;
        element.appendChild(option);
    });
};

const request = async () => {
    const response = await fetch('database/carModels.json');
    const json = await response.json();

    const brands = json.map(item => item.brand);

    setOptions(brands, carBrands);

    carBrands.addEventListener('change', function () {
        carModels.innerHTML = '<option value="" selected hidden disabled>Модель автомобиля</option>';
        const chosenBrand = json.filter(item => item.brand === this.value);
        const {models} = chosenBrand[0];
        setOptions(models, carModels);
    });
};

request();
