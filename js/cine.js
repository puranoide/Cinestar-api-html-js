const getcine = async() =>{
    const id = new URLSearchParams(window.location.search).get('id')
    const data = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`)
    const tarifa = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifas`)
    const pelis = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas`)

    if (data.status === 200){
        const cine = await (data.json())
        const tari = await (tarifa.json())
        const movies = await (pelis.json())
        let html = `
            <h2>${cine.RazonSocial}</h2>
				<div class="cine-info">
					<div class="cine-info datos">
						<p>${cine.Direccion} - ${cine.Detalle}</p>
						<p>Telefono: ${cine.Telefonos}</p>
                        <p>Numero de salas: ${cine.Salas}</p>
						<br/>
					</div>
				</div>
        `
		k = 0;
        tari.forEach(tarifas => {
            k++;
        });
		for (i = 0; i < k; i++){
			if (i % 2 == 0 || i == 0){
				html += `
			<div class="cine-info">
				<div class="cine-info datos">
					<div class="tabla">
						<div class="fila">
							<div class="celda-titulo">${tari[i].DiasSemana}</div>
							<div class="celda">${tari[i].Precio}</div>
						</div>
					</div>
				</div>
			</div>
			`
			}else{
				html += `
				<div class="cine-info">
					<div class="cine-info datos">
						<div class="tabla">
							<div class="fila impar">
								<div class="celda-titulo">${tari[i].DiasSemana}</div>
								<div class="celda">${tari[i].Precio}</div>
							</div>
						</div>
					</div>
				</div>`
			}
		
		}
		html += `
		<div class="cine-info">
			<div class="aviso">
				<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
			</div>
			<img src="img/cine/${cine.id}.2.jpg"/>
			<br/><br/><h4>Los horarios de cada función están sujetos a cambios sin previo aviso.</h4><br/>
		</div>
		`
		y = 0;
		movies.forEach(movie => {
			y++;
		});
		html +=`
		<div class="cine-info peliculas">
			<div class="tabla">
				<div class="fila">
					<div class="celda-cabecera">Películas</div>
					<div class="celda-cabecera">Horarios</div>
				</div>
			</div>
		</div>
		`
		for (i = 0; i < y; i++){
			if (i % 2 == 0 || i == 0){
				html += `
				<div class="cine-info peliculas">
					<div class="tabla">
						<div class="fila">
							<div class="celda-titulo">${movies[i].Titulo}</div>
							<div class="celda">${movies[i].Horarios}</div>
						</div>
					</div>
				</div>`
			}else{
				html += `
				<div class="cine-info peliculas">
					<div class="tabla">
						<div class="fila impar">
							<div class="celda-titulo">${movies[i].Titulo}</div>
							<div class="celda">${movies[i].Horarios}</div>
						</div>
					</div>
				</div>`
			}
			
		
		}
		html += `
			<div>
				<img style="float:left;" src="img/cine/${cine.id}.3.jpg" alt="Imagen del cine"/>
				<span class="tx_gris">Precios de los juegos: desde S/1.00 en todos los Cine Star.<br/>
					Horario de atención de juegos es de 12:00 m hasta las 10:30 pm. 
					<br/><br/>
					Visitános y diviértete con nosotros. 
					<br/><br/>
					<b>CINESTAR</b>, siempre pensando en tí. 
				</span>		
			</div>
			`
        document.getElementById('contenido-interno').innerHTML = html;
    }
}

getcine()