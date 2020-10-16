const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-6.106267, -38.1861293], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector("[name='lat']").value = lat;
    document.querySelector("[name='lng']").value = lng;

    marker && map.removeLayer(marker);
    
    marker = L.marker([lat, lng], {icon})
    .addTo(map);
});

function addPhotoField() {
    const container = document.querySelector('#images');
    const fieldsContainer = document.querySelectorAll('.new-upload');
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    
    if (newFieldContainer.children[0].value) {
        newFieldContainer.children[0].value = '';
        container.appendChild(newFieldContainer);
    }
}

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length > 1) { 
        span.parentNode.remove();
    }
    else {
        span.parentNode.children[0].value = "";
    }
}

function toggleSelect(event) {
    const currentButton = event.currentTarget;
    
    const buttons = document.querySelectorAll('.button-select button');
    buttons.forEach((button) => {
        button.classList.remove('active');
    });

    currentButton.classList.add('active');

    const input = document.querySelector('[name=open_on_weekends]');
    
    input.value = currentButton.dataset.value;
}

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent("Lar das meninas <a href='orphanages.html?id=1' class'choose-orphanage' /><img src='./public/images/arrow-white.svg' alt='Lar das meninas' /></a>");

L.marker([-6.106267, -38.1861293], {icon}).addTo(map)
    .bindPopup(popup)


function selectImage(event) {
    const button = event.currentTarget;

    const buttons = document.querySelectorAll(".images button");

    buttons.forEach((button, index) => {
        button.classList.remove('active');
    });

    const image = button.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img");
    imageContainer.src= image.src;

    button.classList.add('active');
}