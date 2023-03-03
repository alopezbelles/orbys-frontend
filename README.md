# PRUEBA TÉNCICA ORBYS - FRONTEND
Frontend con React

### Datos generales

**- Autor del proyecto:** Alejandro López Bellés

**- Título del proyecto:** PRUEBA TÉCNICA ORBYS - FRONTEND

**- Fecha:** 03/03/2023

 ### Tecnologías  y dependencias
 REACT + MATERIAL UI 

 ### Acceso a la aplicación
 
 Deploy en Amazon Web Services:

> [https://main.d1p6yww2pwar77.amplifyapp.com/](https://main.d1p6yww2pwar77.amplifyapp.com/)


 ### Descripción general del proyecto 

La aplicación está diseñada y desarrollada en React y permite el uso de componentes reutilizables. El siguiente Frontend se divide en tres páginas. 
La página principal es la 'HOME'. En ella encontramos una breve descripción de la librería y el acceso a los libros documentados en ella. 

Luego tenemos la página 'BOOKS', donde se muestra un listado con todos los libros alojados en la aplicación. Al pinchar sobre uno de ellos accedemos a la página 'BOOK DETAIL', donde encontraremos la información detallada, género, autor, etc. 

Por último el apartado 'ADD-BOOK' permitiría el registro de un nuevo libro en la base de datos. 

La aplicación permite la navegación entre las distintas pantallas que la componen y su diseño está adaptado a la resolución a distintos dispositivos. Está estructurada de la siguiente manera:

**-->HOME** 

![home1](https://user-images.githubusercontent.com/113507322/222691062-0efbbad0-3aed-47aa-ad6d-aae2b4cc230a.png)

![home2](https://user-images.githubusercontent.com/113507322/222691042-007f4689-d9b2-47c3-bedb-53ab6ffddd95.png)

**-->BOOKS** 
En este apartado me he traido el listado de libros accediendo a los títulos del archivo JSON ubicado en la carpeta /assets. Creo un componente que utiliza estos datos mediante "require()" y asigno su contenido a la constante "data". Luego con la función "map()" recorro cada objeto y creo un componente para cada objeto. 
![books](https://user-images.githubusercontent.com/113507322/222691566-b6938ca1-d358-47fc-9c3b-22156190c655.png)

**-->BOOKS-DETAIL** 
En este apartado he accedido a uno de los libros del archivo JSON y he pintado su información. He maquetado la información de uno de los libros y se muestra en todos por igual. 

![image](https://user-images.githubusercontent.com/113507322/222692106-57ba4200-5678-4e57-8ac3-5b704207a040.png)

![image](https://user-images.githubusercontent.com/113507322/222692204-59df21e4-ca78-4fef-874f-7a311c9ae337.png)

**-->ADD-BOOK** 
Una vez conectado con la base de datos esta página permitiría el ingreso de un nuevo libro en ella. Está compuesta por un formulario con varios imputs que recogen la información dividida en campos. 
![image](https://user-images.githubusercontent.com/113507322/222692429-1d4cee12-e922-4c01-9084-394c5942c66d.png)
![image](https://user-images.githubusercontent.com/113507322/222692557-90228327-5a17-4443-8636-de3d0218819c.png)

**-->ADAPTACIÓN A DISPOSITIVOS**
![mockup_lr](https://user-images.githubusercontent.com/113507322/222693050-088cec3d-dd6a-4a9f-946f-954b3cec7dd4.png)

**RECURSOS ALTERNATIVOS**

Diseño y edición de vectores y logo:
  - ADOBE ILLUSTRATOR. 

**FUENTES**

- Vectores, autores:  www.pixabay.com / www.pexels.com
- Fuentes: google Fonts. 

