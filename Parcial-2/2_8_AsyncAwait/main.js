const imagen = document.getElementById('imagenAPI');
const nombrePokemon = document.getElementById('pokemonName');
const botonFetch = document.getElementById('botonFetch');

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

async function obtenerImagenAwait() {
        const maxPokemonId = 1025;
        const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
        const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;    
        
        respuesta = await fetch(url);
        datos = await respuesta.json();
        const spriteUrl = datos.sprites.other.home.front_default || datos.sprites.front_default;
        const pokemonName = datos.name;

            nombrePokemon.textContent = `#${datos.id} - ${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}`;
            imagen.src = spriteUrl;
}


botonFetch.addEventListener('click', obtenerImagenAwait);