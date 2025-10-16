const boton = document.getElementById('botonAPI');
const imagen = document.getElementById('imagenAPI');
const nombrePokemon = document.getElementById('pokemonName');
const botonFetch = document.getElementById('botonFetch');

function obtenerImagen() {
    const solicitud = new XMLHttpRequest();
    const maxPokemonId = 1025;
    const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;


    solicitud.onload = function() {
        if (solicitud.status === 200) {
            const datos = JSON.parse(solicitud.responseText);
            console.log('Respuesta de la API:', datos);
            const spriteUrl = datos.sprites.other.home.front_default || datos.sprites.front_default;
            const pokemonName = datos.name;
            nombrePokemon.textContent = `#${datos.id} - ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}`;
            imagen.src = spriteUrl;

        } else {
            console.error("Error al cargar los datos. Estado: " + solicitud.status);
        }
    };

    solicitud.onerror = function() {
        console.error("Hubo un error de red.");
    };
    solicitud.open("GET", url, true);
    solicitud.send();
}

function obtenerImagenFetch() {
        const maxPokemonId = 1025;
        const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;    
        
        fetch(url)
        .then(response => response.json())
        
        .then(datos => {
        const spriteUrl = datos.sprites.other.home.front_default || datos.sprites.front_default;
        const pokemonName = datos.name;

            nombrePokemon.textContent = `#${datos.id} - ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}`;
            imagen.src = spriteUrl;
        } ).catch(err => console.error(err));
}

boton.addEventListener('click', obtenerImagen);
botonFetch.addEventListener('click', obtenerImagenFetch);