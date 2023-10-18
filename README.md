
# CREAR PROYECTO CON VITE:
- npm init vite  <project_name>
- select a framework: React
- select variant: Javascript
- npm install para descargar las dependencias.



# DESARROLLO DE  MODULO  ECOMMERCE UTILIZANDO React, axios, react-router y context.

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
- npx json-server --watch backend/db.json  ( levantar servidor, instalado de manera local) - (hacer uso del script: npm run server)

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

#### UseProducts.js(para separar la lógica del contexto)


# INICIAR LA APLICACION:

## En el front-end:

- npm run dev

## En el backend:
- npm run server








