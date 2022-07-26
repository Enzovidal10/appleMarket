
// //Consultar envío gratis
// alert("Bienvenido, para consultar si su producto cuenta con el servicio de envíos gratis debe ingresar su costo total. Este servicio solamente esta disponible para productos con un costo mayor a USD 400.");

// let numero= parseInt(prompt("Ingrese el costo de su producto para consutar el envío gratis")); 

// if (numero<400) {
//     alert("Su producto tiene un costo de " + numero + " dólares, el costo del envío es de un 10% sumado al costo del producto. "+"COSTO TOTAL + ENVÍO: "+(numero+numero*0.10)+" dólares.")  
// } else {
//     alert("Su producto tiene un costo de " + numero + " dólares, por lo cual tiene el envío gratis")  
// }
 

// //Lista de compras de productos
// let producto="";
// alert("Bienvenidos a Apple Market, esta es una lista de productos a comprar, para finalizar la lista escriba SALIR.")


// while (producto!="SALIR"){
//     producto=prompt("Ingrese el nombre de un producto");
//     producto=producto.toUpperCase();
//     console.log(producto)
//     alert("Usted agregó "+producto)
// }
// alert("Gracias por comprar nuestros productos")


// //Buscar Modelos
// alert("Ingresa el modelo de celular o mac siguiendo con un -, ejemplo IPHONE-XR, MACBOOK-AIR")

// let modelo=prompt("Escribe el modelo en el que estas interesado/a");
// modelo=modelo.toUpperCase();

// switch (modelo) {
//     case "IPHONE-XR":
//         alert("Has elegido el " + modelo)
//         break;
//     case "IPHONE-X":
//         alert("Has elegido el " + modelo)
//         break;
//     case "MACBOOK-AIR":
//     alert("Has elegido el " + modelo)
//     break;
//     case "MACBOOK-15":
//     alert("Has elegido el " + modelo)
//     break;
//     case "IPHONE-8":
//     alert("Has elegido el " + modelo)
//     break;
//     case "IPHONE-7":
//     alert("Has elegido el " + modelo)
//     break;
//     default:
//         alert("No disponemos en stock actualmente")
// }

// //Detalles de los productos

// function productoMovil(nombre, modelo,almacenamiento,precio){
//     this.name=nombre
//     this.model=modelo
//     this.storage=almacenamiento
//     this.price=precio
// }

// const producto1= new productoMovil("Iphone","XR","128GB","USD 1050");
// const producto2= new productoMovil("Iphone","XR","64GB","USD 950");
// const producto3= new productoMovil("Iphone","XR","32GB","USD 750");
// const producto4= new productoMovil("Iphone","X","128GB","USD 900");
// const producto5= new productoMovil("Iphone","X","64GB","USD 650");
// console.log(producto1)
// console.log(producto2)
// console.log(producto3)
// console.log(producto4)
// console.log(producto5)

//ARRAY con Objetos
let productos=[
    //Iphone XR
    {"Modelo":"IPHONE XR",
     "Almacenamiento":"64GB",
     "Color":"Azul,Dorado,Negro",
     "Camara":"48 MP",
     "Precio":1000},

     {"Modelo":"IPHONE XR",
     "Almacenamiento":"128GB",
     "Color":"Azul,Blanco,Negro",
     "Camara":"48 MP",
     "Precio":1300},
     
     //Iphone 13
     {"Modelo":"IPHONE 13",
     "Almacenamiento":"64GB",
     "Color":"Dorado,Negro",
     "Camara":"64 MP",
     "Precio":1400},

     {"Modelo":"IPHONE 13",
     "Almacenamiento":"128GB",
     "Color":"Blanco,Negro",
     "Camara":"64 MP",
     "Precio":1600},
];

console.log(productos)

//For para mostrar cada uno de los productos ingresados hasta el momento
for (let i = 0; i < productos.length; i++) {
   console.log(productos[i])
    
}

//Nuevos modelos de Iphone X en ultimo lugar.
productos.push({"Modelo":"IPHONE X",
"Almacenamiento":"32GB",
"Color":"Azul,Dorado,Negro",
"Camara":"48 MP",
"Precio":700})

productos.push({"Modelo":"IPHONE X",
"Almacenamiento":"64GB",
"Color":"Azul,Dorado,Negro,Blanco",
"Camara":"48 MP",
"Precio":700})
console.log(productos)

//Agregué nuevo modelo iphone XR en primer lugar.
productos.unshift({"Modelo":"IPHONE XR",
"Almacenamiento":"32GB",
"Color":"Azul,Dorado,Negro",
"Camara":"48 MP",
"Precio":900})

console.log(productos)

//Mostrar ultimo IphoneX
console.log(productos[6])