const schoolLat = 51.23007242039045;
const schoolLon = 4.416095354906616;

var map = L.map('map').setView([schoolLat, schoolLon], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

L.marker([schoolLat, schoolLon]).addTo(map)
    .bindPopup('Dit is mijn locatie.')
    .openPopup();