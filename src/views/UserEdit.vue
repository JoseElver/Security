<template>
    <div class="row justify-content-center">
        <div class="col-md-5">
            <h3 class="text-center">Actualizar usuario</h3>
            <form @submit.prevent="onUpdateForm">
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
      @change="$v.select.$touch()"
      @blur="$v.select.$touch()"
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
</template>

<script>
    import { db } from '../firebaseDb';

    export default {
        data() {
            return {
                usuario: {
                }
            }
        },
        created() {
            let dbRef = db.collection('usuarios').doc(this.$route.params.id);
            dbRef.get().then((doc) => {
                this.usuario = doc.data();
            }).catch((error) => {
                console.log(error)
            })
        },
        methods: {
            onUpdateForm(event) {
                event.preventDefault()
                db.collection('usuarios').doc(this.$route.params.id)
                .update(this.usuario).then(() => {
                    console.log("Datos actualizados");
                    this.$router.push('/list')
                }).catch((error) => {
                    console.log(error);
                });
            }
        }
    }
</script>