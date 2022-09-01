
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
            <li class="desc-carrito"><b>Almacenamiento:</b> ${item.Almacenamiento}</li>
            <li><b>Color:</b> ${item.Color}.</li>
            <li class="price-carrito"><b>Precio:</b> USD ${item.Precio}</li>
        </ul>
        <div class="btn-flex-carrito">
            <buttom class="btnBorrar"><a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAANhJREFUSEvVle0NwjAMRF83gU1gE5ikYhLYBDaBTUCHZGSZNuSjLap/RrJfzuc4HTNHN3N9FgfsgDOwqVT2AI7AzfKjgisgSEsIsh0DPFsqu9zPxaOCvwEkO/oydPbVmRwFZpr8MYiZKb/6gbZmt0iF9oDdVhCFQQW8twCUGyEqqjEcK66cbAV2OQ/RWap4NcA/IAG8J7FLRQr86/QmpyBFAJnsex49aTb5BFzCtBhEI3ponaKa7VHUonUBpljXGggNxjviLrLdUvsn/PxwavqdzFn8T55cwQvRlDoZpKPUFgAAAABJRU5ErkJggg=="/></a></buttom>
            
            <buttom class="comprarCarrito"><a href=""><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAP9JREFUSEvNlNENwjAMRF83gU1gE/iFIYAh4BeYBDaBTUCHYmS1bhKpFNWfTerzy13SMHI1I/fnrwKvRPMErsD+F3SewASs7xK4DxWJjmgFnFNziURlwxSPONowAx6pax/FIAH1FoFILsA6QBgsYBQyfD6GgHregEUiEIlStevxxEg75DmTzGxPIW9E50tJszDYuqj1X/aiRWbrm8hMxIuH6SvFzI7Fm+1FfMraR/qhLAn0mS1hTS9hqzBZJQFv9iHzfESkVQTapCQJv6Y6F7OGQI1zETVhn6bvMLUCNdOHe2oFjsAGOAHbVqfcWjFF7YREyfPPfGfgyRCM7sF0Bd6/uEAZU5x0XAAAAABJRU5ErkJggg=="/></a></buttom>
        </div>   
    </div>
    ` 
    });

}
//Llamo a la función
cards(enCarrito)


