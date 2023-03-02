fetch('data.json')
    .then((response) => response.json())
    .then((json) => {
        json.forEach(element => {
            if(element.yldandmed.piirkond_tekstina == 'Viljandi'){
                console.log(element)
            }
        });
    })