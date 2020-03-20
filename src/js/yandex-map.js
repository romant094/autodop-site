ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map('map', {
        center: [59.975769, 30.344354],
        zoom: 11,
        controls: ['smallMapDefaultSet']
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([60.026365, 30.312580], {
            balloonContent: 'Салон 2 - Костромской пр., 62'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#B0052F'
        }))
        .add(new ymaps.Placemark([59.914425, 30.338074], {
            balloonContent: 'Салон 1 - наб. Обводного канала, 64к2'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#B0052F'
        }))
}
