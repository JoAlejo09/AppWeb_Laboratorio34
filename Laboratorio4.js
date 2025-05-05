//Laboratorio 4. Desarrollo de Objetos y Arreglos en Java

/*DESCRIPCION DE OBJETOS TOMADOS COMO REFERENCIA LA PAGINA DE RED SOCIAL FACEBOOK 
    DESCRIPCION DEL OBJETO */
    const usuarioFacebook = {
        id: "1234567890",
        nombre: "Juan Pérez",
        correo: "juan.perez@facebook.com",
        fechaNacimiento: "1990-05-05",
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
            fecha: "2025-05-01",
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
        ubicacion: "Ciudad de México",
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
          estado: "Conectado"
        },
        {
          id: "002",
          nombre: "Ana López",
          correo: "ana.lopez@facebook.com",
          fotoPerfil: "https://facebook.com/foto_ana.jpg",
          amigos: ["001"],
          estado: "Desconectado"
        },
        {
          id: "003",
          nombre: "Carlos Díaz",
          correo: "carlos.diaz@facebook.com",
          fotoPerfil: "https://facebook.com/foto_carlos.jpg",
          amigos: ["001"],
          estado: "Conectado"
        }
      ];
      
      console.log(usuariosFacebook);