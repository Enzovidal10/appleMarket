//Función de CARDS para Mac

let productos=[
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
        "botonid":"1"
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
        "botonid":"2"
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
        "botonid":"3"
    },
        
     //Iphone 13
     {
        "img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8315679397670854488/products/100001836.00-apple-macbook-pro-14-8cpu-14gpu-16gbram-512gb-gris-espacial-mkgp3ci-a.jpg",
        "Modelo":"MACBOOK MINI",
        "Color":"Dorado,Negro,Azul",
        "Almacenamiento":"640GB",
        "Procesador":"i5 10th",
        "Ram":"16GB",
        "Precio":1400,
        "desc":"25%",
        "botonid":"4"
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
        "botonid":"5"
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
        "botonid":"6"
    }
];

//Función para crear CARDS automáticas

function cards(productos){
    let container= document.querySelector('.grid-card');
    productos.forEach(item => {
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
    `
    });  
    
}

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

        //Agregar numero al iconoCarrito
        let cantProductos=carrito.length
        let spanIcono=document.getElementById("numCarrito")
        
        spanIcono.innerText=cantProductos
        
        //Pasamos a formato de texto plano para lectura del localStorage.
        let formatoJSON=localStorage.setItem('ProductosCarrito',JSON.stringify(carrito))
        console.log(formatoJSON)

            //Agregamos la sweet alert para que con el click se ejecute.
            swal({
                text:"Has agregado un producto al carrito",
                icon: "success",
                button: "OK",
              }); 
            
        }
       
    }