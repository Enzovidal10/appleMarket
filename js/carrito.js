
//Covierto el array con JSON.parse el texto plano en un objeto nuevamente.
let enCarrito=JSON.parse(localStorage.getItem('ProductosCarrito'))  

//Función para crear CARDS automáticas
function cards(enCarrito){
    let contenedor= document.querySelector('.productos');
    enCarrito.forEach(item => {
        contenedor.innerHTML +=
    `
    <div class="producto">
        <div class="img">
            <img id="img-carrito" src="${item.img}" alt="">
        </div>
        <ul class="texto-c">
            <li class="title-carrito">${item.Modelo}</li>
            <li><b>Almacenamiento:</b> ${item.Almacenamiento}</li>
            <li><b>Color:</b> ${item.Color}.</li>
            <li><b>Precio:</b> USD ${item.Precio}</li>
        </ul> 
    </div>
    ` 
    });

}
//Llamo a la función
cards(enCarrito)

let btnpagar=document.getElementById("btnPagar")

//Sweet Alert al pagar el producto
btnpagar.addEventListener('click', PagarProducto)

function PagarProducto(){
    swal({
        text:"Gracias por comprar nuestros productos!!",
        icon: "success",
        button: ":D",
      }); 

      localStorage.clear()
      setInterval("location.reload()",3000)
}

//Funcion agregar numero al carrito
function agregarNumeroCarrito(){
    let cantProductos=enCarrito.length
    let iconoCarrito=document.getElementById("numCarrito")

    iconoCarrito.innerText=cantProductos
}

agregarNumeroCarrito()

