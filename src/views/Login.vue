<template>
  <v-app id="inspire">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation 12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 black--text text--accent-3"
                        >Inicia sesión con Security</h1>
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
                        <h4 class="text-center mt-4">Dígite su correo electrónico para iniciar sesión</h4>
                        <v-form>
                          <v-text-field
                            type="text"
                            label="Email"
                            color="black"
                          />

                           <v-text-field
                           label="Contraseña"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
                        </v-form>
                        <h6 class="login-label text-center mt-4">¿Olvidó su contraseña?</h6>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="blue" class="boton" dark>Iniciar sesión</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="blue">
                      <v-card-text class="white--text mt-12">
                        <h1 class=" carta text-center display-1">Hola, Amigo!</h1>
                        <h5
                          class="text-center"
                        >Ingrese sus datos personales y comience a trabajar con nosotros</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="blue">
                      <v-card-text class="white--text mt-12">
                        <h1 class="carta2 text-center display-1">Bienvenido de nuevo!</h1>
                        <h5
                          class="text-center"
                        >Para mantenerse conectado con nosotros, inicie sesión con su información personal</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--">Iniciar sesión</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 black--text text--accent-3">Crear cuenta</h1>
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
                        <h4 class="text-center mt-4">Dígite su correo electrónico para registrarse</h4>
                        <v-form>
                             <v-text-field
                            type="text"
                            label="Email"
                            color="black"
                          />

                           <v-text-field
                           label="Contraseña"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>

          <v-text-field
            label="Confirmar contraseña"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
          ></v-text-field>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn class="boton2" rounded color="blue" dark>Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    show1: false,
        show2: true,
        show3: false,
        show4: false,
        password: '',
        rules: {
          required: value => !!value || 'Required.',
          emailMatch: () => (`The email and password you entered don't match`),
        },
  }),
  props: {
    source: String
  }
};
</script>
<style scoped>
.login-label{
        color: rgb(10, 95, 223);
        font-size: 16;
        align-self: center;
}
.carta {
  margin-top: 50%;
}
.carta2 {
  margin-top: 20%;
}
.boton {
  margin-bottom: 10%;
}
.boton2 {
  margin-top: 5%;
  margin-bottom: 10%;
}
</style>