const submitButton = document.getElementById('submit-button');
const searchBar = document.getElementById('search-bar');
const card = document.querySelector('.card-container');

let userSearch;

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    userSearch = searchBar.value
    console.log(userSearch)

    async function getPokemon(){
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userSearch}`)
        let data = await response.json()

        return data
    }
    getPokemon().then( pokemon => {
        console.log(pokemon)
        const pokemonName = pokemon.name;
        const pokemonWeight = pokemon.weight;
        const pokemonHeight = pokemon.height;
        const pokemonImage = pokemon.sprites.front_default;
        const pokemonHP = pokemon.stats[0].base_stat;
        const pokemonAttack = pokemon.stats[1].base_stat;
        let pokeType1 = pokemon.types[0].type.name;
        let pokeType2 = ''
        if(pokemon.types.length == 2) {
            console.log('has two types')
            pokeType2 = '/ ' + pokemon.types[1].type.name;
        } else pokeType2 = '';


        card.innerHTML = `
            <div class="card">
            <img src="${pokemonImage}" class="poke-image">
            <h1 id="pokemon-name">${pokemonName}</h1>
            <span id="bar"></span>
            <div class="hp-xp-section">
                <p>HP <span id="hp">${pokemonHP}</span></p>
                <p style="color: grey; opacity: 0.25;"> | </p>
                <p>ATTACK <span id="xp">${pokemonAttack}</span></p>
            </div>
    
            <button class="transfer-btn">Transfer</button>
    
            <div class="pokemon-info-container">
                <p id="type">${pokeType1}  ${pokeType2} </p>
                <p style="color: grey; opacity: 0.25;"> | </p>
                <p id="weight">${pokemonWeight} </p>
                <p style="color: grey; opacity: 0.25;"> | </p>
                <p id="height">${pokemonHeight} </p>
            </div>
    
            <div class="pokemon-info-container-secondary">
                <p>Type: </p>
                <p>Weight: </p>
                <p>Height: </p>
            </div>
            </div>
        `
    })

})








// async function getPokemons() {
//     let response = await fetch('https://pokeapi.co/api/v2/pokemon/charizard')
//     let data = await response.json();
//     return data
// }

// getPokemons().then( pokemons => {
//     // console.log(pokemons.sprites.front_default)
//     const pokemonImg = pokemons.sprites.front_default;
//     const pokemonName = pokemons.name;
//     const pokemonHp = pokemons.stats[0].base_stat;
//     const pokemonAttack = pokemons.stats[1].base_stat;
//     const pokemonType = pokemons.types[0].type.name + '/' +  pokemons.types[1].type.name;
//     const pokemonWeight = pokemons.weight;
//     const pokemonHeight = pokemons.height;
//     let height = pokemonHeight * 0.1
//     // console.log('Name: ' + pokemons.name)
//     // console.log('Height: ' + pokemons.height + 'm')
//     // console.log(pokemons.sprites.front_default)
//     // console.log('Type: ' + pokemons.types[0].type.name)
//     // console.log('Type: ' + pokemons.types[1].type.name)
//     // console.log('HP: ' + pokemons.stats[0].base_stat)
//     // console.log('weight: ' + pokemons.weight + 'kg')
//     // console.log('Attack: ' + pokemons.stats[1].base_stat)

//     return card.innerHTML = `
        
//         <img src="${pokemonImg}" class="poke-image">
//         <h1 id="pokemon-name">${pokemonName}</h1>
//         <span id="bar"></span>
//         <div class="hp-xp-section">
//             <p>HP <span id="hp">${pokemonHp}</span></p>
//             <p style="color: grey; opacity: 0.25;"> | </p>
//             <p>ATTACK <span id="xp">${pokemonAttack}</span></p>
//         </div>
//         <button class="transfer-btn">Transfer</button>
//         <div class="pokemon-info-container">
//             <p id="type">${pokemonType} </p>
//             <p style="color: grey; opacity: 0.25;"> | </p>
//             <p id="weight">${pokemonWeight}kg </p>
//             <p style="color: grey; opacity: 0.25;"> | </p>
//             <p id="height">${height.toFixed(1)}m </p>
//         </div>
//         <div class="pokemon-info-container-secondary">
//             <p>Type: </p>
//             <p>Weight: </p>
//             <p>Height: </p>
//         </div>
//     `
// })