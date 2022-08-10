# Ecommerce Alsedo Lorenzo e Hijos

![Ecommerce - Alsedo Lorenzo e Hijos](https://user-images.githubusercontent.com/62706631/177229400-0785ba0a-1b92-4559-90ce-10d9888ba56b.gif)

Proyecto de Ecommerce desarrollado para la empresa <b>Alsedo Lorenzo e Hijos</b>, distribuidora de materias primas para panadería.

## Deploy

[Vercel](https://ecommerce-ramos.vercel.app/)

## Tecnologías:
`HTML5`, `CSS3`, `BOOTSTRAP`, `REACT JS`, `FIREBASE`, `VERCEL`

## Construida usando:

- [create-react-app](https://create-react-app.dev/)

## Para ejecutar el proyecto, realizar los siguientes pasos:

- Clonar el repositorio de GitHub </br>
  ```git clone https://github.com/shirleynohely/Ecommerce-Ramos.git```
  
- Ir al directorio </br>
  ```cd Ecommerce-Ramos```
 
- Instalar las dependencias</br>
  ```npm install```

- Ejecutar el proyecto</br>
  ```npm start```

## Variables de entorno:

Ver variables de configuración de Firebase en: [.env.example](https://github.com/shirleynohely/Ecommerce-Ramos/blob/main/.env.example)



## Componentes: </br>

- **Navbar**: Contiene el logo de la aplicación, el menú para acceder a la página principal, al catálogo de productos, categorías y el ícono del carrito de compras.
- **CartWidget**: Muestra los productos agregados al carrito de compras.
- **Item**: Muestra cada producto con su imagen, nombre, precio y un link de acceso al detalle del producto.
- **ItemListContainer**: Muestra el catálogo de productos, el banner con greeting y los productos filtrados por categoría.
- **ItemCount**: Permite aumentar o disminuir la cantidad de productos a comprar. Contiene el botón para agregar un producto al carrito de compras.
- **ItemDetailContainer**: Contiene el detalle de los productos y el componente ItemDetail.
- **ItemDetail**: Muestra el detalle de los productos y contiene el componente ItemCount.
- **Cart**: Muestra los productos agregados al carrito así como la imagen del producto, precio, cantidad, el total de ítems comprados y el monto total de la compra. Contiene los botones para eliminar cada producto y vaciar el carrito. Además, el botón para generar la orden de compra.
- **Form**: Contiene el formulario donde se solicitan los datos del comprador, como nombre, correo, dirección y teléfono para poder finalizar la compra y generar la orden. Finalizada la orden, se muestra el número de orden generada en Firebase.
- **Loader**: Contiene el loader de la aplicación.
- **Footer**: Muestra el footer de la aplicación con un link de acceso a la página principal.
- **NotFound**: Muestra un mensaje de error 404 cuando una página no es encontrada.

## Librerías:

- [react-bootstrap](https://react-bootstrap.github.io/getting-started/introduction) Utilizada para las interfaces de usuario.
- [react-router-dom](https://v5.reactrouter.com/web/guides/quick-start) Utilizada para el enrutamiento dinámico de la aplicación.
- [react-hook-form](https://react-hook-form.com/) Utilizada para la creación del formulario de compra.
- [react-hot-toast](https://react-hot-toast.com/) Utilizada para las notificaciones.

## Firebase | Firestore

Se implementaron 3 colecciones en Firestore (base de datos de documentos NoSQL de Firebase).

### Colecciones:

- **Products**: Colección de productos con los siguientes datos: id, generado automáticamente, url de imagen (string), descripción (string), precio (number), stock (number) y categoría (string).
- **Orders**: Colección de órdenes generadas que incluyen los datos del comprador y de los productos con las descripciones, cantidad, precio y monto total de la compra.
- **Categories**: Colección de categorías de productos para consultar en el menú (Navbar), con id de categoría (string) y descripción (string).
