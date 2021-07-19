//create map
const map = L.map('mapid').setView([-23.5489184,-46.6879403], 16); //no array, latitude e longitude

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); 

//create icon 
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    inconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})

//create popup overlay
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240,
}).setContent('Lar das meninas <a href="orphanage.html?id=1 class="choose-orphanage"> <img src="./public/images/arrow-white.svg" </a> ')



//create and add marker
L.marker([-23.5489184,-46.6879403], { icon }).addTo(map)
    .bindPopup(popup)
    
