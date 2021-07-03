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
        <tbody id="resultado">
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
      imagenesFamilia: [],
      imagenesVivienda: [],
      docIdentidad: [],
      docLaboral: [],
      docAcademico: [],
      docCursos: [],
      docExperiencias: [],
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
       return new Promise(resolve => {
      let me = this;
      var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
         console.log("existe"+doc.exists);
        if (doc.exists) {
          console.log("item"+item +"codigo"+doc.data().documento );
         ref
            .child('/imagenes'+ "/fp"+ doc.data().documento + "/")
            .listAll()
            .then((res) => {
               res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url+"Resultado url");
                     me.imagenes.push(url);
                     resolve('resolved');
                  })
                   .catch(() => {
                    resolve('rejected');
                   });
              });
            });
        }
        });
    });
    },
    mostrarImgFamilia(item) { 
      return new Promise(resolve => {
      let me = this;
      var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
         console.log("existe"+doc.exists);
        if (doc.exists) {
          console.log("item"+item +"codigo"+doc.data().documento );
         ref
            .child('/imagenes'+ "/ff"+ doc.data().documento + "/")
            .listAll()
            .then((res) => {
               res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url+"Resultado url");
                     me.imagenesFamilia.push(url);
                     resolve('resolved');
                  })
                   .catch(() => {
                    resolve('rejected');
                   });
              });
            });
        }
        });
    });
    },
    mostrarImgVivienda(item) {
       return new Promise(resolve => {
      let me = this;
      var docRef = db.collection("usuarios").doc(item);
        docRef.get().then((doc) => {
         console.log("existe"+doc.exists);
        if (doc.exists) {
          console.log("item"+item +"codigo"+doc.data().documento );
         ref
            .child('/imagenes'+ "/fv"+ doc.data().documento + "/")
            .listAll()
            .then((res) => {
               res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    console.log(url+"Resultado url");
                     me.imagenesVivienda.push(url);
                     resolve('resolved');
                  })
                   .catch(() => {
                    resolve('rejected');
                   });
              });
            });
        }
        });
    });
    },
   mostrarDocIdentidad(item) {
      var docRef = db.collection("usuarios").doc(item);
      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Este documento es :", doc.data());
          let me = this;
          me.codigo = item;
          console.log(me.codigo + " codigo");
          ref
            .child("documentos" + "/cedula" + doc.data().documento + "/")
            .listAll()
            .then((res) => {
              console.log(res);
              res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    this.docIdentidad.push(url);
                  });
              });
            });
        }
      });
    },
    mostrarCertLaborales(item) {
      var docRef = db.collection("usuarios").doc(item);

      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Este documento es :", doc.data());
          let me = this;
          me.codigo = item;
          console.log(me.codigo + " codigo");
          ref
            .child("documentos" + "/cl" + doc.data().documento + "/")
            .listAll()
            .then((res) => {
              console.log(res);
              res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    this.docLaboral.push(url);
                  });
              });
            });
        }
      });
    },
    mostrarCertAcademico(item) {
      var docRef = db.collection("usuarios").doc(item);

      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Este documento es :", doc.data());
          let me = this;
          me.codigo = item;
          console.log(me.codigo + " codigo");
          ref
            .child("documentos" + "/ca" + doc.data().documento + "/")
            .listAll()
            .then((res) => {
              console.log(res);
              res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    this.docAcademico.push(url);
                  });
              });
            });
        }
      });
    },
    mostrarCertCursos(item) {
      var docRef = db.collection("usuarios").doc(item);

      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Este documento es :", doc.data());
          let me = this;
          me.codigo = item;
          console.log(me.codigo + " codigo");
          ref
            .child("documentos" + "/cc" + doc.data().documento + "/")
            .listAll()
            .then((res) => {
              console.log(res);
              res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    this.docCursos.push(url);
                  });
              });
            });
        }
      });
    },
    mostrarCertExperiencias(item) {
      var docRef = db.collection("usuarios").doc(item);

      docRef.get().then((doc) => {
        if (doc.exists) {
          console.log("Este documento es :", doc.data());
          let me = this;
          me.codigo = item;
          console.log(me.codigo + " codigo");
          ref
            .child("documentos" + "/ce" + doc.data().documento + "/")
            .listAll()
            .then((res) => {
              console.log(res);
              res.items.map((item) => {
                ref
                  .child(item.fullPath)
                  .getDownloadURL()
                  .then((url) => {
                    this.docExperiencias.push(url);
                  });
              });
            });
        }
      });
    },
   async generarPdf(id) {
     await this.mostrarDocIdentidad(id);
     await this.mostrarCertLaborales(id);
     await this.mostrarCertAcademico(id);
     await this.mostrarCertCursos(id);
     await this.mostrarCertExperiencias(id);
     await this.mostrarImg(id);
     await this.mostrarImgFamilia(id);
     await this.mostrarImgVivienda(id);
     
      var docRef = db.collection("usuarios").doc(id);
      let me = this;
      docRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            console.log("Este documento es :", doc.data());
            console.log("Aqui es " + me.docIdentidad);
            const logo = me.imagenes[0];
            const pdf = new jsPDF();
            var imgLogo = new Image();
            imgLogo.src = logo;
            pdf.addImage(imgLogo, "JPEG", 86, 47, 43, 50);
            pdf.setFontSize(26);
            pdf.text("Hoja de vida", 82, 30);
            pdf.setFontSize(14);
            pdf.rect(48, 113, 112, 10);
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
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("INFORMACIÓN DE RESIDENCIA", 68, 37);
            pdf.setFontSize(12);
            pdf.text("Tipo de vivienda: " + doc.data().vivienda, 20, 55);
            pdf.text("Propietario: " + doc.data().propietario, 120, 55);
            pdf.text("Modalidad: " + doc.data().modalidad, 20, 65);
            pdf.text("Teléfono: " + doc.data().telefono, 120, 65);
            pdf.text(
              "Departamento: " + doc.data().departamentoPropiedad,
              20,
              80
            );
            pdf.text("Ciudad: " + doc.data().ciudadPropiedad, 120, 75);
            pdf.rect(48, 95, 112, 10);
            pdf.setFontSize(14);
            pdf.text("VEHICULO", 90, 102);
            pdf.setFontSize(12);
            pdf.text("Tipo de vehículo: " + doc.data().vehiculo, 20, 120);
            pdf.text("Marca: " + doc.data().marca, 120, 120);
            pdf.text("Placa: " + doc.data().placa, 20, 130);
            pdf.text("Cilindraje: " + doc.data().cilindraje, 70, 130);
            pdf.text("Modelo: " + doc.data().modeloVehiculo, 120, 130);
            pdf.rect(48, 150, 112, 10);
            pdf.setFontSize(14);
            pdf.text("PERTENECIO A UNA INSTITUCION ARMADA", 55, 157);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucion, 20, 175);
            pdf.text("Estado: " + doc.data().estadoLaboral, 120, 175);
            pdf.text(
              "Último grado obtenido: " + doc.data().ultimoGrado,
              20,
              185
            );
            pdf.text("Fecha inicial: " + doc.data().fechaIncial, 20, 195);
            pdf.text("Fecha final: " + doc.data().fechaFinal, 120, 195);
            pdf.text("Motivo de retiro: " + doc.data().retiro, 20, 205);
            pdf.rect(48, 220, 112, 10);
            pdf.setFontSize(14);
            pdf.text("IDIOMAS", 90, 227);
            pdf.setFontSize(12);
            pdf.text("Primer idioma: " + doc.data().idiomas, 20, 245);
            pdf.text("Nivel escritura: " + doc.data().nivelEscritura, 120, 245);
            pdf.text("Nivel lectura: " + doc.data().nivelLectura, 20, 255);
            pdf.text("Nivel conversacional: " + doc.data().nivelConversacional, 120, 255);
            pdf.text("Observaciones: " + doc.data().observaciones, 20, 265);
            pdf.addPage();
            pdf.text("Segundo idioma (Opcional): " + doc.data().idiomas2, 20, 30);
            pdf.text("Nivel escritura: " + doc.data().nivelEscritura2, 120, 30);
            pdf.text("Nivel lectura: " + doc.data().nivelLectura2, 20, 40);
            pdf.text(
              "Nivel conversacional: " + doc.data().nivelConversacional2,
              120,
              40
            );
            pdf.text("Observaciones: " + doc.data().observaciones2, 20, 50);
            pdf.text(
              "Tercer idioma (Opcional): " + doc.data().idiomas3,
              20,
              65
            );
            pdf.text(
              "Nivel escritura: " + doc.data().nivelEscritura3,
              120,
              65
            );
            pdf.text("Nivel lectura: " + doc.data().nivelLectura3, 20, 75);
            pdf.text(
              "Nivel conversacional: " + doc.data().nivelConversacional3,
              120,
              75
            );
            pdf.text("Observaciones: " + doc.data().observaciones3, 20, 85);
            pdf.rect(48, 100, 112, 10);
            pdf.setFontSize(14);
            pdf.text("ARMA", 95, 107);
            pdf.setFontSize(12);
            pdf.text("Tipo de arma: " + doc.data().arma, 20, 125);
            pdf.text("Modalidad: " + doc.data().modalidadArma, 120, 125);
            pdf.text("Calibre: " + doc.data().calibre, 20, 135);
            pdf.text("Número de arma: " + doc.data().numeroArma, 120, 135);
            pdf.rect(48, 150, 112, 10);
            pdf.setFontSize(14);
            pdf.text("ESTIMACIÓN SALARIAL", 80, 157);
            pdf.setFontSize(12);
            pdf.text("Salario estimado: " + doc.data().salario, 70, 175);
            pdf.rect(48, 190, 112, 10);
            pdf.setFontSize(14);
            pdf.text("INFORMACION FAMILIAR", 70, 197);
            pdf.setFontSize(12);
            pdf.text(
              "Nombres y apellidos del padre: " + doc.data().nombrePadre,
              20,
              215
            );
            pdf.text("Fallecido: " + doc.data().fallecidoPadre, 20, 225);
            pdf.text("País de residencia: " + doc.data().paisPadre, 120, 225);
            pdf.text("Departamento: " + doc.data().departamentoPadre, 20, 235);
            pdf.text("Ciudad: " + doc.data().municipioPadre, 120, 235);
            pdf.text("Teléfono: " + doc.data().telefonoPadre, 20, 245);
            pdf.text("Dirección: " + doc.data().direccionPadre, 120, 245);
            pdf.text("Ocupación: " + doc.data().ocupacionPadre, 20, 255);
            pdf.addPage();
            pdf.text(
              "Nombres y apellidos de la madre: " + doc.data().nombreMadre,
              20,
              30
            );
            pdf.text("Fallecida: " + doc.data().fallecidoMadre, 120, 40);
            pdf.text("País de residencia: " + doc.data().paisMadre, 20, 40);
            pdf.text("Departamento: " + doc.data().departamentoMadre, 120, 50);
            pdf.text("Ciudad: " + doc.data().municipioMadre, 20, 50);
            pdf.text("Teléfono: " + doc.data().telefonoMadre, 20, 60);
            pdf.text("Dirección: " + doc.data().direccionMadre, 120, 60);
            pdf.text("Ocupación: " + doc.data().ocupacionMadre, 20, 70);
            pdf.rect(48, 85, 112, 10);
            pdf.setFontSize(14);
            pdf.text("DOCUMENTOS PERSONALES", 70, 92);
            pdf.setFontSize(12);
            pdf.text("Reservista: " + doc.data().reservista, 20, 110);
            pdf.text("Institución: " + doc.data().institucionLibreta, 120, 110);
            pdf.text(
              "Nro. Libreta militar: " + doc.data().numeroLibreta,
              20,
              120
            );
            pdf.text(
              "Clase libreta militar: " + doc.data().claseLibreta,
              120,
              120
            );
            pdf.text(
              "Fecha de expedición: " + doc.data().fechaLibreta,
              20,
              130
            );
            pdf.text(
              "Licencia de conducción: " + doc.data().poseeLicencia,
              120,
              130
            );
            pdf.text(
              "Clase licencia: " + doc.data().licenciaConduccion,
              20,
              140
            );
            pdf.text(
              "Número de la licencia: " + doc.data().numeroLicencia,
              120,
              140
            );
            pdf.rect(48, 155, 112, 10);
            pdf.setFontSize(14);
            pdf.text("REFERENCIAS FAMILIARES", 70, 162);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 184, 136, 184);
            pdf.text("Primera referencia familiar", 80, 182);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombreFamiliar1, 20, 200);
            pdf.text(
              "Departamento: " + doc.data().departamentoFamiliar1,
              20,
              210
            );
            pdf.text("Municipio: " + doc.data().municipioFamiliar1, 120, 210);
            pdf.text("Dirección: " + doc.data().direccionFamiliar1, 20, 220);
            pdf.text("Parentezco: " + doc.data().parentescoFamiliar1, 120, 220);
            pdf.text("Celular: " + doc.data().celularFamiliar1, 20, 230);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoFamiliar1,
              120,
              230
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaFamiliar1,
              20,
              240
            );
            pdf.addPage();
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 32, 138, 32);
            pdf.text("Segunda referencia familiar", 80, 30);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombreFamiliar2, 20, 45);
            pdf.text(
              "Departamento: " + doc.data().departamentoFamiliar2,
              120,
              55
            );
            pdf.text("Municipio: " + doc.data().municipioFamiliar2, 20, 55);
            pdf.text("Dirección: " + doc.data().direccionFamiliar2, 120, 65);
            pdf.text("Parentezco: " + doc.data().parentescoFamiliar2, 20, 65);
            pdf.text("Celular: " + doc.data().celularFamiliar2, 120, 75);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoFamiliar2,
              20,
              75
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaFamiliar2,
              120,
              85
            );
            pdf.rect(48, 105, 112, 10);
            pdf.setFontSize(14);
            pdf.text("REFERENCIAS PERSONALES", 70, 112);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 132, 138, 132);
            pdf.text("Primera referencia personal", 80, 130);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombrePersonal1, 20, 145);
            pdf.text(
              "Departamento: " + doc.data().departamentoPersonal1,
              120,
              155
            );
            pdf.text("Municipio: " + doc.data().municipioPersonal1, 20, 155);
            pdf.text("Dirección: " + doc.data().direccionPersonal1, 120, 165);
            pdf.text("Celular: " + doc.data().celularPersonal1, 20, 165);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoPersonal1,
              120,
              175
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaPersonal1,
              20,
              175
            );
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 192, 140, 192);
            pdf.text("Segunda referencia personal", 80, 190);
            pdf.setFontSize(12);
            pdf.text("Nombre Completo: " + doc.data().nombrePersonal2, 20, 205);
            pdf.text(
              "Departamento: " + doc.data().departamentoPersonal2,
              120,
              215
            );
            pdf.text("Municipio: " + doc.data().municipioPersonal2, 20, 215);
            pdf.text("Dirección: " + doc.data().direccionPersonal2, 120, 225);
            pdf.text("Celular: " + doc.data().celularPersonal2, 20, 225);
            pdf.text(
              "Teléfono fijo: " + doc.data().telefonoFijoPersonal2,
              120,
              235
            );
            pdf.text(
              "Teléfono oficina: " + doc.data().telefonoOficinaPersonal2,
              20,
              235
            );
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("EXPERIENCIA LABORAL", 70, 37);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 57, 134, 57);
            pdf.text("Primera referencia laboral", 80, 55);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa1, 20, 70);
            pdf.text("Labora actualmente: " + doc.data().labora1, 120, 70);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral1,
              20,
              80
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral1, 120, 80);
            pdf.text(
              "Fecha incial: " + doc.data().fechaIncialLaboral1,
              20,
              90
            );
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral1, 120, 90);
            pdf.text("Cargo: " + doc.data().cargoActual1, 20, 100);
            pdf.text("Especialidad: " + doc.data().especialidad1, 20, 110);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 130, 136, 130);
            pdf.text("Segunda referencia laboral", 80, 128);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa2, 20, 145);
            pdf.text("Labora actualmente: " + doc.data().labora2, 120, 145);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral2,
              20,
              155
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral2, 120, 155);
            pdf.text(
              "Fecha incial: " + doc.data().fechaIncialLaboral2,
              20,
              165
            );
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral2, 120, 165);
            pdf.text("Cargo: " + doc.data().cargoActual2, 20, 175);
            pdf.text("Especialidad: " + doc.data().especialidad2, 20, 185);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 205, 134, 205);
            pdf.text("Tercera referencia laboral", 80, 203);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa3, 20, 220);
            pdf.text("Labora actualmente: " + doc.data().labora3, 120, 220);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral3,
              20,
              230
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral3, 120, 230);
            pdf.text("Fecha incial: " + doc.data().fechaIncialLaboral3, 20, 240);
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral3, 120, 240);
            pdf.text("Cargo: " + doc.data().cargoActual3, 20, 250);
            pdf.text("Especialidad: " + doc.data().especialidad3, 20, 260);
            pdf.setFontSize(13);
            pdf.addPage();
            pdf.setLineWidth(0.5);
            pdf.line(80, 32, 134, 32);
            pdf.text("Cuarta referencia laboral", 80, 30);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa4, 20, 45);
            pdf.text("Labora actualmente: " + doc.data().labora4, 120, 45);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral4,
              20,
              55
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral4, 120, 55);
            pdf.text(
              "Fecha incial: " + doc.data().fechaIncialLaboral4,
              20,
              65
            );
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral4, 120, 65);
            pdf.text("Cargo: " + doc.data().cargoActual4, 20, 75);
            pdf.text("Especialidad: " + doc.data().especialidad4, 20, 85);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 102, 132, 102);
            pdf.text("Quinta referencia laboral", 80, 100);
            pdf.setFontSize(12);
            pdf.text("Empresa: " + doc.data().empresa5, 20, 115);
            pdf.text("Labora actualmente: " + doc.data().labora5, 120, 115);
            pdf.text(
              "Departamento: " + doc.data().departamentoLaboral5,
              20,
              125
            );
            pdf.text("Municipio: " + doc.data().municipioLaboral5, 120, 125);
            pdf.text(
              "Fecha incial: " + doc.data().fechaIncialLaboral5,
              20,
              135
            );
            pdf.text("Fecha final: " + doc.data().fechaFinalLaboral5, 120, 135);
            pdf.text("Cargo: " + doc.data().cargoActual5, 20, 145);
            pdf.text("Especialidad: " + doc.data().especialidad5, 20, 155);
            pdf.rect(48, 173, 112, 10);
            pdf.setFontSize(14);
            pdf.text("FORMACION ACADEMICA", 75, 180);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 200, 142, 200);
            pdf.text("Primer documento académico", 80, 198);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica1,
              20,
              225
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica1, 120, 225);
            pdf.text("Título obtenido: " + doc.data().titulo1, 20, 235);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico1, 20, 245);
            pdf.addPage();
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 32, 145, 32);
            pdf.text("Segundo documento académico", 80, 30);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica2,
              20,
              45
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica2, 120, 45);
            pdf.text("Título obtenido: " + doc.data().titulo2, 20, 55);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico2, 20, 65);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 82, 142, 82);
            pdf.text("Tercer documento académico", 80, 80);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica3,
              20,
              95
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica3, 120, 95);
            pdf.text("Título obtenido: " + doc.data().titulo3, 20, 105);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico3, 20, 115);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 132, 142, 132);
            pdf.text("Cuarto documento académico", 80, 130);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica4,
              20,
              145
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica4, 120, 145);
            pdf.text("Título obtenido: " + doc.data().titulo4, 20, 155);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico4, 20, 165);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(80, 182, 142, 182);
            pdf.text("Quinto documento académico", 80, 180);
            pdf.setFontSize(12);
            pdf.text(
              "Institución: " + doc.data().institucionAcademica4,
              20,
              195
            );
            pdf.text("Fecha título: " + doc.data().fechaAcademica4, 120, 195);
            pdf.text("Título obtenido: " + doc.data().titulo4, 20, 205);
            pdf.text("Nivel académico: " + doc.data().nivelAcademico4, 20, 215);
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("CURSOS", 95, 37);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 55, 117, 55);
            pdf.text("Primer curso", 90, 53);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso1, 20, 70);
            pdf.text("Fecha título: " + doc.data().fechaCurso1, 120, 70);
            pdf.text("Título obtenido: " + doc.data().tituloCurso1, 20, 80);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 97, 120, 97);
            pdf.text("Segundo curso", 90, 95);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso2, 20, 110);
            pdf.text("Fecha título: " + doc.data().fechaCurso2, 120, 110);
            pdf.text("Título obtenido: " + doc.data().tituloCurso2, 20, 120);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 137, 117, 137);
            pdf.text("Tercer curso", 90, 135);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso3, 20, 150);
            pdf.text("Fecha título: " + doc.data().fechaCurso3, 120, 150);
            pdf.text("Título obtenido: " + doc.data().tituloCurso3, 20, 160);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 177, 117, 177);
            pdf.text("Cuarto curso", 90, 175);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso4, 20, 190);
            pdf.text("Fecha título: " + doc.data().fechaCurso4, 120, 190);
            pdf.text("Título obtenido: " + doc.data().tituloCurso4, 20, 200);
            pdf.setFontSize(13);
            pdf.setLineWidth(0.5);
            pdf.line(90, 217, 117, 217);
            pdf.text("Quinto curso", 90, 215);
            pdf.setFontSize(12);
            pdf.text("Institución: " + doc.data().institucionCurso5, 20, 230);
            pdf.text("Fecha título: " + doc.data().fechaCurso5, 120, 230);
            pdf.text("Título obtenido: " + doc.data().tituloCurso5, 20, 240);
            pdf.addPage();
            pdf.rect(48, 30, 112, 10);
            pdf.setFontSize(14);
            pdf.text("SOPORTES", 90, 37);
            pdf.setFontSize(14);
            pdf.text("Foto familiar", 45, 60);
            const familia = me.imagenesFamilia[0];
            var imgFamilia = new Image();
            imgFamilia.src = familia;
            pdf.addImage(imgFamilia, "JPEG", 20, 70, 80, 50);
            pdf.setFontSize(14);
            pdf.text("Foto vivienda", 135, 60);
            const vivienda = me.imagenesVivienda[0];
            var imgVivienda = new Image();
            imgVivienda.src = vivienda;
            pdf.addImage(imgVivienda, "JPEG", 110, 70, 80, 50);
            pdf.setFontSize(13);
            pdf.setTextColor("#0084ff");
            pdf.textWithLink("Ver documento de identidad", 20, 140, {
              url: me.docIdentidad[0],
            });
            pdf.textWithLink("Ver certificados laborales", 20, 160, {
              url: me.docLaboral[0],
            });
            pdf.textWithLink("Ver certificados académicos", 20, 180, {
              url: me.docAcademico[0],
            });
            pdf.textWithLink("Ver certificados de cursos", 20, 200, {
              url: me.docCursos[0],
            });
            pdf.textWithLink("Ver certificados de experiencias", 20, 220, {
              url: me.docExperiencias[0],
            });

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