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
                            <router-link :to="{name: 'edit', params: { id: usuario.key }}" class="btn btn-primary">Editar
                            </router-link>
                            <button @click.prevent="deleteUser(usuario.key)" class="btn btn-danger">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { db } from '../firebaseDb';
    import Swal from 'sweetalert2'
    
    export default {
        data() {
            return {
                usuarios: []
            }
        },
        created() {
            db.collection('usuarios').onSnapshot((snapshotChange) => {
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
                        telefono: doc.data().telefono
                    })
                });
            })
        },
        methods: {
            deleteUser(id){
                Swal.fire({
     title: `¿Estás seguro que deseas elimiar el registro del usuario?`,
        type: 'question',
        showCancelButton: true,
        cancelButtonColor: '#d33',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: 'Cancelar'
}).then((result) => {

  if (result.isConfirmed) {

         db.collection("usuarios").doc(id).delete().then(() => {
            Swal.fire(
            'Eliminado!',
            'El registro se eliminó éxitosamente',
            'success'
          )
                })
  } else if (result.isDenied) {
    Swal.fire('No se pudo eliminar el registro', '', 'Info')
  }
})
            }
        }
    }
</script>

<style>
    .btn-primary {
        margin-right: 12px;
    }
</style>