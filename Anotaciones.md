#BACK END

1. Crear carpeta "server", o "api" como la carpeta principal de nuestro Back-End.
2. En el terminal ingresar a esa carpeta y hacer "npm init -y" para crear el package.json.
3. Hacer npm install de las cosas que vamos a necesitar {express, morgan, cors, nodemon, sequelize, pg-hstore, pg, dotenv, axios}.
4. Crear el archivo "index.js".
5. Modificar el "package.json", al objeto "scripts" agregarle la propiedad "start" con el valor "nodemon index.js" para que levante nuestro servidor y se quede escuchando por modificaciones.
6. Probar si funciona escribiendo en el terminal "npm start".
7. Crear la carpeta "src".
8. Dentro de esta crear el archivo "app.js".
9. En "app.js" requerimos express y creamos una constante "app" o "server" llamando a express() y la exportamos para requerirla en "index.js".
10. Volvemos al archivo "index.js" y hacemos el app.listen al puerto que deseemos.
11. En el archivo "app" creamos los "middlewares" que necesitemos con app.use. Los mas comunes y que ya vienen armados son {morgan, express.json(), cors}, requiriendo previamente cada uno.
12. Para las rutas creamos una carpeta dentro de "src" llamada "routes" con un archivo "index.js".
13. Dentro de este archivo requerimos {Router} de express.
14. 