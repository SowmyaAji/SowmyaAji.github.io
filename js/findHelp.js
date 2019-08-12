let mymap, mylatLng, marker;

//get the address from the input box and pass it to the function that searches for its latitude and longitude
function getAdd() {
    $("#addbtn").on('click', function () {
        myFetch($("#addr").val())
    })
}
getAdd()

//take the address from the input box, search the nominatim open street map search engine for the address' geographical coordinates and set them to variables
function myFetch(address) {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const queryUrl = encodeURI('https://nominatim.openstreetmap.org/search/?limit=1&format=json&q=' + address)
    fetch(proxyUrl + queryUrl)
        .then(blob => blob.json())
        .then(data => {
            let addLat = data[0].lat
            addLat = parseFloat(addLat)
            console.log(addLat)
            let addLong = data[0].lon
            addLong = parseFloat(addLong)
            console.log(addLong)
            getHelpLocs(addLat, addLong)
        })
}

//get the locations of the emergency listed in the parsed.json file
function getHelpLocs(addLat, addLong) {
    let url = 'parsed.json';
    $.getJSON(url, function (json) {
        let helpArr = json;
        findNearest(addLat, addLong, helpArr)
    })
}


//use the address geographical coordinates and the coordinates found in the parsed json file to calculate which is the medical help location nearest to that address. Set the map to the address location and the marker to the medical help location
function findNearest(addLat, addLong, helpArr) {
    let distance = null;
    let nearest = null;
    let latLong = [];

    helpArr.forEach((location) => {
        let helpLat = (location['Latitude'])
        helpLat = parseFloat(helpLat)
        let helpLng = (location['Longitude'])
        heLng = parseFloat(helpLng)
        let dist = getDistance(addLat, addLong, helpLat, helpLng)
        dist = parseFloat(dist);
        if (distance === null || dist < distance) {
            distance = dist;
            distance = parseFloat(distance)
            nearest = location;
            latLong = [helpLat, helpLng]
        }
    })
    let addLatLong = [addLat, addLong]
    initialLatLong = addLatLong
    mylatLng = latLong
    marker.setLatLng(mylatLng).update();
    let helpadd = '';
    $.each(nearest, function (key, value) {
        helpadd += ' ' + key + ': ' + value + '\n';
    });
    marker.setPopupContent(helpadd);
    $("#helpcenteradd").val("Distance: " + distance + " miles")
    view = mymap.setView(mylatLng, 15).update();
    console.log(storeadd)

    // return {
    //     addLatLong: addLatLong,
    //     location: nearest, distance: distance, latLong: latLong
    // }
}

//function to calculate distance using the Haversine formula that uses the radius of the earth to measure the distance
function getDistance(lat1, lon1, lat2, lon2, unit = "M") {
    if ((lat1 === lat2) && (lon1 === lon2)) {
        return 0;
    }
    else {
        let radlat1 = Math.PI * lat1 / 180;
        let radlat2 = Math.PI * lat2 / 180;
        let theta = lon1 - lon2;
        let radtheta = Math.PI * theta / 180;
        let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        if (unit === "K") { dist = dist * 1.609344 }
        if (unit === "N") { dist = dist * 0.8684 }
        return dist;
    }
}
function initializeMap() {
    //initialize map with sample latitude and longitude
    let initialLatLng = [35.9957436, -78.9012117]
    mymap = L.map('mapid').setView(initialLatLng, 15);

    //get the initial map from the Leaflet API


    const osm = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'

    }).addTo(mymap);

    //set initial marker at the store nearest to the sample latitude and longitude
    mylatLng = [35.791538, -78.781120]
    marker = L.marker(mylatLng).addTo(mymap);
    marker.setLatLng(mylatLng).update();

    //add simple popup to marker
    marker.bindPopup("<b>Hi! I am the nearest medical help!").openPopup();
}

$(document).ready(initializeMap);