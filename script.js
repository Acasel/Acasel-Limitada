
const selectTamaño = document.getElementById('tamaño');
const coloresDiv = document.querySelector('.colores');
const colorElegido = document.getElementById('color-elegido');
const stockDisponible = document.getElementById('stock-disponible');
const comprarBtn = document.getElementById('comprar-btn');

let tamañoSeleccionado = '';
let colorSeleccionado = '';

const stockProductos = {
  "1_1_2": { 
    "Negro": 6
  },
  "2": {      
    "Negro": 2,
    "Blanco": 3,
    "Gris": 4,
	"Morado": 3,
	"Burdeo": 2,
	"Azul": 2,
	"Calipso": 4,
	"Rojo": 1
  },
  "king": {
    "Negro": 1,
    "Blanco": 1,
    "Gris": 2,
	"Azul": 2,
	"Burdeo": 3,
	"Calipso": 1,
	"Morado": 2,
	"Rojo": 1
  }
};
function actualizarColores() {
  if (!stockProductos[tamañoSeleccionado]) return;

  coloresDiv.innerHTML = '';
  colorElegido.textContent = 'Color elegido: ninguno';
  stockDisponible.textContent = 'Stock disponible: --';
  colorSeleccionado = '';

  const colores = stockProductos[tamañoSeleccionado];

  for (const color in colores) {
    const boton = document.createElement('button');
    boton.type = 'button';
    boton.className = `color ${color.toLowerCase()}`;
    boton.textContent = "";
    boton.title = color;
    boton.dataset.color = color;

    boton.addEventListener('click', () => {
      colorSeleccionado = color;

      colorElegido.textContent = `Color elegido: ${color}`;
      stockDisponible.textContent = `Stock disponible: ${colores[color]}`;

      coloresDiv.querySelectorAll('button')
        .forEach(b => b.classList.remove('seleccionado'));

      boton.classList.add('seleccionado');

      comprarBtn.href =
        `https://wa.me/56973562189?text=Hola,%20quiero%20comprar%20un%20juego%20de%20Sábanas%20${tamañoSeleccionado.replace('_',' ')}%20plaza%20Color:%20${color}`;
    });

    coloresDiv.appendChild(boton);
  }
}
selectTamaño.addEventListener('change', () => {
  tamañoSeleccionado = selectTamaño.value;
  actualizarColores();
});