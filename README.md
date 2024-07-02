# Proyecto Final CRAD

## Descripción
Este proyecto de Angular constituye una aplicación web para la venta de videojuegos. A continuación, detallaremos la estructura del proyecto, las tecnologías utilizadas, cómo ejecutar la aplicación localmente y otra información relevante para su comprensión.

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

├── app/
│   ├── components/
│   │   ├── card-cart/
│   │   │   └── card-cart.component.ts
│   │   ├── cards/
│   │   │   └── cards.component.ts
│   │   ├── footer/
│   │   │   └── footer.component.ts
│   │   ├── guards/
│   │   │   ├── login.guard.ts
│   │   │   └── redirectIfLogged.guard.ts
│   │   ├── nav/
│   │   │   └── nav.component.ts
│   │   └── ...
│   ├── models/
│   │   ├── search.ts
│   │   ├── user.ts
│   │   └── videogame.ts
│   ├── pages/
│   │   ├── checkout/
│   │   │   └── checkout.component.ts
│   │   ├── detail/
│   │   │   └── detail.component.ts
│   │   ├── home/
│   │   │   └── home.component.ts
│   │   ├── login/
│   │   │   └── login.component.ts
│   │   ├── not-found/
│   │   │   └── not-found.component.ts
│   │   ├── search/
│   │   │   └── search.component.ts
│   │   ├── thanks/
│   │   │   └── thanks.component.ts
│   │   ├── videogamelist/
│   │   │   └── videogamelist.component.ts
│   │   └── register/
│   │        └── register.component.ts
│   ├── service/
│   │   ├── auth.service.ts
│   │   ├── cart.service.ts
│   │   ├── categories.service.ts
│   │   ├── user.service.ts
│   │   └── videogames.service.ts
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routes.ts
│   ├── app.config.ts
│   └── safe-url.pipe.ts
├── index.html
├── main.ts
└── ...

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