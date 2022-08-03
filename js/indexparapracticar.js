
 
//Buscar Modelos
alert("Ingresa el modelo de IPhone o Mac, que desea comprar")

let modelo=prompt("Escribe el modelo en el que estas interesado/a");
modelo=modelo.toUpperCase();

switch (modelo) {
    case "IPHONE XR":
        alert("Has elegido el " + modelo+" Tenemos en stock")
        break;
    case "IPHONE X":
        alert("Has elegido el " + modelo+" Tenemos en stock")
        break;
    case "MACBOOK AIR":
        alert("Has elegido el " + modelo+" Tenemos en stock")
    break;
    case "MACBOOK 15":
        alert("Has elegido el " + modelo+" Tenemos en stock")
    break;
    case "IPHONE 8":
        alert("Has elegido el " + modelo+" Tenemos en stock")
    break;
    case "IPHONE 7":
        alert("Has elegido el " + modelo+" Tenemos en stock")
    break;
    default:
        alert("No disponemos en stock actualmente")
}

//Función Detalles de los productos 
function ProductoMovil(modelo,color,almacenamiento,precio){
    this.model=modelo
    this.color=color
    this.storage=almacenamiento
    this.price=precio
}

const producto1= new ProductoMovil("Iphone XR","Blanco y Negro","128GB","USD 1050");
const producto2= new ProductoMovil("Iphone XR","Dorado","64GB","USD 950");
const producto3= new ProductoMovil("Iphone XR","Negro y Dorado","32GB","USD 750");
const producto4= new ProductoMovil("Iphone X","Blanco","128GB","USD 900");

console.log("Aquí se muestran los productos que ya están agregados de la Función")
console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log(producto4)

//Ingresar manualmente un producto
const producto5= new productoMovil(prompt("Ingrese modelo"),prompt("Ingrese color"),prompt("Ingrese almacenamiento"),prompt("Ingrese precio"));

console.log("Aquí se muestran el producto agregado recientemente")
console.log(producto5)

//ARRAY con Objetos
let productos=[
    //Iphone XR
    {"Modelo":"IPHONE XR",
     "Color":"Azul,Dorado,Negro",
     "Almacenamiento":"64GB",
     "Camara":"48 MP",
     "Precio":1000},

     {"Modelo":"IPHONE XR",
     "Color":"Azul,Blanco,Negro",
     "Almacenamiento":"128GB",
     "Camara":"48 MP",
     "Precio":1300},
     
     //Iphone 13
     {"Modelo":"IPHONE 13",
     "Color":"Dorado,Negro",
     "Almacenamiento":"64GB",
     "Camara":"64 MP",
     "Precio":1400},

     {"Modelo":"IPHONE 13",
     "Color":"Blanco,Negro",
     "Almacenamiento":"128GB",
     "Camara":"64 MP",
     "Precio":1600},
];

//Nuevos modelos de Iphone X en ultimo lugar.
productos.push({"Modelo":"IPHONE X",
"Color":"Azul,Dorado,Negro",
"Almacenamiento":"32GB",
"Camara":"48 MP",
"Precio":700})

productos.push({"Modelo":"IPHONE X",
"Color":"Azul,Dorado,Negro,Blanco",
"Almacenamiento":"64GB",
"Camara":"48 MP",
"Precio":900})

//Agregué nuevo modelo iphone XR en primer lugar.
productos.unshift({"Modelo":"IPHONE XR",
"Color":"Azul,Dorado,Negro",
"Almacenamiento":"32GB",
"Camara":"48 MP",
"Precio":900})

console.log("Aquí se muestran los productos del ARRAY")
//For para mostrar cada uno de los productos ingresados hasta el momento
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i])   
 }

 //filter para buscador
 let ingreso=prompt("Ingresar el modelo en el buscador");
 ingreso=ingreso.toUpperCase()
 alert("Usted ingresó "+ingreso)

const  filtro= productos.filter(producto => producto.Modelo===ingreso);
console.log(filtro)



