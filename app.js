/* referenciar primmero a los elementos del dom */

/* vincular a partir de variables, el elemento html a js a partir del id */


/* vincular inputs */
const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

/* vincular parrafos */
const textoRojo = document.getElementById('texto-rojo');
const textoVerde = document.getElementById('texto-verde');
const textoAzul = document.getElementById('texto-azul');


/* tres variables para guardar el valor inicial del input, el valor de su
propiedad value  - notacion de punto */

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

/* actualizar texto de los parrafos. agregamos el texto con innerText
y luego lo vinculamos a las variables que creammos antes */

textoRojo.innerText = rojo;
textoVerde.innerText = verde;
textoAzul.innerText = azul;

/* hasta aqui, solo podemos ver en los parrafos
los valores iniciales.
con la siguiente funcion vamos a actualizar esos valores
segun cambien los valores en el input */

function actualizarColor(rojo, verde, azul) {
	/* uso plantillas literales para actualizar un valor con las variables que ya creamos */
	const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
	
	/* actualizar luego el color de fondo del body */
	/* esto describe el cambio que queremos */
	document.body.style.backgroundColor = colorRGB;
}

/* definimos ahora el evento que genera el cambio, utilizando la funcion creada */

/* para actualizar el inputRojo */
/* change es un tipo de evento, como click */
/* el segundo parametro es una funcion flecha */
inputRojo.addEventListener('change', (e) => {
	rojo = e.target.value;
	textoRojo.innerText = rojo; /* muestra el numero en pantalla, value actualizado */
	actualizarColor(rojo, verde, azul);
	/* cuando llamo a la funcion, entrego un nuevo valor para rojo
	y los otros dos, verde y azul sin modificar todavia */
});

/* la funcion flecha le dice a rojo, que "limpie con target" el valor por defecto
y lo actualice en su "value" actual */


/* repetimos para los proximos colores/parametros */

inputVerde.addEventListener('change', (e) => {
	verde = e.target.value;
	textoVerde.innerText = verde; 
	actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e) => {
	azul = e.target.value;
	textoAzul.innerText = azul; 
	actualizarColor(rojo, verde, azul);
});