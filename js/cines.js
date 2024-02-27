const getCines = async() => {
    const data = await fetch('https://oaemdl.es/cinestar_sweb_php/cines')
    if (data.status === 200){
        const cines = await data.json()
        console.log(cines)
        let html = `<br/><h1>Nuestros Cines</h1><br/>`
        cines.forEach(cine => {
            html += `
            <div class="contenido-cine">
                <img src="img/cine/${cine.id}.1.jpg" width="227" height="170"/>
                <div class="datos-cine">
                    <h4>${cine.RazonSocial}</h4><br/>
                    <span>${cine.Direccion} - ${cine.Detalle}<br/><br/>Teléfono: ${cine.Telefonos}</span>
                </div>
                <br/>
                    <a href="cine.html?id=${cine.id}">
                        <img src="img/varios/ico-info2.png" width="150" height="40"/>
                    </a>
			</div>
            `
        });
        document.getElementById('contenido-interno').innerHTML = html;
    }
}

getCines();


/*
                <br/><h1>Nuestros Cines</h1><br/>
                    <div class="contenido-cine">
                        <img src="img/cine/1.1.jpg" width="227" height="170"/>
                        <div class="datos-cine">
                            <h4>Excelsior</h4><br/>
                            <span>Jirón de la Unión 780 - Lima<br/><br/>Teléfono: 714-1865 anexo 865</span>
                        </div>
                        <br/>
                        <a href="http://www.cinestar.com.pe/multicines/cine/Cinestar-Excelsior">
                            <img src="img/varios/ico-info2.png" width="150" height="40"/>
                        </a>
				</div>
*/

