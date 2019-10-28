ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map('map', {
        center: [59.975769, 30.344354],
        zoom: 10,
        controls: ['smallMapDefaultSet']
    });

    myMap.geoObjects
        .add(new ymaps.Placemark([60.023227, 30.428670], {
            balloonContent: 'Салон 1'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#B0052F'
        }))
        .add(new ymaps.Placemark([59.914425, 30.338074], {
            balloonContent: 'Салон 2'
        }, {
            preset: 'islands#dotIcon',
            iconColor: '#B0052F'
        }))
}
