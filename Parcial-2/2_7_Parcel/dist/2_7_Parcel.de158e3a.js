const tituloPrincipal = document.querySelector('#tituloPrincipal').addEventListener("click", function() {
    alert("\xa1Este es el t\xedtulo!");
});
const imagenPiano = document.querySelector('img');
imagenPiano.addEventListener('mouseenter', function() {
    imagenPiano.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
    imagenPiano.style.transform = 'scale(1.03)';
    imagenPiano.style.transition = 'all 0.3s ease';
});
imagenPiano.addEventListener('mouseleave', function() {
    imagenPiano.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.1)';
    imagenPiano.style.transform = 'scale(1)';
});
let contador = 0;
document.body.addEventListener('click', function() {
    contador++;
    if (contador >= 3) {
        document.body.classList.toggle('theme-red');
        contador = 0;
    }
});

//# sourceMappingURL=2_7_Parcel.de158e3a.js.map
