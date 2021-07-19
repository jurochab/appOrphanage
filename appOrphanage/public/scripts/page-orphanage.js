const options ={
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false,
}

//create map
const map = L.map('mapid', options).setView([-23.5489184,-46.6879403], 16); //no array, latitude e longitude

//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map); 

//create icon 
const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    inconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170, 2]
})



//create and add marker
L.marker([-23.5489184,-46.6879403], { icon }).addTo(map)

/*image gallery*/

function selectImage(event) {
    const button = event.currentTarget

    //remover todas as classes .active
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(removeActiveClass)

    function removeActiveClass(button){
        button.classList.remove("active")

    }
    //selecionar a imagem clicada
    const image = button.children[0] //posição 0 é a img
    const imageContainer = document.querySelector(".orphanage-details > img")
    //atualizar o container de imagem
    imageContainer.src = image.src
    //adicionar a classe .active para este botao
    button.classList.add("active")
}

