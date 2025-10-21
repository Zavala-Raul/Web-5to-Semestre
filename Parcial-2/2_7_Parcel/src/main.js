const tituloPrincipal = document.querySelector('#tituloPrincipal').addEventListener(
    "click",function() {alert('¡Este es el título!');});

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

import { say } from 'cowsay';

let vk = say({ text: 'grazing in the browser' });
document.getElementById('vaca').innerText = vk;