let url = 'https://pokeapi.co/api/v2/pokemon/';
const getPokemon = document.getElementById('callPokemon');


for(let i = 1; i <= 12; i++){
    fetch(url + i)
        .then((res) => res.json())
        .then(data => mostrarPokemon(data))
}

function mostrarPokemon(poke){
    let tiposPokemon = poke.types.map((type) => `<p class="pokemon_type ${type.type.name}">${type.type.name}</p>`);
    tiposPokemon = tiposPokemon.join('')
    // console.log(tiposPokemon) 

    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `
    <img class="pokeball" src="https://fabian3425.github.io/pokemon-api/image/pokeball.png" alt="Pokemon Logo">
    <div class="wrap_poke--img">
    <img class="pokemon_image" src="${poke.sprites.other["official-artwork"].front_default}" /> 
    </div>
    <div class="datos">
        <h2 class="pokemon_name">${poke.name}</h2>
        <p class="pokemon_id">#${poke.id}</p>
        <div class="contenedor_type">
            ${tiposPokemon}
        </div>
    </div>                
    `
    setTimeout(() => {
        div.classList.remove('activo');
    }, 3000); 

    getPokemon.appendChild(div)
}
