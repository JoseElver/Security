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
    generarPdf() {

      const logo = require('../assets/logotipo.png')
      const doc = new jsPDF();
      var imgLogo = new Image()
      imgLogo.src = logo
      doc.addImage(imgLogo, 'PNG',  15, 10, 18, 16)
      doc.text("Hello world!", 10, 10);
      doc.setFontSize(36);
      let header = ["id","name"];
      let headerConfig = header.map(key=>({ 'name': key,
      'prompt': key,
      'width':50,
      'align':'center',
      'padding':0}));
      let data = [{id: '1', name: "Peter"},{id: '2', name: "Chris"}];
      doc.table(20, 30, data, headerConfig);
      doc.save("a4.pdf");
    },
  },
};
</script>

<style>
.btn-primary {
  margin-right: 12px;
}
</style>