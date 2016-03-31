window.onload = function () {
    var url = 'https://restcountries.eu/rest/v1'
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function () {
        if (request.status === 200) {
            var jsonString = request.responseText;
            var countries = JSON.parse(jsonString);
            main(countries);
        }
    }
    request.send(null);
};
   
//this is setting it up to where it is going to start! include map and drop down!
var main = function (countries) {
    populateSelect(countries);
    //adding the map to start on edinburgh.
    var center = { lat: 55.9520, lng: -3.1900 }
    var zoom = 10;
    var map = new Map( center, zoom )
    var saved = localStorage.getItem("selectedCountry");
    // var selected = countries[saved];
    if(saved){
        // selected = JSON.parse(cached);
        document.querySelector('#countries').value = saved;
        updateDisplay(countries[saved]);
        //now to make the map go to the country that is saved to countryPosition. so it pan to that position.
        var countryPosition = getMapPosition(countries[saved]);
        map.pan(countryPosition);
    }
    document.querySelector('#info').style.display = 'block';

}

var populateSelect = function (countries) {
    var parent = document.querySelector('#countries');
    countries.forEach(function (country, index) {
        // country.index = index;
        var option = document.createElement("option");
        option.value = index.toString();
        option.innerText = country.name;
        parent.appendChild(option);
    });
    parent.style.display = 'block';
    parent.addEventListener('change', function () {
        var index = this.value;
        var country = countries[index];
        updateDisplay(country);
        localStorage.setItem("selectedCountry", index);
    });
 }

var updateDisplay = function (country) {
    var tags = document.querySelectorAll('#info p');
    tags[0].innerText = country.name;
    tags[1].innerText = country.population;
    tags[2].innerText = country.capital;
 }

var getMapPosition = function (country) {
    return {
        lat: country.latlng[0],
        lng: country.latlng[1]
    }
}


