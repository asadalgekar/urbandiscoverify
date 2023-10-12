let distance;
if (startCity === endCity) { distance = 0.00; } else {
    try {
        const response = await axios.get(`https://wft-geo-db.p.rapidapi.com/v1/geo/places/${cityIdMap[startCity]}/distance?toPlaceId=${cityIdMap[endCity]}`, {
            headers: {
                'X-RapidAPI-Key': process.env.API_KEY,
                'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
            }
        });
        distance = response.data.data;
        console.log(distance); // Render the page with the distance res.render('country', { distance, countrySessionData: cachedData.countrySessionData, citySessionData:
        cachedData.citySessionData
    });
catch (error) { console.error('Error calculating distance:', error); return res.status(500).js on({ error: 'An error occurred on server while calculating distance, please go back to main page.' }); }
}


<!--  -->
const cityIdMap = {};
const allCities = cachedData.citySessionData;
allCities.forEach(element => { cityIdMap[element.city] = element.id; });
const startCity = req.body.start;
const endCity = req.body.end;
res.json({
    message: 'Data successfully cached',
    allCities
});