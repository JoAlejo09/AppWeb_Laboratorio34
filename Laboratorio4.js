//Laboratorio 4. Desarrollo de Objetos y Arreglos en Java

/*DESCRIPCION DE OBJETOS TOMADOS COMO REFERENCIA LA PAGINA DE RED SOCIAL FACEBOOK 
    DESCRIPCION DEL OBJETO */
    const usuarioFacebook = {
        id: "1234567890",
        nombre: "Juan Pérez",
        correo: "juan.perez@facebook.com",
        fechaNacimiento: "2007-05-05",
        genero: "masculino",
        fotoPerfil: "https://facebook.com/foto_perfil_juan.jpg",
        amigos: [
          { id: "2345678901", nombre: "Ana López" },
          { id: "3456789012", nombre: "Carlos Díaz" }
        ],
        publicaciones: [
          {
            id: "post001",
            contenido: "¡Hola a todos! Este es mi primer post.",
            fecha: "2025-04-01",
            reacciones: {
              meGusta: 20,
              meEncanta: 5,
              meAsombra: 2
            },
            comentarios: [
              { usuario: "Ana López", mensaje: "¡Bienvenido!", fecha: "2025-05-01" },
              { usuario: "Carlos Díaz", mensaje: "¡Saludos!", fecha: "2025-05-02" }
            ]
          }
        ],
        estado: "Conectado",
        ubicacion: "Ecuador",
        biografia: "Amante de la tecnología y el café.",
        intereses: ["Programación", "Viajes", "Fotografía"]
      };
      
      console.log(usuarioFacebook);

      /*ARREGLO*/
      const usuariosFacebook = [
        {
          id: "001",
          nombre: "Juan Pérez",
          correo: "juan.perez@facebook.com",
          fotoPerfil: "https://facebook.com/foto_juan.jpg",
          amigos: ["002", "003"],
          estado: true
        },
        {
          id: "002",
          nombre: "Ana López",
          correo: "ana.lopez@facebook.com",
          fotoPerfil: "https://facebook.com/foto_ana.jpg",
          amigos: ["001"],
          estado: false
        },
        {
          id: "003",
          nombre: "Carlos Díaz",
          correo: "carlos.diaz@facebook.com",
          fotoPerfil: "https://facebook.com/foto_carlos.jpg",
          amigos: ["001"],
          estado: true
        }
      ];
      
      console.log(usuariosFacebook); // Sin cambios

      /*EJECUCION DE PROPIEDADES Y VALORES */
      /*CON LOS OBJETOS */
      /*Actualiza el valor del correo del usuario de Facebook */ usuarioFacebook.correo = "Juan.perez@gmail.com"
      /*Eliminamos la biografia ingresada por el usuario */ delete usuarioFacebook.biografia
      console.log(usuarioFacebook) //Impresion de los cambios realizados
      /*Mostramos informacion determinada del usuario */ 
      const{id,nombre:usuario, correo:email,fechaNacimiento} = usuarioFacebook      
      console.log(`El usuario de Facebook \n Nombre: ${usuario}\nEdad:${email}\nFecha de Nacimiento:${fechaNacimiento}`)
      /* CON LOS ARREGLOS */
      const user = usuariosFacebook.filter(p=> p.nombre==="Carlos Diaz") //Devuelve el valor del arreglo con el usuario Carlos Diaz
      console.log (usuariosFacebook.estado.includes(true)) //Devuelve los cuantos usuarios estan activos | true 