

let productos=[
    //Iphone XR
    {
        "desc":"15%",
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v574971460940521891/products/100000245.00-iphone-xr-apple-coral-64-gb-mh6r3lz-a.jpg",
        "Modelo":"IPHONE XR",
        "Color":"Azul,Dorado,Negro",
        "Almacenamiento":"64GB",
        "Camara":"48 MP",
        "Precio":1000,
        "botonid":"1"
    }, 
    {
        "desc":"20%",
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v4205900519121676986/products/100000250.00-iphone-xr-apple-amarillo-128-gb-desbloqueado-mh7p3lz-a.jpg",
        "Modelo":"IPHONE XR",
        "Color":"Blanco,Negro",
        "Almacenamiento":"64GB",
        "Camara":"64 MP",
        "Precio":800,
        "botonid":"2"
    },

     {
        "desc":"30%",
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v4343811293835771538/products/9999254016239.01-kit-iphone-11-64gb-negro-adaptador-iplace-usb-c.jpg&quality=0.8&outputFormat=JPEG",
        "Modelo":"IPHONE 11",
        "Color":"Azul,Blanco,Negro",
        "Almacenamiento":"128GB",
        "Camara":"48 MP",
        "Precio":1300,
        "botonid":"3"
    },
     
     //Iphone 13
     {  "desc":"14%",
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v1949827385114367236/products/100001660.00-apple-iphone-13256-gb-azul-mlqa-3-lz-a.jpg",
        "Modelo":"IPHONE 13",
        "Color":"Dorado,Negro,Azul",
        "Almacenamiento":"64GB",
        "Camara":"12 MP",
        "Precio":1400,
        "botonid":"4"
    },

     {  "desc":"20%",
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8596517346007470358/products/100001673.00-apple-iphone-13-pro-256gb-oro-mlvk3lz-a.jpg",
        "Modelo":"IPHONE 13",
        "Color":"Blanco,Negro",
        "Almacenamiento":"128GB",
        "Camara":"32 MP",
        "Precio":1600,
        "botonid":"5"
    },

     
     {  "desc":"6%",
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v611067842891493820/products/100000213.00-iphone-12-pro-max-apple-plata-256-gb-desbloqueado-mgdd3lz-a.jpg",
        "Modelo":"IPHONE 12 PRO MAX",
        "Color":"Blanco,Negro,Azul,Dorado",
        "Almacenamiento":"128GB",
        "Camara":"18 MP",
        "Precio":1000,
        "botonid":"6"
    },
    //Mackbook
    {
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v1982982853025931664/products/100000014.00-imac-apple-21-intelcore-i5-nucleo-mhk03cl-a.jpg",
        "Modelo":"MACBOOK PRO",
        "Color":"Blanco,Negro",
        "Almacenamiento":"1TB",
        "Procesador":"i5 10th",
        "Ram":"4GB",
        "Precio":1800,
        "desc":"10%",
        "botonid":"7"
    },

     {
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v3427391923621716552/products/100001446.00-macbook-pro-retina-apple-13.3-16gb-gris-espacial-1tb-mwp52ci-a-.jpg",
        "Modelo":"MACBOOK PRO",
        "Color":"Azul,Dorado,Negro",
        "Almacenamiento":"500GB",
        "Procesador":"i5 10th",
        "Ram":"6GB",
        "Precio":1000,
        "desc":"12%",
        "botonid":"8"
    },
     
     {
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v1877445152997548374/products/100000011.00-imac-apple-24-m1-8nucleos-azul-ssd-512-mgpl3cl-a.jpg",
        "Modelo":"MACBOOK MINI",
        "Color":"Azul,Blanco,Negro",
        "Almacenamiento":"2TB",
        "Procesador":"i5 10th",
        "Ram":"12GB",
        "Precio":1300,
        "desc":"20%",
        "botonid":"9"
    },
        
     {
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8315679397670854488/products/100001836.00-apple-macbook-pro-14-8cpu-14gpu-16gbram-512gb-gris-espacial-mkgp3ci-a.jpg",
        "Modelo":"MACBOOK MINI",
        "Color":"Dorado,Negro,Azul",
        "Almacenamiento":"640GB",
        "Procesador":"i5 10th",
        "Ram":"16GB",
        "Precio":1400,
        "desc":"25%",
        "botonid":"10"
    },

     {
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v7218542270498287624/products/100001842.00-apple-macbook-pro-14-10cpu-14gpu-16gbram-1tb-plateado-mkgt3ci-a.jpg",
        "Modelo":"MACBOOK AIR",
        "Color":"Blanco,Negro",
        "Almacenamiento":"1TB",
        "Procesador":"i7 10th",
        "Ram":"8GB",
        "Precio":1600,
        "desc":"8%",
        "botonid":"11"
    },

     
     {
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v6890426951801357837/products/100002112.00-funda-fosca-macbook-14-iplace-ip-1301pf.jpg",
        "Modelo":"MACBOOK AIR",
        "Color":"Blanco,Negro,Azul,Dorado",
        "Almacenamiento":"1TB",
        "Procesador":"i9 10th",
        "Ram":"32GB",
        "Precio":1700,
        "desc":"10%",
        "botonid":"12"
    }
];

let enviarProductosStorage=sessionStorage.setItem('Totalproductos', JSON.stringify(productos))

//Función para crear CARDS automáticas
function cards(productos){
    let container= document.querySelector('.grid-card');
    productos.forEach(item => {
        if(item.botonid<7){
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
                    <li><b>Cámara:</b> ${item.Camara}</li>
                    <li><b>Color:</b> ${item.Color}.</li>
                    <li><b>Almacenamiento:</b> ${item.Almacenamiento}</li>
                    <li class="price"><b>Precio:</b> USD ${item.Precio}</li>
                </ul>
                <button  id="${item.botonid}" class="btnComprar">Comprar</button>
            </div>
        </div>
    ` }
    });

}
//LLamamos la función
cards(productos);


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
const carrito=[]

//Recorremos cada boton del array botones(ya que hay muchos con la misma clase)
for(boton of botones){
    boton.onclick= (e)=>{

        //Id del boton clickeado.
        let id=e.target.id
        //Filtramos el id del btn con el del producto.
        let listaCarrito=productos.find(e=>e.botonid==id)
        carrito.push(listaCarrito)
        //console.log(carrito)
        
        //Numero al carrito
        let cantProductos=carrito.length
        spanIcono.innerText=cantProductos    

        //Pasamos a formato de texto plano para lectura del localStorage.Con JSON.stringify se convierte en texto plano.
        let formatoJSON=sessionStorage.setItem('ProductosCarrito',JSON.stringify(carrito))
        
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