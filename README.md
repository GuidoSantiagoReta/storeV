
# PROYECTO CON VITE:
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

![storevite1](https://github.com/GuidoSantiagoReta/storeVite/assets/46303885/a0ded23e-9432-4761-b09a-fa03b495e4b2)
![storevite2](https://github.com/GuidoSantiagoReta/storeVite/assets/46303885/bdf94848-e21d-4f5e-ad6e-516a701764a4)
![storevite3](https://github.com/GuidoSantiagoReta/storeVite/assets/46303885/379b6cce-cbda-4590-aed3-7c9b597c92dd)
![storeviteres1](https://github.com/GuidoSantiagoReta/storeVite/assets/46303885/ab8e1af2-2660-41db-aa15-7a51cbfb01ef)
![storeviteres2](https://github.com/GuidoSantiagoReta/storeVite/assets/46303885/f20c9e32-60a8-4490-8bd1-143933e68179)





