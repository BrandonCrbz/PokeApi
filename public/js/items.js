let tbody = document.getElementById('tbody');

fetch("https://pokeapi.co/api/v2/item/?offset=0&limit=2050")
    .then(res => res.json())
    .then(data => {
        //console.log(data.results)
        data.results.forEach(element => {
            let newItems = document.createElement('tr');
            fetch(element.url)
                .then(res => res.json())
                .then(data => {
                    let numItems = document.createElement('td');
                    numItems.innerText = data.id;
                    newItems.appendChild(numItems);
                    
                    let sprite = document.createElement('img');
                    if (data.sprites.default == null) {
                        sprite.src = '../img/no-image-md.png'
                    } else {
                        sprite.src = data.sprites.default;
                    }
                    console.log(data.sprites);
                    let spriteItems = document.createElement('td');
                    spriteItems.appendChild(sprite);
                    newItems.appendChild(spriteItems);

                    let nameItems = document.createElement('td');
                    nameItems.innerText = data.name
                    newItems.appendChild(nameItems);

                    let utilityItems = document.createElement('td');
                    if (!data.effect_entries[0]) {
                        utilityItems.innerText = 'no effect'
                    } else {
                        utilityItems.innerText = data.effect_entries[0].effect;
                    }
                    utilityItems.style.textAlign = 'start';
                    utilityItems.style.fontSize = '15px';
                    newItems.appendChild(utilityItems);

                    tbody.appendChild(newItems);
                });
        });
    })