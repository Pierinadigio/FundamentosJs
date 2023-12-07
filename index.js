
//FUNCIONES//
const sumar = (num1, num2) => (num1 + num2)
const resultado = sumar (15,20)
console.log(resultado)
console.log("lalala");

//FUNCIONES FLECHA
const miNombre = () =>{
    return 'mi nombre'
}
const nombre = miNombre()
console.log(nombre)


//SI TENGO SOLO UN PARAMETRO PUEDO OMITIR LOS () Y LUEGO DE => PIEDO OMITIR {}
const miNombre2 = nombre2 => 'mi nombre es ' + nombre2;
 const nombre2 = miNombre2('Cistian');
 console.log(nombre2)

 const sumar3 = (num = 2)=>{
    console.log(num + 3)
 }
 sumar3()


 const numero = (num, num1, num2) => {
    return `el numero es ${num + num1 + num2}`
 }
const resul = numero (20, 2, 1)
console.log(resul)

//TEMPLATE STRING -- concatena string con variables- dentro de los {} puedo hacer logica 
const numero2 = (num, num2) => `el numero es ${num + num2}`
const rdo = numero2(50, 2)
console.log(rdo)

//OBJETOS
//declaro un objeto con sus propiedades:   seguidas se :
//propiedades pueden ser strin, integer, booleano, otro objeto, una funcion ect
const mascota = {
    nombre: 'Silvio',
    edad: 10,
    vivo: true

}
//puedo acceder al objeto completo o a cada una de sus propiedades
console.log( mascota.nombre)
console.log( 'edad es ' + mascota.edad + ' anios')


//si le quiero asignar otra propiedad.. fuera del objeto, por ejemplo le agrego un id  lo hago con =
mascota.id = 1
console.log (mascota)

//le agreo una propiedad que sea un array

mascota.colores = ['blanco', 'crema']
console.log (mascota)
console.log (mascota.colores[1])

//DESTRUCTURING OBJECTS
//puedo guardar las propiedades en una cosntante 

const nombreMascota = mascota.nombre
console.log('el nob es ' +nombreMascota)
//pero para es aparece destructuring object donde no tengo que andar creando nombre a las variables para acceder a sus datos

const {edad} = mascota  // accedo a la propiedad sin tener que guardarla con un nombre
console.log(edad)

const {vivo, colores} = mascota  // accedo a una o varias propiedades del objeto. No solo la llamamos sino que tb las estamos creando
console.log(colores)

const Silvio = {
    nombre: 'Silvio',
    edad : 10,
    vacunas: ['quintuple' , 'rabica'],
    madre: {
        nombre: 'Pierina',
        edad: 44,
        direccion: {
            calle: 'Casacuberta',
            numero: 1760
        }
    }


}

const {madre} = mascota