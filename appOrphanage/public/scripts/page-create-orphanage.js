//create map
const map = L.map('mapid').setView([-23.5489184,-46.6879403], 16); //no array, latitude e longitude

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); 

//create icon 
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    inconSize: [58,68],
    iconAnchor: [29,68]
})

