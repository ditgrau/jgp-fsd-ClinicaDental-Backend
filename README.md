
__<p align="center">Proyecto 3 - Mastermind - Semana 4</p>__
<h2 align="center">⚙️ Primer proyecto de backend ⚙️</h2>

<details>
  <summary><b>Contenido</b> 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#stack">Stack</a></li>
    <li><a href="#diagrama-bd">Diagrama</a></li>
    <li><a href="#instalación-en-local">Instalación</a></li>
    <li><a href="#endpoints">Endpoints</a></li>
    <li><a href="#licencia">Licencia</a></li>
    <li><a href="#webgrafia">Webgrafia</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ol>
</details>


### Sobre el proyecto

Durante esta primera toma de contacto con el backend, hemos trabajado en el desarrollo de una API funcional para una clínica dental. 

Esta API se conecta a una base de datos MySQL diseñada específicamente para satisfacer las necesidades de la clínica.

He logrado implementar todas las funcionalidades especificadas, proporcionando a la clínica dental una herramienta eficiente para gestionar su flujo de trabajo. Estoy satisfecha del trabajo realizado y del conocimiento adquirido.  

### Stack
<div align="center">

<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>
<img src="https://camo.githubusercontent.com/902ef9f04d190cba77c41b8dc217260698573f992a2d46bf37e75161912caadd/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6d7973716c2d3345364539333f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="MYSQL" data-canonical-src="https://img.shields.io/badge/mysql-3E6E93?style=for-the-badge&amp;logo=mysql&amp;logoColor=white" style="max-width: 100%;"> 
<img src="https://camo.githubusercontent.com/c0303b8bf28065067be013ecbfa1447392b6d328a38362de9beb6d14f810544f/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73657175656c697a652d3343373643333f7374796c653d666f722d7468652d6261646765266c6f676f3d73657175656c697a65266c6f676f436f6c6f723d7768697465" alt="SEQUELIZE" data-canonical-src="https://img.shields.io/badge/sequelize-3C76C3?style=for-the-badge&amp;logo=sequelize&amp;logoColor=white" style="max-width: 100%;"> 
<img src="https://camo.githubusercontent.com/3f0e26b0951bab845a1bb9a7198ecca0da272e462921b6edd85879f3673b6927/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333373f7374796c653d666f722d7468652d6261646765266c6f676f3d706f73746d616e266c6f676f436f6c6f723d7768697465" alt="Postman" data-canonical-src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&amp;logo=postman&amp;logoColor=white" style="max-width: 100%;"> 
<img src="https://camo.githubusercontent.com/4590c0af4aeb1b75233885f86e80c1da8cb2afd401173a40e41370f5cad5db20/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a57542d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d4a534f4e253230776562253230746f6b656e73" alt="JWT" data-canonical-src="https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens" style="max-width: 100%;">
</div>

### Diagrama BD
!['imagen-db'](./img/DB.png)

### Instalación en local
1. Clonar el repositorio
2. `$ npm install`
3.  Instalamos dependencias: 
`$ express nodemon sequelize sequelize-cli mysql2 bcrypt jsonwebtoken dotenv`
4. Conectamos nuestro repositorio con la base de datos 
5. Ejecutamos las migraciones `$ npx sequelize-cli db:migrate` 
6. Ejecutamos los seeders `$ npx sequelize-cli db:seed:all`
7. `$ npm run dev`

### Endpoints
<details>
<summary>Endpoints</summary>

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/27697255-c61a3dad-5040-4553-a36a-d11ead64ac45?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D27697255-c61a3dad-5040-4553-a36a-d11ead64ac45%26entityType%3Dcollection%26workspaceId%3Db6c89ddc-e5ae-481f-8c5a-ae982819ae1e)
            
</details>


### Licencia
📝 La licencia utilizada es una MIT License. Este proyecto ha sido realizado por mí, Judit Grau Puigdollers, inéditamente para la tarea 'Backend Clínica Dental' en la edición de abril 2023 de GeeksHubs Academy.

``` js
 const developer = "ditGrau";
 console.log("Desarrollado por: " + developer);
```  
### Webgrafia
- Errores HTTP: https://http.cat/
- Consultas de js: https://es.javascript.info/
- La documentacion oficial de las dependencias
- El material proporcionado por Geekshubs Academy

### Agradecimientos:

Agradezco a mis compañeros y docentes, pero en especial a Coral, compi hasta en las duras y a Dani, un docente sin igual:
Más de 100 commits, muchas horas y mucho REFACTOR, pero ha valido la pena.

- **CORAL**  
<a href="https://github.com/Coral-JM" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=lime" target="_blank"></a> 
- **DANI**  
<a href="https://github.com/datata" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=lime" target="_blank"></a> 


<h3 align="center">Contacto</h3>

<div align="center">
 📩 <a href = "mailto:juditgraup@gmail.com"><img src="https://img.shields.io/badge/Gmail-C6362C?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>👋🏼<a href="https://www.linkedin.com/in/linkedinUser/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a> 
</p>
</div>
