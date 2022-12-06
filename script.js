//Carlos Agüero Marquizani
//TNS Informática m/ Ciberseguridad
//Evaluación Unidad 3

//Obtener DOM body, cambio de fuente a la página y el color de fondo
let body = document.body
body.style.fontFamily = 'Calibri'
body.style.backgroundColor = '#CFF5E7'

//Crear salto de linea
const saltoLinea = (elemento) =>{
    let br = document.createElement('br')
    elemento.appendChild(br)
  }

  //Titulo de la pagina con diseño
const titulo1 = document.createElement('h1')
titulo1.innerHTML = 'Sistema de Cálculo del alumno más longevo'
titulo1.style.textAlign = 'center'
titulo1.style.color = '#0D4C92'
body.appendChild(titulo1)



  //Div que contiene input ingresado por el usuario
const cajaDivUser = document.createElement('div')
cajaDivUser.style.backgroundColor = '#A0E4CB'
cajaDivUser.style.borderRadius = '7px'
cajaDivUser.style.width = '270px'
cajaDivUser.style.height = '110px'
cajaDivUser.style.paddingLeft = '20px'
cajaDivUser.style.paddingTop = '20px'
cajaDivUser.style.marginLeft = '40%'
body.appendChild(cajaDivUser)

  //Input donde el usuario ingresa Nombre
const nombre = document.createElement("label")
nombre.innerHTML = "Nombre: "
cajaDivUser.appendChild(nombre)
const cajaNombre = document.createElement("input")
cajaNombre.setAttribute('placeholder', 'Ej. Carlos')
cajaNombre.id = 'cajaNombre'
cajaNombre.className = 'allInputs'
cajaDivUser.appendChild(cajaNombre)
saltoLinea(cajaDivUser)

  //Input donde el usuario ingresa Apellido
const apellido = document.createElement("label")
apellido.innerHTML = "Apellidos: "
cajaDivUser.appendChild(apellido)
const cajaApellido = document.createElement("input")
cajaApellido.setAttribute('placeholder', 'Ej. Agüero Marquizani')
cajaApellido.id = 'cajaApellido'
cajaApellido.className = 'allInputs'
cajaDivUser.appendChild(cajaApellido)
saltoLinea(cajaDivUser)
  //Input donde el usuario ingresa la Edad
const edad = document.createElement("label")
edad.innerHTML = "Edad: "
cajaDivUser.appendChild(edad)
const cajaEdad = document.createElement("input")
cajaEdad.setAttribute('placeholder', 'Ej. 25')
cajaEdad.setAttribute('type', 'number')
cajaEdad.id = 'cajaEdad'
cajaEdad.className = 'allInputs'
cajaDivUser.appendChild(cajaEdad)
saltoLinea(cajaDivUser)
  //Creación botón agregar
let button = document.createElement('button')
button.innerText = 'Ingresar'
button.style.backgroundColor = '#7EC6FE'
button.style.border = '4px solid #034980'
button.style.borderRadius = '4px'
button.onclick = () => ingresar()
cajaDivUser.appendChild(button)

  //Creación botón eliminar
let buttonElimnar = document.createElement('button')
buttonElimnar.innerText = 'Eliminar'
buttonElimnar.style.backgroundColor = '#FF7E7E'
buttonElimnar.style.border = '4px solid #930000'
buttonElimnar.style.borderRadius = '4px'
buttonElimnar.onclick = () => eliminar()
cajaDivUser.appendChild(buttonElimnar)

  //Creación botón intrucción
let buttonInstruccion = document.createElement('button')
buttonInstruccion.innerText = 'Instrucción'
buttonInstruccion.style.backgroundColor = '#FFF557'
buttonInstruccion.style.border = '4px solid #817A00'
buttonInstruccion.style.borderRadius = '4px'
buttonInstruccion.onclick = () => instruccion()
cajaDivUser.appendChild(buttonInstruccion)

//Div
const cajaDiv = document.createElement('div')
cajaDiv.style.display ='flex'
cajaDiv.style.justifyContent = 'center'
cajaDiv.style.alignItems = 'center'
body.appendChild(cajaDiv)
   
//Crear tabla
const cajaTabla = document.createElement('table')
cajaTabla.setAttribute('border', '1')
cajaTabla.style.backgroundColor = '#A0E4CB'
cajaTabla.style.border = 'thick solid #59C1BD'
cajaTabla.style.borderRadius = '10px'
cajaDiv.appendChild(cajaTabla)
   
//Crear fila
const filaEncabezado = document.createElement('tr')
cajaTabla.appendChild(filaEncabezado)
   
//Crea celda Nombre
const celdaNombre = document.createElement('td')
celdaNombre.innerText = 'Nombre'
filaEncabezado.appendChild(celdaNombre)
   
//Crea celda Apellidos
const celdaApellidos = document.createElement('td')
celdaApellidos.innerText = 'Apellidos'
filaEncabezado.appendChild(celdaApellidos)
  
//Crea celda Edad
const celdaEdad = document.createElement('td')
celdaEdad.innerText = 'Edad'
filaEncabezado.appendChild(celdaEdad)

// Div que contiene al alumno más adulto
const divFooter = document.createElement('div')
divFooter.style.height = '50px'
divFooter.style.display ='flex'
divFooter.style.justifyContent = 'center'
divFooter.style.alignItems = 'center'
body.appendChild(divFooter)

const textoLongevo = document.createElement('label')
textoLongevo.innerText = 'El alumno más longevo es:  '
divFooter.appendChild(textoLongevo)

const textoLongevoEstatico = document.createElement('label')
textoLongevoEstatico.innerText = ' '
textoLongevoEstatico.id = 'textoLongevoEstatico'
divFooter.appendChild(textoLongevoEstatico)

const creditos = document.createElement('h6')
creditos.innerHTML = `
Creado por: Carlos Agüero Marquizani <br>
Institución: CFT Estatal Región de Valparaíso <br>
Carrera: TNS Informática m/Ciberseguridad <br>
Asignatura: Desarrollo y Diseño de Software
 `
creditos.style.textAlign = 'center'
creditos.style.color = '#0D4C92'
body.appendChild(creditos)
   
//Constructor Alumnos
const alumnos = [
  {
    nombre: cajaNombre.value,
    apellidos: cajaApellido.value,
    edad: cajaEdad.value
  }
]

let mayorEdad = 0

ingresar = () => {

alumnos.push({
  nombre: document.getElementById('cajaNombre').value,
  apellidos: document.getElementById('cajaApellido').value,
  edad: document.getElementById('cajaEdad').value
})

//Creacion de fila correspondiente a lo que el usuario ingresa
const filaCuerpo = document.createElement('tr')
filaCuerpo.className = 'filaCuerpo'
cajaTabla.appendChild(filaCuerpo)

const celdaNombreCuerpo = document.createElement('td')
celdaNombreCuerpo.innerText = cajaNombre.value
filaCuerpo.appendChild(celdaNombreCuerpo)

const celdaApellidosCuerpo = document.createElement('td')
celdaApellidosCuerpo.innerText = cajaApellido.value
filaCuerpo.appendChild(celdaApellidosCuerpo)

const celdaEdadCuerpo = document.createElement('td')
celdaEdadCuerpo.innerText = cajaEdad.value
filaCuerpo.appendChild(celdaEdadCuerpo)

//Recorremos el arreglo alumnos
alumnos.forEach(i => {
  //Usamos sentencia condicional para ver quien es la persona con mayor edad
  if (mayorEdad < i.edad){
    mayorEdad = i.edad
    const textoLongevoDinamico = document.getElementById('textoLongevoEstatico')
    textoLongevoDinamico.innerText = ` ${i.nombre} ${i.apellidos}`
    divFooter.appendChild(textoLongevoDinamico)
  }

})
limpiarInputs()

}


eliminar = () => {
  const confirmar = confirm('¿Esta seguro que desea borrar el registro?')
  if (confirmar == true) {
  mayorEdad = 0
  alumnos.splice(1)
  const textoLongevoDinamicoDelete = document.getElementById('textoLongevoEstatico')
  textoLongevoDinamicoDelete.innerText = ''
  divFooter.appendChild(textoLongevoDinamicoDelete)

  const eliminarCuerpoTabla = document.querySelectorAll('.filaCuerpo')
  eliminarCuerpoTabla.forEach(tabla =>{
    tabla.remove()
  })
  console.log(alumnos)
  }
  limpiarInputs()
    
}

limpiarInputs = () => {
  const limpiarInputs = document.querySelectorAll('.allInputs')
  limpiarInputs.forEach(i =>{
  i.value = ""
  console.log("Entramos el limpiar input")
})
}

instruccion = () => {
  alert(`
  "Modo de uso"
  1.- Llene el campo 'Nombre', 'Apellidos' y 'Edad'.
  2.- Click en "Ingresar", para añadir alumno al registro.
  3.- Click en "Elimnar", para  borrar todos los campos de la tabla.
  4.- Al inferior de la tabla se muestra al alumno de mayor edad ingresado.
  `)
}

