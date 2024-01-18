import axios from "axios";

{/*La única propiedad en el objeto de configuración es baseURL, a la que pasa el endpoint.
La función .create() devuelve una instancia recién creada, que en este caso se llama client.
 para poder usar todos los mismos métodos, sin tener que incluir la baseURL*/}

 export const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_URL || "http://localhost:3002"
   });



