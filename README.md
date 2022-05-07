# Proyecto Ecommerce - Venta de video juegos. #

## _Autor: Rodolfo Gonzalez - Curso: React JS_

Aplicación desarrollada en React para simular un sitio de ventas de video juegos, obteniendo datos desde la plataforma firebase, sincronizando los datos del proyecto y aplicando el servicio de Autenticación de usuario para permitir completar una compra.

## Gif de funcionamiento:
![Alt Text](https://media.giphy.com/media/fJCuP9M9WGooVRF1Dt/giphy.gif)

### Resumen de funcionalidad: ###
- En la página inicial se muestra el catálogo de productos, los mismos pueden ser filtrados por categoría accediendo desde el NavBar, ademas posee una búsqueda por nombre desde un input que se encuentra en la misma pantalla.

- Todos los productos cuentan con un botón "Ver detalle" el cual permite acceder a una vista detallada de información del producto.

- Desde el detalle del producto se puede seleccionar la cantidad de productos que desea comprar y agregarlos al carrito siempre y cuando tenga stock disponible. Si el producto ya se encuentra en el carrito, se muestra el botón de "Ver carrito" para un acceso rápido, desde donde se podrá modificar la cantidad de productos a comprar.

- En la página correspondiente al carrito de compras, si hay productos agregados, posee la opción de vaciar carrito o terminar compra, en caso contrario se muestra la notificación de "Actualmente no pesee productos agregados al carrito".

- Una vez seleccionada la totalidad de productos a comprar, al hacer click en el botón "Terminar compra", se solicitará iniciar sesión si no se encuentra logueado. 

- Una vez iniciada la sesión se puede completar la compra. Esto genera una orden de compra que contiene los datos del usuario, productos agregados y total. Ademas de actualizar el stock de los productos.

- Si no posee usuario puede acceder al registro desde el botón ubicado en el Navbar o en la página de inicio de sesión.

- En el Navbar, los usuarios logueados podrán visualizar su nombre de usuario como un botón desplegable donde tendrán la opción de visualizar las ordenes generadas por el usuario mismo y cerrar sesión.

# Para su prueba:
1.	Clonar el repositorio ( git clone https://github.com/rodolfogonzalezled/proyectoReactRodolfo.git )
2.	Obtener node_modules ( npm install )
3.	Iniciar la app desde la terminal ( npm start )
4.	El proyecto se ejecutará en el navegador en ( http://localhost:3000 )

## Configuración de firebase:
Los productos mostrados en la página se obtienen desde la colección _products_ creada en firebase.
Estructura de la colección _products_:
| Nombre de la propiedad | Tipo de dato |
| ------ | ------ |
| id |  string(Generado automáticamente) |
| name | string |
| price | number |
| category | string |
| year | number |
| language | string |
| img | string(URL) |
| stock | number |

Se creó la colección _categories_, donde están almacenadas todas la categorías que se muestran en la página y por las que se pueden filtrar productos, se agregaron con la finalidad de que no estén fijas en código ya que si se desea agregar una nueva categoría, no es necsario modificar el mismo.

Estructura de la colección _categories_:
| Nombre de la propiedad | Tipo de dato |
| ------ | ------ |
| id | string |
| name | string |
| order | number |
 ✨Nota: el id de la categoría debe ser igual al nombre de la categoría en los productos ✨
 
Además, se creó la colección _orders_, donde se almacena la información referente al usuario y productos comprados una vez finalizada la compra.
Estructura de la colección _orders_:
> {
    id: string(Generado automáticamente),
    date: timestamp,
    total: number,
    buyer: {
        email: string,
        id: string,
        name: string,
        phone: string
    },
    items: [{
        id: string,
        img: string(URL),
        name: string,
        price: number,
        quantity: number
    }]
}

También se hizo uso del servicio de autenticación de firebase, el cual permite el registro de usuarios e inicio de sesión.