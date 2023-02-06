let tbody = document.getElementById('tbody');

fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=100000')
    .then(res =>res.json())
    .then(data => {
        console.log(data);
        data.results.forEach(element => {
            let newPoke = document.createElement('tr');
            fetch(`${element.url}`)
                .then(res => res.json())
                .then(data => {
                    let numPoke = document.createElement('td');
                    numPoke.innerText = data.id;
                    newPoke.appendChild(numPoke);
                    
                    let imgPoke = document.createElement('img');
                    let spritePoke = document.createElement('td');
                    if (data.sprites.other['official-artwork'].front_default == null) {
                        imgPoke.src = "./public/img/poke-ball.png";
                        spritePoke.appendChild(imgPoke);
                        newPoke.appendChild(spritePoke);
                    } else {
                        imgPoke.src = data.sprites.other['official-artwork'].front_default;
                        spritePoke.appendChild(imgPoke);
                        newPoke.appendChild(spritePoke);
                    }
                    
                    let imgPoke1 = document.createElement('img');
                    let spriteShiny = document.createElement('td');
                    if (data.sprites.other['official-artwork'].front_shiny == null) {
                        imgPoke1.src = "./public/img/poke-ball.png";
                        spriteShiny.appendChild(imgPoke1);
                        newPoke.appendChild(spriteShiny);
                    } else {
                        imgPoke1.src = data.sprites.other['official-artwork'].front_shiny;
                        spriteShiny.appendChild(imgPoke1);
                        newPoke.appendChild(spriteShiny);
                    }
                    //console.log(data.sprites.other['official-artwork']);

                    let namePoke = document.createElement('td');
                    namePoke.innerText = element.name;
                    newPoke.appendChild(namePoke);

                    let typePoke = document.createElement('td');
                    data.types.forEach(element => {
                        let newType = document.createElement('p');
                        newType.innerText = element.type.name;
                        colorType(element, newType)
                        typePoke.appendChild(newType);
                        newPoke.appendChild(typePoke);
                    });
                });
            tbody.appendChild(newPoke);
        });
    });

function colorType(params, params1) {
    if (params.type.name == 'normal') {
        params1.style.color = '#a0a2a0'
    } else if (params.type.name == 'fighting') {
        params1.style.color = '#ff8100'
    } else if (params.type.name == 'flying') {
        params1.style.color = '#82baef'
    } else if (params.type.name == 'poison') {
        params1.style.color = '#923fcc'
    } else if (params.type.name == 'ground') {
        params1.style.color = '#92501b'
    } else if (params.type.name == 'rock') {
        params1.style.color = '#b0ab82'
    } else if (params.type.name == 'bug') {
        params1.style.color = '#92a212'
    } else if (params.type.name == 'ghost') {
        params1.style.color = '#713f71'
    } else if (params.type.name == 'steel') {
        params1.style.color = '#60a2b9'
    } else if (params.type.name == 'fire') {
        params1.style.color = '#e72324'
    } else if (params.type.name == 'water') {
        params1.style.color = '#2481ef'
    } else if (params.type.name == 'grass') {
        params1.style.color = '#3da224'
    } else if (params.type.name == 'electric') {
        params1.style.color = '#fac100'
    } else if (params.type.name == 'psychic') {
        params1.style.color = '#ef3f7a'
    } else if (params.type.name == 'ice') {
        params1.style.color = '#3dd9ff'
    } else if (params.type.name == 'dragon') {
        params1.style.color = '#4f60e2'
    } else if (params.type.name == 'dark') {
        params1.style.color = '#45454a'
    } else if (params.type.name == 'fairy') {
        params1.style.color = '#ef71ef'
    } else if (params.type.name == 'unknown') {
        params1.style.color = '#689a8d'
    } else if (params.type.name == 'shadow') {
        params1.style.color = '#4f3f3c'
    };
};