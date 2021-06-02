<template>
  <div class="row">
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
                class="btn btn-danger"
              >
                GenerarPDF
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

export default {
  data() {
    return {
      usuarios: [],
      hidden: false,
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
    generarPdf(id) {
      var docRef = db.collection("usuarios").doc(id);

      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Este documento es :", doc.data());
            const logo = require("../assets/logotipo.png");
            const pdf = new jsPDF();
            var imgLogo = new Image();
            imgLogo.src = logo;
            pdf.addImage(imgLogo, "PNG", 15, 10, 18, 16);
            pdf.setFontSize(16);
            pdf.text("Hoja de vida", 70, 30);
            pdf.setFontSize(14);
            pdf.text("DATOS PERSONALES", 20, 50);
            pdf.setFontSize(12);
            pdf.text("Primer nombre: " + doc.data().primernombre, 20, 60);
            pdf.rect(10, 20, 150, 75);
            pdf.line(20, 40, 60, 40)
            pdf.text("Segundo nombre: " + doc.data().segundonombre, 120, 60);
            pdf.text("Primer apellido: " + doc.data().primerapellido, 20, 70);
            pdf.text("Segundo apellido: " + doc.data().segundoapellido, 120, 70);
            pdf.text("Tipo de documento: " + doc.data().tipodocumento, 20, 80);
            pdf.text("Documento: " + doc.data().documento, 120, 80);
            pdf.text("Altura en cms: " + doc.data().altura, 20, 90);
            pdf.text("Género: " + doc.data().genero, 120, 90);
            pdf.text("Fecha de nacimiento: " + doc.data().nacimiento, 20, 100);
            pdf.text("Estado civil: " + doc.data().civil, 120, 100);
            pdf.text("Correo eléctronico: " + doc.data().email, 20, 110);
            pdf.text("País: " + doc.data().pais, 20, 120);
            pdf.text("Departamento: " + doc.data().departamento, 120, 120);
            pdf.text("Ciudad: " + doc.data().municipio, 20, 130);
            pdf.text("Zona: " + doc.data().zona, 120, 130);
            pdf.text("Sector: " + doc.data().sector, 20, 140);
            pdf.text("Dirección: " + doc.data().direccionResidencia, 120, 140);
            pdf.text("Tipo de vivienda: " + doc.data().viviendaResidencia, 20, 150);
            pdf.text("Modalidad: " + doc.data().modalidadResidencia, 120, 150);
            pdf.text("Experiencia laboral: " + doc.data().experiencia, 20, 160);
            pdf.text("Años: " + doc.data().year, 120, 160);
            pdf.text("Meses: " + doc.data().meses, 140, 160);
            pdf.text("Teléfono: " + doc.data().telefono, 20, 170);
            
            
            let header = ["Primer_Nombre", "Segundo_Nombre", "Primer_Apellido"];
            let headerConfig = header.map((key) => ({
              name: key,
              prompt: key,
              width: 70,
              align: "center",
              padding: 0,
            }));
            let data = [
              { Primer_Nombre: doc.data().primernombre, Segundo_Nombre: doc.data().segundonombre, Primer_Apellido: doc.data().primerapellido }
            ];
            pdf.table(20, 520, data, headerConfig);
            pdf.table(20, 520, data, headerConfig);
            pdf.save("ahora.pdf");
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