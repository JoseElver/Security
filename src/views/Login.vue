<template>
  <v-app id="inspire">
    <v-container class="fill-height" fluid>
      <div align="center" justify="center">
        <div cols="12" sm="8" md="8" class="tamaño">
          <v-card class="elevation 12">
            <v-window v-model="step">
              <v-window-item :value="1">
                <v-row>
                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 black--text text--accent-3"
                      >
                        Inicia sesión con Security
                      </h1>
                      <div class="text-center mt-4">
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>

                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-google-plus</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mt-4">
                        Dígite su correo electrónico para iniciar sesión
                      </h4>
                      <v-form>
                        <v-text-field
                          type="text"
                          label="Email"
                          color="black"
                          v-model="userLogin.email"
                        />

                        <v-text-field
                          label="Contraseña"
                          v-model="userLogin.password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-form>
                      <h6 class="login-label text-center mt-4">
                        ¿Olvidó su contraseña?
                      </h6>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn
                        rounded
                        color="blue"
                        class="boton"
                        dark
                        @click="inicioSesion()"
                        >Iniciar sesión</v-btn
                      >
                    </div>
                  </v-col>
                  <v-col cols="12" md="4" class="blue">
                    <v-card-text class="white--text mt-12">
                      <h1 class="carta text-center display-1">Hola, Amigo!</h1>
                      <h5 class="text-center">
                        Ingrese sus datos personales y comience a trabajar con
                        nosotros
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step++"
                        >Registrarse</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
              <v-window-item :value="2">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="blue">
                    <v-card-text class="white--text mt-12">
                      <h1 class="carta2 text-center display-1">
                        Bienvenido de nuevo!
                      </h1>
                      <h5 class="text-center">
                        Para mantenerse conectado con nosotros, inicie sesión
                        con su información personal
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--"
                        >Iniciar sesión</v-btn
                      >
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 black--text text--accent-3"
                      >
                        Crear cuenta
                      </h1>
                      <div class="text-center mt-4">
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-facebook</v-icon>
                        </v-btn>

                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-google-plus</v-icon>
                        </v-btn>
                        <v-btn class="mx-2" fab color="black" outlined>
                          <v-icon>mdi-instagram</v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mt-4">
                        Dígite su correo electrónico para registrarse
                      </h4>
                      <v-form>
                        <v-text-field
                          type="text"
                          label="Email"
                          color="black"
                          v-model="userLogin.email"
                        />

                        <v-text-field
                          label="Contraseña"
                          v-model="userLogin.password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                        ></v-text-field>

                        <v-text-field
                          label="Confirmar contraseña"
                          v-model="userLogin.confirmPassword"
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show2 ? 'text' : 'password'"
                          @click:append="show2 = !show2"
                        ></v-text-field>
                      </v-form>
                    </v-card-text>
                    <div class="text-center mt-n5">
                      <v-btn
                        class="boton2"
                        rounded
                        color="blue"
                        dark
                        @click="registro()"
                        >Registrarse</v-btn
                      >
                    </div>
                  </v-col>
                </v-row>
              </v-window-item>
            </v-window>
          </v-card>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { db } from "../firebaseDb";
import Swal from "sweetalert2";

export default {
  data: () => ({
    step: 1,
    show1: false,
    show2: false,
    userLogin: {},
    password: "",

    rules: {
      required: (value) => !!value || "Requerido.",
      email: [
        (v) => (v || "").match(/@/) || "Por favor ingrese el e-mail de cuenta",
      ],
    },
  }),

  methods: {
    registro() {
      var bd = "";
      var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!EMAIL_REGEXP.test(this.userLogin.email)) {
        Swal.fire(
          "¡Atención!",
          "La dirección de email " + this.userLogin.email + " está incompleta",
          "info"
        );
      } else if (this.userLogin.password == null) {
        Swal.fire("¡Atención!", "Digite la contraseña por favor", "info");
      } else if (this.userLogin.email == null) {
        Swal.fire("¡Atención!", "Digite el correo por favor", "info");
      } else if (this.userLogin.confirmPassword == null) {
        Swal.fire("¡Atención!", "Confirme la contraseña por favor", "info");
      } else if (this.userLogin.confirmPassword != this.userLogin.password) {
        Swal.fire("¡Atención!", "Las contraseñas no coinciden", "info");
      } else {
        db.collection("userLogin")
          .add(this.userLogin)
          .then(() => {
            Swal.fire(
              "¡Felicitaciones!",
              "¡Registrado correctamente!",
              "success"
            );
            this.userLogin.email = "";
            this.userLogin.password = "";
            this.userLogin.confirmPassword = "";
            this.resetForm()
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
     inicioSesion() {
        var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!EMAIL_REGEXP.test(this.userLogin.email)) {
        Swal.fire(
          "¡Atención!",
          "La dirección de email " + this.userLogin.email + " está incompleta",
          "info"
        );
      }
    else if (this.userLogin.email == null) {
      Swal.fire("¡Atención!", "Digite el correo por favor", "info");
    } else if (this.userLogin.password == null) {
      Swal.fire("¡Atención!", "Digite la contraseña por favor", "info");
    } else {
       var bd=""
        const usuarioLogin =  db.collection('userLogin');
        const querry = usuarioLogin.where("email","==",this.userLogin.email).where("password","==",this.userLogin.password);
        querry.get().then((snapshotChange) => {
                snapshotChange.forEach((doc) => {
              console.log(`Si hay registro`);
              this.$router.push('/list')
                   var bd=1; 
                });
         
            })
    }
  },
  resetForm () {
      this.$refs.form.reset()
    },
  },
 
  props: {
    source: String,
  },
};
</script>
<style scoped>
.login-label {
  color: rgb(10, 95, 223);
  font-size: 16;
  align-self: center;
}
.carta {
  margin-top: 50%;
}
.carta2 {
  margin-top: 30%;
}
.boton {
  margin-bottom: 10%;
}
.boton2 {
  margin-top: 5%;
  margin-bottom: 10%;
}
</style>