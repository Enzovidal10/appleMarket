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

function Cards(productos){
    let container= document.querySelector('.grid-card');
    productos.forEach(item => {
        container.innerHTML +=
        `
        <div class="card">
            <div class="card-img">
                <img src="https://www.iplace.com.uy/ccstore/v1/images/?source=/file/v2658799190959115494/products/100002199.00-apple-iphone-se-2022-64gb-productred-mmxh3lz-a.jpg" alt="" srcset="">
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