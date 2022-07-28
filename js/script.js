const nomePokemon = document.querySelector('.pokemon__name');
const numeroPokemon = document.querySelector('.pokemon__number');
const imagemPokemon = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

const buscarPokemon = async(pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
    const data = await APIResponse.json()
    return data
}

const mostrarPokemon = async(pokemon) => {
    const data = await buscarPokemon(pokemon);

    nomePokemon.innerHTML = data.name;
    numeroPokemon.innerHTML = data.id;

    imagemPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default']

    input.value = ''
}

mostrarPokemon('25')

form.addEventListener('submit', (event) => {

    event.preventDefault();
    mostrarPokemon(input.value);

})

