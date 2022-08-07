

let productos=[
    //Iphone XR
    {"img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v574971460940521891/products/100000245.00-iphone-xr-apple-coral-64-gb-mh6r3lz-a.jpg",
     "Modelo":"IPHONE XR",
     "Color":"Azul,Dorado,Negro",
     "Almacenamiento":"64GB",
     "Camara":"48 MP",
     "Precio":1000},

     {"img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v5883023851070341652/products/100000155.00-iphone-11-aple-negro-64-gb-mhda3lz-a.jpg",
     "Modelo":"IPHONE 11",
     "Color":"Azul,Blanco,Negro",
     "Almacenamiento":"128GB",
     "Camara":"48 MP",
     "Precio":1300},
     
     //Iphone 13
     {"img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v1949827385114367236/products/100001660.00-apple-iphone-13256-gb-azul-mlqa-3-lz-a.jpg",
     "Modelo":"IPHONE 13",
     "Color":"Dorado,Negro,Azul",
     "Almacenamiento":"64GB",
     "Camara":"64 MP",
     "Precio":1400},

     {"img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v8596517346007470358/products/100001673.00-apple-iphone-13-pro-256gb-oro-mlvk3lz-a.jpg",
     "Modelo":"IPHONE 13",
     "Color":"Blanco,Negro",
     "Almacenamiento":"128GB",
     "Camara":"64 MP",
     "Precio":1600},

     
     {"img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v611067842891493820/products/100000213.00-iphone-12-pro-max-apple-plata-256-gb-desbloqueado-mgdd3lz-a.jpg",
     "Modelo":"IPHONE 12 PRO MAX",
     "Color":"Blanco,Negro,Azul,Dorado",
     "Almacenamiento":"128GB",
     "Camara":"64 MP",
     "Precio":1000},

     
     {"img":"https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v6910719137915295178/products/100000933001.00-usado-iphone-x-256gb-plata.jpg",
     "Modelo":"IPHONE X",
     "Color":"Blanco,Negro",
     "Almacenamiento":"64GB",
     "Camara":"64 MP",
     "Precio":800},
];

//Función para crear CARDS automáticas

function Cards(productos){
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
                    <li class="desc">-10% OFF</li>
                    <li class="modelo">${item.Modelo}</li>
                    <li>Cámara: ${item.Camara}</li>
                    <li>Color: ${item.Color}</li>
                    <li>Almacenamiento: ${item.Almacenamiento}</li>
                    <li class="price">Precio: USD ${item.Precio}</li>
                </ul>
                <input class="btn" type="button" value="Comprar">
            </div>
        </div>
    `
    });  
    
}

Cards(productos);