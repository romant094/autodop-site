fetch('parsecsv.php?type=1')
    .then(res => res.json())
    .then(res => {
        const resClear = res.filter(arr => arr[0] !== '');
        const brandsTemp = resClear.map(arr => arr[0]).filter(el => el !== '');
        const unique = [...new Set(brandsTemp)];
        const result = unique.map(el => ({brand: el, models: []}));

        resClear.forEach(arr => {
            const index = result.findIndex(resEl => resEl.brand === arr[0]);
            result[index].models.push(arr[1]);
        });

        const json = JSON.stringify(result);
        console.log(json);
    });
