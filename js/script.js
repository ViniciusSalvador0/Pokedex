const nomePokemon = document.querySelector('.pokemon__name');
const numeroPokemon = document.querySelector('.pokemon__number');
const imagemPokemon = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let SetPokemon = 1;

const buscarPokemon = async(pokemon) => {
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    
    if (APIResponse.status == 200) {
        const data = await APIResponse.json()
        return data;
    }
}

const mostrarPokemon = async(pokemon) => {

    nomePokemon.innerHTML = 'Loading...';
    numeroPokemon.innerHTML = '';

    const data = await buscarPokemon(pokemon);

    if (data) {
        imagemPokemon.style.display = 'block'
        nomePokemon.innerHTML = data.name;
        numeroPokemon.innerHTML = data.id;

        imagemPokemon.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        SetPokemon = data.id;

    } else {
        imagemPokemon.style.display = 'none'
        nomePokemon.innerHTML = 'Not Found :C';
        numeroPokemon.innerHTML = '';
    }
}

mostrarPokemon('25')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    mostrarPokemon(input.value.toLowerCase());
})

buttonPrev.addEventListener('click', () => {
    if (SetPokemon > 1) {
        SetPokemon -= 1;
        mostrarPokemon(SetPokemon);
    }
})

buttonNext.addEventListener('click', () => {
    SetPokemon += 1;
    mostrarPokemon(SetPokemon);
})

mostrarPokemon(SetPokemon)
