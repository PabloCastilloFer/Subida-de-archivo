# Instrucciones

# Subida de Archivos con Multer
Este proyecto utiliza Multer para la gestión de subida de archivos en una aplicación Node.js.

# Requisitos
 * Node.js v14 o superior
 * Multer 1.4.5-lts.1 o superior

# Instalación
Sigue estos pasos para clonar y configurar el proyecto en tu máquina local:

1. Clona el repositorio:
    * git clone https://github.com/PabloCastilloFer/Subida-de-archivo.git

2. Navega al directorio del proyecto:
    * cd backend

3. Instala las dependencias:
    * npm install
    * npm install multer

# Ejecución
Para probar la funcionalidad de subida de archivos, sigue estos pasos:

1. Abre Postman o Thunder Client.
2. Configura una petición POST a la siguiente URL:
http://localhost:3000/api/archivo
3. En el cuerpo (body) de la petición, asegúrate de incluir:
    Un campo para el nombre del archivo
    El archivo que deseas subir