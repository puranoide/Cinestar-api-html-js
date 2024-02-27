const geteso = async() =>{
    const id = new URLSearchParams(window.location.search).get('id')
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifas`)

    if (data.status == 200){
        const cine = await (data.json())

        let html = `
            <h2>Waos</h2>
        `

        cine.forEach(cinema => {
            html +=`
                <h2>${cinema.Precio}</h2>
            `
        });
        document.getElementById('contenido-interno').innerHTML = html
    }
}
geteso()