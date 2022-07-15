
//Consultar envío gratis
alert("Bienvenido, para consultar si su producto cuenta con el servicio de envíos gratis debe ingresar su costo total. Este servicio solamente esta disponible para productos con un costo mayor a USD 400.");

let numero= parseInt(prompt("Ingrese el costo de su producto para consutar el envío gratis")); 

if (numero<400) {
    alert("Su producto tiene un costo de " + numero + " dólares, el costo del envío es de un 10% sumado al costo del producto")  
} else {
    alert("Su producto tiene un costo de " + numero + " dólares, por lo cual tiene el envío gratis")  
}
 

//Lista de compras de productos
let producto="";
alert("Bienvenidos a Apple Market, esta es una lista de productos a comprar, para finalizar la lista escriba ESC")


while (producto!="ESC"){
    producto=prompt("Ingrese el nombre de un producto");
    producto=producto.toUpperCase();
    console.log(producto)
    alert("Usted agregó "+producto);
}
alert("Gracias por comprar nuestros productos")


//Buscar Modelos
alert("Ingresa el modelo de celular o mac siguiendo con un -, ejemplo IPHONE-XR, MACBOOK-AIR")

let modelo=prompt("Escribe el modelo en el que estas interesado/a");
modelo=modelo.toUpperCase();

switch (modelo) {
    case "IPHONE-XR":
        alert("Has elegido el " + modelo)
        break;
    case "IPHONE-X":
        alert("Has elegido el " + modelo)
        break;
    case "MACBOOK-AIR":
    alert("Has elegido el " + modelo)
    break;
    case "MACBOOK-15":
    alert("Has elegido el " + modelo)
    break;
    case "IPHONE-8":
    alert("Has elegido el " + modelo)
    break;
    case "IPHONE-7":
    alert("Has elegido el " + modelo)
    break;
    default:
        alert("No disponemos en stock actualmente")
}

//Detalles de los productos

// function productoMovil(nombre, modelo,almacenamiento,precio){
//     this.name=nombre
//     this.model=modelo
//     this.storage=almacenamiento
//     this.price=precio
// }

// const producto1= new productoMovil("Iphone","XR","128GB","USD 1050");
// console.log(producto1)

// for(propiedad in producto1){
//     console.log(propiedad+ ": "+producto1[propiedad])
// }