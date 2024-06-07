
# PROYECTO CON VITE:
- npm init vite  <project_name>
- select a framework: React
- select variant: Javascript
- npm install para descargar las dependencias.



# DESARROLLO DE  MÓDULO  ECOMMERCE UTILIZANDO React, axios, react-router y context.

## Frontend:
- react 
- css
- react-bootstrap
- npm install axios (para el consumo asíncrono de la API)
- npm install react-router-dom (manejo de rutas)
- npm install react-icons --save
- npm install react-bootstrap bootstrap

## Backend:
- json-server
- npm i -g json-server
- npx json-server --watch backend/db.json  ( levantar servidor, instalado de manera local) - (script: npm run server)

## Folders:

### frontend
- assets
- axios
- components
- context
- hooks 
- routes
- pages 
- routes
- layout

### backend
- db.json

### axios
- index.js(con el objeto de configuración baseURL, a la que pasa el endpoint).


### context
- contexto y proveedor
- ProductsContext.jsx

### assets
- imagenes y recursos

### routes
- acceso y uso de las rutas 

### components
- componentes del front perzonalizados

### Hooks
- custom hooks


### package.json (scripts agregados)


``
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "server": "npx json-server --watch --port 3002 backend/db.json" (agrego script para correr servidor de manera simplificada) command: npm run server
  },
  ``


### CREAR EL CONTEXTO

``
import React from "react";

const ProductContext = createContext("");

const ProductsProvider = ({ children }) => {
  return (
    <ProductContext.Provider value={{}}>{children}</ProductContext.Provider>
  );
};

export default ProductsProvider;
``




# INICIAR LA APLICACION:

## front-end:

- npm run dev

## backend:
- npm run server


## Capturas: 

![storev1](https://github.com/GuidoSantiagoReta/storeV/assets/46303885/ce88106b-856b-49c0-adc0-613f2d43e71c)
![storev2](https://github.com/GuidoSantiagoReta/storeV/assets/46303885/3732a6c0-2b8e-42ae-8b11-51dcf19cc510)
![storev3](https://github.com/GuidoSantiagoReta/storeV/assets/46303885/196c8b8d-2a12-4307-b81c-af8ce4f3e7b9)
![storev4](https://github.com/GuidoSantiagoReta/storeV/assets/46303885/ae438a7b-85da-490e-9726-ad189a2e4d6b)






