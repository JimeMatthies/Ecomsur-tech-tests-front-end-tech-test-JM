# Online Shop

## Instalar y Correr la aplicación

Instalar API (backend) y la aplicacion React (front):

1. En la carpeta `root` de la aplicacion correr:
   `npm install`
2. Navega al directorio `front` y vuelve a correr el comando:
   `npm install`
3. Regresa al directorio root `cd ..`.

La aplicación está compuesta de un servidor Express y una instalación básica de Create-React-App (CRA). Todo está configurado para correr con un solo comando

`npm run dev`

## Bitacora del proyecto

En primer lugar, realicé una maqueta inicial del proyecto, configurando los distintos componentes (Navbar, Footer, Home, Detail, Cart, etc.) y librerias a utilizar (React, React-router-dom, redux, axios). Luego utilicé Redux para almacenar la información de los productos en un estado llamado "cart", que maneja la cantidad de cada producto que se agrega o elimina del carro de compra.

Utilicé un operador ternario que verifica el stock del producto y dependiendo del caso se habilita/deshabilita el botón "Agregar al carrito". Lo mismo ocurre con el "reducer" para que la cantidad de productos en el carro de compra no supere la cantidad en stock. También utilicé Redux para reducir la cantidad de productos que se desea comprar. Si la cantidad llega a cero, el producto se elimina del estado y, si es necesario, se puede vaciar el carro de compra totalmente.

Dentro del home se puede ver la lista completa de productos, desde la cual se puede acceder a paginas detalladas de cada producto individualmente. Ambas vistas (Product List Page y Product Display Page), contienen información detallada la cual se trae directamente desde la API.

El estado del carro de compra se mantiene dentro del "localStorage", lo que permite recargar la página sin perder la informacón de este.

Por último, cada componente tiene su archivo de estilos individual, lo que permite personalizar cada seccion a gusto. Alno tener una guia de loq ue se quiere visualmente, se deja con colores monocromaticos que van acorde a las imagenes de los productos.

## Creditos

- Hecho por [Jime Matthies](https://github.com/JimeMatthies) para [Ecomsur]