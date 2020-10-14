const map = L.map('mapid').setView([-6.106267, -38.1861293], 17);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const icon = L.icon({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent("Lar das meninas <a href='orphanages.html?id=1' class'choose-orphanage' /><img src='./public/images/arrow-white.svg' alt='Lar das meninas' /></a>");

L.marker([-6.106267, -38.1861293], {icon}).addTo(map)
    .bindPopup(popup)