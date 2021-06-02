<template>

  <div class="row">
    <v-dialog v-model="modalImg" max-width="700px">
          <v-card>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  
                  <v-flex xs12 sm12 md12>
                      
                      <v-carousel hide-delimiters >
                        <v-app-bar
                        flat
                        color="rgba(0, 0, 0, 0)"
                      >
                        <v-toolbar-title class="title black--text pl-0">
                          Imágenes del proyecto
                        </v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="black"
                          icon
                          @click="close()"
                        >
                          <v-icon>mdi-close</v-icon>
                        </v-btn>
                      </v-app-bar>  
                        <v-carousel-item
                          v-for="img in imagenes"
                          :key="img"
                          :src="img"         
                        ></v-carousel-item>
                      </v-carousel> 
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-dialog>
    <div class="col-md-12">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Primer Nombre</th>
            <th>Segundo Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Tipo de documento</th>
            <th>Documento</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="usuario in usuarios" :key="usuario.key">
            <td>{{ usuario.primernombre }}</td>
            <td>{{ usuario.segundonombre }}</td>
            <td>{{ usuario.primerapellido }}</td>
            <td>{{ usuario.segundoapellido }}</td>
            <td>{{ usuario.tipodocumento }}</td>
            <td>{{ usuario.documento }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.telefono }}</td>
            <td>
              <router-link
                :to="{ name: 'edit', params: { id: usuario.key } }"
                class="btn btn-primary"
                >Editar
              </router-link>
              <button
                @click.prevent="deleteUser(usuario.key)"
                class="btn btn-danger"
              >
                Eliminar
              </button>
              <button
                @click.prevent="generarPdf(usuario.key)"
                class="btn btn-info"
              >
                GenerarPDF
              </button>
              <button
                @click.prevent="mostrarImg(usuario.key)"
                class="btn btn-info"
              >
                Metodo
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { db } from "../firebaseDb";
import Swal from "sweetalert2";
import { jsPDF } from "jspdf";
import { storage } from "../firebaseDb";
const ref = storage.ref();

export default {
  data() {
    return {
      usuarios: [],
      hidden: false,
      imagenes: [],
      modalImg: false
    };
  },
  created() {
    db.collection("usuarios").onSnapshot((snapshotChange) => {
      this.usuarios = [];
      snapshotChange.forEach((doc) => {
        this.usuarios.push({
          key: doc.id,
          primernombre: doc.data().primernombre,
          segundonombre: doc.data().segundonombre,
          primerapellido: doc.data().primerapellido,
          segundoapellido: doc.data().segundoapellido,
          tipodocumento: doc.data().tipodocumento,
          documento: doc.data().documento,
          email: doc.data().email,
          telefono: doc.data().telefono,
        });
      });
    });
  },
  methods: {
    deleteUser(id) {
      Swal.fire({
        title: `¿Estás seguro que deseas elimiar el registro del usuario?`,
        type: "question",
        showCancelButton: true,
        cancelButtonColor: "#d33",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "Si, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          db.collection("usuarios")
            .doc(id)
            .delete()
            .then(() => {
              Swal.fire(
                "Eliminado!",
                "El registro se eliminó éxitosamente",
                "success"
              );
            });
        } else if (result.isDenied) {
          Swal.fire("No se pudo eliminar el registro", "", "Info");
        }
      });
    },
    mostrarImg(item) {
        let me = this;
     me.codigo = item;
     console.log(me.codigo + " codigo")
     ref.child('/imagenes'+ "/" + 'ff.jpg')
      .listAll()
      .then( (res) =>{
        console.log(res)
        res.items.map( (item) =>{
          ref.child(item.fullPath)
          .getDownloadURL()
          .then((url) =>{
            this.imagenes.push(url)
          })
        })
      })
      this.modalImg = true;
    },
    generarPdf(id) {
      var docRef = db.collection("usuarios").doc(id);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            var imgRef = ref.child(
              "imagenes/" + "fp" + doc.data().documento + ".jpg"
            );

            imgRef
              .getDownloadURL()
              .then(function (url) {
                var xhr = new XMLHttpRequest();
                xhr.responseType = "blob";
                xhr.onload = function (event) {
                  var blob = xhr.response;
                };
                xhr.open("GET", url);
                xhr.send();
              })
              .catch(function (error) {
                Swal.fire("No se pudo descargar la imagen", error, "Info");
              });

            console.log("Este documento es :", doc.data());
            const logo = require("../assets/imagenPerfil.jpg");
            const pdf = new jsPDF();
            var imgLogo = new Image();
            imgLogo.src = logo;
            pdf.addImage(imgLogo, "PNG", 84, 45, 43, 50);
            pdf.setFontSize(18);
            pdf.text("Hoja de vida", 90, 30);
            pdf.setFontSize(14);
            pdf.rect(72, 109, 68, 18);
            pdf.text("DATOS PERSONALES", 80, 120);
            pdf.setFontSize(12);
            pdf.text("Primer nombre: " + doc.data().primernombre, 20, 140);
            pdf.text("Segundo nombre: " + doc.data().segundonombre, 120, 140);
            pdf.text("Primer apellido: " + doc.data().primerapellido, 20, 150);
            pdf.text(
              "Segundo apellido: " + doc.data().segundoapellido,
              120,
              150
            );
            pdf.text("Tipo de documento: " + doc.data().tipodocumento, 20, 160);
            pdf.text("Documento: " + doc.data().documento, 120, 160);
            pdf.text("Altura en cms: " + doc.data().altura, 20, 170);
            pdf.text("Género: " + doc.data().genero, 120, 170);
            pdf.text("Fecha de nacimiento: " + doc.data().nacimiento, 20, 180);
            pdf.text("Estado civil: " + doc.data().civil, 120, 180);
            pdf.text("Correo eléctronico: " + doc.data().email, 20, 190);
            pdf.text("País: " + doc.data().pais, 20, 200);
            pdf.text("Departamento: " + doc.data().departamento, 120, 200);
            pdf.text("Ciudad: " + doc.data().municipio, 20, 210);
            pdf.text("Zona: " + doc.data().zona, 120, 210);
            pdf.text("Sector: " + doc.data().sector, 20, 220);
            pdf.text("Dirección: " + doc.data().direccionResidencia, 120, 220);
            pdf.text(
              "Tipo de vivienda: " + doc.data().viviendaResidencia,
              20,
              230
            );
            pdf.text("Modalidad: " + doc.data().modalidadResidencia, 120, 230);
            pdf.text("Experiencia laboral: " + doc.data().experiencia, 20, 240);
            pdf.text("Años: " + doc.data().year, 120, 240);
            pdf.text("Meses: " + doc.data().meses, 140, 240);
            pdf.text("Teléfono: " + doc.data().telefono, 20, 250);

            pdf.save("Hoja de vida " + doc.data().documento + ".pdf");
          } else {
            console.log("Documento no encontrado!");
          }
        })
        .catch((error) => {
          console.log("Error llamando documento:", error);
        });
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>