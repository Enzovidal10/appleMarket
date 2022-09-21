
//Covierto el array con JSON.parse el texto plano en un objeto nuevamente.
//Array de productos Iphone + productos Mac
let enCarrito=JSON.parse(sessionStorage.getItem('ProductosCarrito')) 
console.log(enCarrito)

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
        <div class="btnBorrar" id="${item.botonid}">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path></svg>
        </div>
    </div>
    ` 
    });

}
//Llamo a la función
cards(enCarrito)


//Boton Pagar Función
let btnpagar=document.getElementById("btnPagar")

//Sweet Alert al pagar el producto
btnpagar.addEventListener('click', PagarProducto)

function PagarProducto(){
    swal({
        text:"Gracias por comprar nuestros productos!!",
        icon: "success",
        button: ":D",
      }); 

      sessionStorage.clear()
      setInterval("location.reload()",2000)
}

//Filtrar en array y borrar
let botones=document.querySelectorAll(".btnBorrar")
botones.forEach(item=>{
    item.onclick=(e)=>{
        //obtengo el id del boton
        let id=item.id
        //filtro por el id que corresponda al boton clickeado con el id del producto en el array.
        let filtrar=enCarrito.find(e=>e.botonid==id)
        //Encuentro posicion del producto en el array
        let posRemover=enCarrito.indexOf(filtrar)
        //Elimino el producto del array 
        let removerItem=enCarrito.splice(posRemover,1)
        //Actualizo la tienda
        let actualizartienda=sessionStorage.setItem('ProductosCarrito', JSON.stringify(enCarrito))
        
        Toastify({
            text: "Producto eliminado",
            className: "info",
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
              color:"black",
            }
          }).showToast();
        setInterval("location.reload()",500)
    }
})

//Funcion agregar numero al carrito
function agregarNumeroCarrito(){
    //Suma de la cantidad de productos en ambos carritos
    let cantProductos=enCarrito.length;
    let iconoCarrito=document.getElementById("numCarrito")
    //Imprimo el numero en el span carrito
    iconoCarrito.innerText=cantProductos
}

//Llamo a la función.
agregarNumeroCarrito()