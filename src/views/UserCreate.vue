<template>
 <v-app id="inspire">
     <v-container fluid>
    <div class="row justify-content-center">
        <div >
            <h3 class="text-center">Información personal</h3>
           <form @submit.prevent="onFormSubmit">
                <div class="form-group">
                    <label>Primer Nombre</label>
                    <input type="text" class="form-control" v-model="usuario.primernombre" required>
                </div>
                <div class="form-group">
                    <label>Segundo Nombre</label>
                    <input type="text" class="form-control" v-model="usuario.segundonombre" required>
                </div>
                <div class="form-group">
                    <label>Primer Apellido</label>
                    <input type="text" class="form-control" v-model="usuario.primerapellido" required>
                </div>
                 <div class="form-group">
                    <label>Segundo Apellido</label>
                    <input type="text" class="form-control" v-model="usuario.segundoapellido" required>
                </div>
                <label>Tipo de documento</label>
              <v-select
      v-model="usuario.tipodocumento" 
      :items="tipos"
      required
      dense
      solo
    ></v-select>
             <div class="form-group">
                    <label>Documento</label>
                    <input type="number" class="form-control" v-model="usuario.documento" required>
                </div>
                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="usuario.email" required>
                </div>

                <div class="form-group">
                    <label>Teléfono</label>
                    <input type="text" class="form-control" v-model="usuario.telefono" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-primary btn-block">Guardar</button>
                </div>
            </form>
        </div>
    </div>
    <section>
      <h2>DATOS DE LA HOJA DE VIDA</h2>

      <accordion-list :items="accordionData" class="accordion-list">
        <template v-for="item in accordionData" v-slot:[item.id]>
          {{ item.title }}
        </template>

        <template v-for="item in accordionData" v-slot:[item.slug]>
          <div v-html="item.body" :key="item.id" :id="item.slug" />
        </template>
      </accordion-list>
    </section>
     </v-container>
 </v-app>
</template>

<script>
    import { db } from '../firebaseDb';
    import AccordionList from '@/components/accordion-list.vue'

    export default {
        components: { AccordionList },
        data() {
            return {
                tipos: ['Cédula', 'Tarjeta de identidad'],
                usuario: {
                    
                },
                 accordionData: [
        {
          id: "1000",
          slug: "correr",
          title: "Información personal",
          body:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem degendae ratio maxime quidem illis placuit quieta. Suam denique cuique naturam esse ad vivendum ducem. <a href="http://loripsum.net/" target="_blank">Mihi enim satis est, ipsis non satis.</a> Quid, si reviviscant Platonis illi et deinceps qui eorum auditores fuerunt, et tecum ita loquantur? <p><p><b>Cave putes quicquam esse verius.</b> <i>Non laboro, inquit, de nomine.</i> Negat enim summo bono afferre incrementum diem. Vide igitur ne non debeas verbis nostris uti, sententiis tuis. <i>Scrupulum, inquam, abeunti;</i> <a href="http://loripsum.net/" target="_blank">Ratio quidem vestra sic cogit.</a> </p><p><b>Tu vero, inquam, ducas licet, si sequetur;</b> Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. <i>Tum Triarius: Posthac quidem, inquit, audacius.</i> Duo Reges: constructio interrete. <b>Non igitur bene.</b> <a href="http://loripsum.net/" target="_blank">Faceres tu quidem, Torquate, haec omnia;</a> </p>'
        },
         {
          id: "1020",
          slug: "platonis-illi-et-deinceps",
          title: "Propiedades",
          body:
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae autem degendae ratio maxime quidem illis placuit quieta. Suam denique cuique naturam esse ad vivendum ducem. <a href="http://loripsum.net/" target="_blank">Mihi enim satis est, ipsis non satis.</a> Quid, si reviviscant Platonis illi et deinceps qui eorum auditores fuerunt, et tecum ita loquantur? <p><p><b>Cave putes quicquam esse verius.</b> <i>Non laboro, inquit, de nomine.</i> Negat enim summo bono afferre incrementum diem. Vide igitur ne non debeas verbis nostris uti, sententiis tuis. <i>Scrupulum, inquam, abeunti;</i> <a href="http://loripsum.net/" target="_blank">Ratio quidem vestra sic cogit.</a> </p><p><b>Tu vero, inquam, ducas licet, si sequetur;</b> Est autem officium, quod ita factum est, ut eius facti probabilis ratio reddi possit. <i>Tum Triarius: Posthac quidem, inquit, audacius.</i> Duo Reges: constructio interrete. <b>Non igitur bene.</b> <a href="http://loripsum.net/" target="_blank">Faceres tu quidem, Torquate, haec omnia;</a> </p>'
        },
      ]
            }
        },
        methods: {
            onFormSubmit(event) {
                event.preventDefault()
                db.collection('usuarios').add(this.usuario).then(() => {
                    alert("User successfully created!");
                    this.usuario.primernombre = ''
                    this.usuario.segundonombre = ''
                    this.usuario.primerapellido = ''
                    this.usuario.segundoapellido = ''
                    this.usuario.tipodocumento = ''
                    this.usuario.documento = ''
                    this.usuario.email = ''
                    this.usuario.telefono = ''
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>

<style>
  body {
    background-color: #EFF1F0
  }
  
  .example {
    margin-bottom: 64px;
  }
  .accordion-list {
    font-family: Helvetica, Arial, sans-serif;
    box-shadow: 
      0 1px 10px rgba(0, 0, 0, 0.2), 
      0 1px 4px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  .accordion-list h3  {
    border-bottom: 1px solid #EFF1F0;
  }
  .accordion-list article:last-child h3 {
    border-bottom: 0;
  }
  .accordion-list h3,
  .accordion-list p:last-child {
    margin: 0;
  }
  .accordion-list p {
    line-height: 1.4;
    margin-top: 0;
  }
  .accordion-list button {
    position: relative;
    display: block;
    width: 100%;
    padding: 16px 48px 16px 16px;
    background-color: #fff;
    border: 0;
    font-size: 1.1rem;
    line-height: 1.4;
    text-align: left;
    color: #555;
    cursor: pointer;
    outline: none;
  }
  .accordion-list button::after {
    content: '';
    position: absolute;
    top: 27px;
    right: 16px;
    transform-origin: 8px 4px;
    width: 16px;
    height: 9px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 286 165'%3E%3Cpath d='M286 26L260 0 143 117 26 0 0 25l143 140L286 26z' fill='%23333333'/%3E%3C/svg%3E");
  }
  .accordion-list button:hover,
  .accordion-list button:focus {
    background-color: hsl(170, 50%, 45%);
    color: #fff;
  }
  .accordion-list button:hover::after,
  .accordion-list button:focus::after {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 286 165'%3E%3Cpath d='M286 26L260 0 143 117 26 0 0 25l143 140L286 26z' fill='%23ffffff'/%3E%3C/svg%3E");
  }
  .accordion-list h3 + * {
    padding: 32px 16px;
    background-color: #f3f3f3;
  }
</style>