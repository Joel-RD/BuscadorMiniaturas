# Documentacion para ejecutar el proyecto

## Requisitos

* Tener instalado Node.js en tu computadora

## Pasos para ejecutar el proyecto

### Clonar el proyecto

Clona el repositorio en una carpeta de tu preferencia.

### Instalar dependencias

Abre la carpeta del proyecto en la terminal y ejecuta el comando `npm install` para instalar las dependencias.

### Configurar variables de entorno

Crea una carpeta llamada `.env` en la raiz del proyecto y agrega las siguientes variables de entorno:

* `PORT`: Puerto en el que se va a ejecutar el proyecto (por ejemplo `3000`)
* `BASE_URL`: La URL base de la API de YouTube (por ejemplo `https://www.googleapis.com/youtube/v3`)
* `API_KEY`: Tu API key de YouTube (Puedes aprender como generar tu API key com este video en caso de que no lo hayas hecho [este video](https://www.youtube.com/watch?v=LLAZUTbc97I))

### Ejecutar el proyecto

Finalmente, ejecuta el comando `npm run dev` para iniciar el proyecto en modo de desarrollo. El proyecto se va a ejecutar en el puerto que definiste en la variable `PORT`.

## Rutas del proyecto

### GET /home

Buscador de videos. Coloca la URL del video de YouTube en el buscador  y haz clic en el boton para buscar la miniatura del video.

