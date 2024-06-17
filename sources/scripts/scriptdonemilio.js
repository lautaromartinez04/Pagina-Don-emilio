var map = L.map('map').setView([-32.4162,-63.2291], 15); // Coordenadas del centro del mapa y zoom

// Añadir la capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Función para abrir enlace de Google Maps en nueva pestaña
function openGoogleMapsLink(url) {
    window.open(url);
}

// Agregar marcadores
var marker2 = L.marker([-32.42035, -63.22149]).addTo(map); // Marcador 1
var marker1 = L.marker([-32.41102, -63.23377]).addTo(map); // Marcador 2

// Añadir popups a los marcadores con enlace a Google Maps
marker1.bindPopup("<div style='text-align:center;'><b>DON EMILIO CALLE TUCUMAN</b><br><a href='#' onclick='openGoogleMapsLink(\"https://maps.app.goo.gl/qKGjELRRXMbAXRUp6\"); return false;'>Ver en Google Maps</a></div>").openPopup();
marker2.bindPopup("<div style='text-align:center;'><b>DON EMILIO AV. PRESIDENTE PERON</b><br><a href='#' onclick='openGoogleMapsLink(\"https://maps.app.goo.gl/M65QbQr7LmY4X39y7\"); return false;'>Ver en Google Maps</a></div>").openPopup();

