# Proyecto Final CRAD

## Descripción
Este proyecto de Angular constituye una aplicación web para la venta de videojuegos. A continuación, detallaremos la estructura del proyecto, las tecnologías utilizadas, cómo ejecutar la aplicación localmente y otra información relevante para su comprensión.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

├── app/

│   ├── components/

│   │   ├── card-cart/

│   │   │   └── card-cart.component.ts    # Componente para el carrito de compras

│   │   ├── cards/

│   │   │   └── cards.component.ts        # Componente de tarjetas

│   │   ├── footer/

│   │   │   └── footer.component.ts       # Componente del pie de página

│   │   ├── guards/

│   │   │   ├── login.guard.ts            # Guard para rutas protegidas de login

│   │   │   └── redirectIfLogged.guard.ts # Guard para redirigir si ya está logueado

│   │   ├── nav/

│   │   │   └── nav.component.ts          # Componente de navegación

│   │   └── ...                           # Otros componentes

│   ├── models/

│   │   ├── search.ts                     # Modelo para búsqueda

│   │   ├── user.ts                       # Modelo para usuario

│   │   └── videogame.ts                  # Modelo para videojuego

│   ├── pages/

│   │   ├── checkout/

│   │   │   └── checkout.component.ts     # Componente de pago

│   │   ├── detail/

│   │   │   └── detail.component.ts       # Componente de detalle del producto

│   │   ├── home/

│   │   │   └── home.component.ts         # Componente de la página de inicio

│   │   ├── login/

│   │   │   └── login.component.ts        # Componente de login

│   │   ├── not-found/

│   │   │   └── not-found.component.ts    # Componente de página no encontrada

│   │   ├── search/

│   │   │   └── search.component.ts       # Componente de búsqueda

│   │   ├── thanks/

│   │   │   └── thanks.component.ts       # Componente de agradecimiento

│   │   ├── videogamelist/

│   │   │   └── videogamelist.component.ts# Componente de lista de videojuegos

│   │   └── register/

│   │       └── register.component.ts     # Componente de registro

│   ├── service/

│   │   ├── auth.service.ts               # Servicio de autenticación

│   │   ├── cart.service.ts               # Servicio del carrito de compras

│   │   ├── categories.service.ts         # Servicio de categorías

│   │   ├── user.service.ts               # Servicio de usuario

│   │   └── videogames.service.ts         # Servicio de videojuegos

│   ├── app.component.ts                  # Componente principal de la aplicación

│   ├── app.module.ts                     # Módulo principal de la aplicación

│   ├── app.routes.ts                     # Configuración de rutas

│   ├── app.config.ts                     # Configuración de la aplicación

│   └── safe-url.pipe.ts                  # Pipe para URLs seguras

├── index.html                            # Archivo HTML principal

├── main.ts                               # Archivo principal de arranque de Angular

└── ...                                   # Otros archivos y carpetas

## Tecnologías Utilizadas
- **Angular CLI**: Framework de desarrollo frontend.
- **Bootstrap**: Para estilos y componentes frontend.Para estilos y componentes frontend.
- **PrimeNG**: Utilizado para el componente Skeleton.
- **RxJS**: Para la programación reactiva en el manejo de datos.
- **FontAwesome**: Iconos para mejorar la interfaz.
- **MongoDB**: Base de datos utilizada para almacenar los datos.
- **Mongoose**: Librería de modelado de objetos para MongoDB.
- **Express.js**: Backend para la API de servicios.
- Otros módulos y componentes de Angular según sea necesario.

## Configuración y Ejecución Local
1. **Clona el repositorio:**
    - git clone https://github.com/cristiannull/Front-proyecto-final-2.git.

2. **Instalación de Dependencias:**
   - npm install.

3. **Iniciar el servidor:**
   - ng serve.   
   - La aplicación estará disponible en `http://localhost:4200/`.   
   - para que funcione correctamente debes tener tambien la api la cual se encuentra aqui: `https://github.com/cristiannull/Back-proyecto-final-2` no olvides iniciar el servidor en la api.  
   - Si quieres hacer cambios debes asegurarte de tener el repositorio de Admin el cual encontraras aqui  `https://github.com/cristiannull/Admin-Front` y de ingresar con una cuenta que tenga el rol Admin.  
   
 ## Información Adicional
   Descripción de Componentes:
   - **NavComponent**: Barra de navegación principal.   
   - **FooterComponent**: Pie de página. 
   - **CardsComponent**: Componente para mostrar tarjetas de videojuegos.
   - **CardCartComponent**: Componente para mostrar y gestionar el carrito de compras.
   Guards:/
    - **loginGuard**:  Redirige a la página de inicio de sesión si no hay un token de usuario.
    - **redirectIfLogged**: Redirige a la lista de videojuegos si hay un token de usuario presente.
