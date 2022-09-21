//Función de CARDS para Mac

let productos2=JSON.parse(sessionStorage.getItem('Totalproductos'))
//Función para crear CARDS automáticas

function cards(productos2){
    let container= document.querySelector('.grid-card');
    productos2.forEach(item => {
        if(item.botonid>6){
        container.innerHTML +=
        `
        <div class="card">
            <div class="card-img">
                <img src="${item.img}" alt="" srcset="">
            </div>
            <div class="body-card">
                <ul>
                    <li class="desc">${item.desc}OFF</li>
                    <li class="modelo">${item.Modelo}</li>
                    <li><b>Color:</b> ${item.Color}</li>
                    <li><b>Procesador:</b> ${item.Procesador}</li>
                    <li><b>Ram:</b> ${item.Ram}</li>
                    <li><b>Almacenamiento:</b> ${item.Almacenamiento}</li>
                    <li class="price"><b>Precio:</b> USD ${item.Precio}</li>
                </ul>
                <button  id="${item.botonid}" class="btnComprar">Comprar</button>
            </div>
        </div>
    `}
    });  
    
}

cards(productos2);

//Barra de Búsqueda (SEARCH)

document.addEventListener('keyup', e=>{
   
    if (e.target.matches('#buscador')){
    
        document.querySelectorAll('.card').forEach(card=>{
    
            card.textContent.toLowerCase().includes(e.target.value.toLowerCase())
    
            ?card.classList.remove("filtro")
            :card.classList.add("filtro")
    })
    }
    
    })

    //Sweet Alert
    const botones=document.querySelectorAll(".btnComprar")

    //Array carrito
    let listaIphone=JSON.parse(sessionStorage.getItem('ProductosCarrito'))
    console.log(listaIphone)
   

    //Recorremos cada boton del array botones(ya que hay muchos con la misma clase)
    for(boton of botones){
        boton.onclick= (e)=>{
            //Id del boton clickeado.
        let id=e.target.id
        //Filtramos el id del btn con el del producto.
        let listaCarrito=productos2.find(e=>e.botonid==id)
        listaIphone.push(listaCarrito)
        //console.log(carrito)
        //Numero al carrito
        let cantProductos=listaIphone.length
        spanIcono.innerText=cantProductos  
        //Pasamos a formato de texto plano para lectura del localStorage.
        let formatoJSON=sessionStorage.setItem('ProductosCarrito',JSON.stringify(listaIphone))

              //Agregamos toastify para que con el click se ejecute.
              Toastify({
                text: "Agregado al Carrito!",
                className: "info",
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                  color:"black"
                }
              }).showToast();
            
        }
       
    }

     //Agregar numero al iconoCarrito
     let spanIcono=document.getElementById("numCarrito")
     let recuperarlista=JSON.parse(sessionStorage.getItem('ProductosCarrito'))
     console.log(recuperarlista)
     let cantProductos=recuperarlista.length
     spanIcono.innerText=cantProductos