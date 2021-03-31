<template>
  <v-app id="inspire">
    <v-container fluid>
      <div class="row justify-content-center">
        <div class="clase col-md 10">
          <div id="app">
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Información personal</strong></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form
                    @submit.prevent="onFormSubmit"
                    enctype="multipart/form-data"
                    name="f1" 
                    id="f1"
                  >
                    <div class="form-group">
                      <label>Primer Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.primernombre"
                        required
                        autofocus
                      />
                    </div>
                    <div class="form-group">
                      <label>Segundo Nombre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.segundonombre"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Primer Apellido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.primerapellido"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Segundo Apellido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.segundoapellido"
                        required
                      />
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
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.documento"
                        required
                      />
                    </div>
                    <label>Género</label>
                    <v-select
                      v-model="usuario.genero"
                      :items="tipoGenero"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Altura</label>
                      <v-layout>
                        <v-flex xs12 sm2>
                          <input
                            type="number"
                            class="form-control"
                            v-model="usuario.altura"
                            required
                            min="1"
                            max="210"
                          />
                        </v-flex>
                        <v-flex xs12 sm2>
                          <label class="centimetros">centímetros</label>
                        </v-flex>
                      </v-layout>
                    </div>
                    <div class="form-group">
                      <label>Fecha de Nacimiento</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.nacimiento"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <label>Estado Civil</label>
                    <v-select
                      v-model="usuario.civil"
                      :items="tipoCivil"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefono"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Correo electrónico</label>
                      <input
                        type="email"
                        class="form-control"
                        v-model="usuario.email"
                        required
                      />
                    </div>
                 
                    <label>País de residencia</label>
          <v-select
                      v-model="usuario.pais"
                      :items="tipoPais"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento de residencia</label>
                   <select class="form-control" id="departamentos" @click="municipios()" v-model="usuario.departamento">
      <option value="0">Seleccione...</option>
      <option value="AMAZONAS">AMAZONAS</option>
      <option value="ANTIOQUIA">ANTIOQUIA</option>
      <option value="ARAUCA">ARAUCA</option>
    <option value="ATLANTICO">ATLÁNTICO</option>
    <option value="BOLIVAR">BOLÍVAR</option>
    <option value="BOYACA">BOYACÁ</option>
    <option value="CALDAS">CALDAS</option>
    <option value="CAQUETA">CAQUETÁ</option>
    <option value="CASANARE">CASANARE</option>
    <option value="CAUCA">CAUCA</option>
    <option value="CESAR">CESAR</option>
    <option value="CHOCO">CHOCÓ</option>
    <option value="CORDOBA">CÓRDOBA</option>
    <option value="CUNDINAMARCA">CUNDINAMARCA</option>
    <option value="DISTRITO_CAPITAL">DISTRITO CAPITAL</option>
    <option value="GUAINIA">GUAINÍA</option>
    <option value="GUAVIARE">GUAVIARE</option>
    <option value="HUILA">HUILA</option>
    <option value="LA_GUAJIRA">LA GUAJIRA</option>
    <option value="MAGDALENA">MAGDALENA</option>
    <option value="META">META</option>
    <option value="NARIÑO">NARIÑO</option>
    <option value="NORTE_DE_SANTANDER">NORTE DE SANTANDER</option>
    <option value="PUTUMAYO">PUTUMAYO</option>
    <option value="QUINDIO">QUINDÍO</option>
    <option value="RISARALDA">RISARALDA</option>
    <option value="SAN_ANDRÉS_Y_PROVIDENCIA">SAN ANDRÉS Y PROVIDENCIA</option>
    <option value="SANTANDER">SANTANDER</option>
    <option value="SUCRE">SUCRE</option>
    <option value="TOLIMA">TOLIMA</option>
    <option value="VALLE_DEL_CAUCA">VALLE DEL CAUCA</option>
    <option value="VAUPES">VAUPÉS</option>
    <option value="VICHADA">VICHADA</option>
    </select>
                    <label>Municipio de residencia</label>
                           <select id="municipios" class="form-control" v-model="usuario.municipio">
      <option value="0"></option>
    </select>
                    <label>Zona de residencia</label>
                    <v-select
                      v-model="usuario.zona"
                      :items="tipoZona"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Dirección de residencia</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionResidencia"
                        required
                      />
                    </div>
                    <label>Tipo de vivienda</label>
                    <v-select
                      v-model="usuario.viviendaResidencia"
                      :items="tipoViviendaResidencia"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Modalidad</label>
                    <v-select
                      v-model="usuario.modalidadResidencia"
                      :items="tipoModalidadResidencia"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Experiencia en Seguridad Privada</label>
                    <v-select
                      v-model="usuario.experiencia"
                      :items="tipoExperiencia"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Tiempo de experiencia</label>
                    <v-layout>
                      <v-flex xs12 sm2>
                        <v-select
                          v-model="usuario.year"
                          :items="tipoYear"
                          required
                          dense
                          solo
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 sm2>
                        <label class="centimetros">Años</label>
                      </v-flex>
                      <v-flex xs12 sm2 class="selector">
                        <v-select
                          v-model="usuario.meses"
                          :items="tipoMeses"
                          required
                          dense
                          solo
                        ></v-select>
                      </v-flex>
                      <v-flex xs12 sm2>
                        <label class="centimetros">Meses</label>
                      </v-flex>
                    </v-layout>
                    <div class="form-group">
                      <button class="btn btn-primary btn-block">Guardar</button>
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header><strong>Propiedades</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Tipo de vivienda</label>
                    <v-select
                      v-model="usuario.vivienda"
                      :items="tipoVivienda"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Propietario</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.propietario"
                        required
                      />
                    </div>
                    <label>Modalidad</label>
                    <v-select
                      v-model="usuario.modalidad"
                      :items="tipoModalidad"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Teléfono</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoVivienda"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionPropiedad"
                        required
                      />
                    </div>
                    <label>Ciudad</label>
                    <v-select
                      v-model="usuario.ciudadPropiedad"
                      :items="tipoCiudadPropiedad"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento</label>
                    <v-select
                      v-model="usuario.departamentoPropiedad"
                      :items="tipoDepartamentoPropiedad"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header><strong>Vehículo</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Tipo de Vehiculo</label>
                    <v-select
                      v-model="usuario.vehiculo"
                      :items="tipoVehiculo"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Marca</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.marca"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Placa</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.placa"
                        required
                      />
                    </div>
                    <label>Cilindraje</label>
                    <v-select
                      v-model="usuario.cilindraje"
                      :items="tipoCilindraje"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Modelo</label>
                    <v-select
                      v-model="usuario.modeloVehiculo"
                      :items="tipoModeloVehiculo"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Perteneció a institución armada</strong></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Institución</label>
                    <v-select
                      v-model="usuario.institucion"
                      :items="tipoInstitucion"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Último grado obtenido</label>
                    <v-select
                      v-model="usuario.ultimoGrado"
                      :items="tipoUltimoGrado"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Estado laboral</label>
                    <v-select
                      v-model="usuario.estadoLaboral"
                      :items="tipoEstadoLaboral"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Fecha Incial</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaIncial"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <div class="form-group">
                      <label>Fecha Final</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaFinal"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <div class="form-group">
                      <label>Motivo de retiro</label>
                      <textarea
                        class="form-control"
                        v-model="usuario.retiro"
                        required
                      ></textarea>
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header><strong>Idiomas</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Otros Idiomas</label>
                    <v-select
                      v-model="usuario.idiomas"
                      :items="tipoIdiomas"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Nivel de escritura</label>
                    <v-select
                      v-model="usuario.nivelEscritura"
                      :items="tipoNivelEscritura"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Nivel de lectura</label>
                    <v-select
                      v-model="usuario.nivelLectura"
                      :items="tipoNivelLectura"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Nivel Conversacional</label>
                    <v-select
                      v-model="usuario.nivelConversacional"
                      :items="tipoNivelConversacional"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Observaciones</label>
                      <textarea
                        class="form-control"
                        v-model="usuario.observaciones"
                        required
                      ></textarea>
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header><strong>Arma</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Tipo de arma</label>
                    <v-select
                      v-model="usuario.arma"
                      :items="tipoArma"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Modalidad</label>
                    <v-select
                      v-model="usuario.modalidadArma"
                      :items="tipoModalidadArma"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Calibre</label>
                    <v-select
                      v-model="usuario.calibre"
                      :items="tipoCalibre"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Número del arma</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.numeroArma"
                        required
                      />
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header><strong>Sueldo</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Salario estimado</label>
                    <v-select
                      v-model="usuario.salario"
                      :items="tipoSalario"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Información familiar</strong></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form
                    @submit.prevent="onFormSubmit"
                    enctype="multipart/form-data"
                  >
                    <div class="form-group">
                      <label>Nombre y Apellidos del Padre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombrePadre"
                        required
                        autofocus
                      />
                    </div>
                    <label>Fallecido</label>
                    <v-select
                      v-model="usuario.fallecidoPadre"
                      :items="tipoFallecidoPadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>País de residencia</label>
                    <v-select
                      v-model="usuario.paisPadre"
                      :items="tipoPaisPadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento de residencia</label>
                    <v-select
                      v-model="usuario.departamentoPadre"
                      :items="tipoDepartamentoPadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioPadre"
                      :items="tipoMunicipioPadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Teléfono</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoPadre"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Dirección del padre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionPadre"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Ocupación del padre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.ocupacionPadre"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Nombre y Apellidos de la Madre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombreMadre"
                        required
                        autofocus
                      />
                    </div>
                    <label>Fallecido</label>
                    <v-select
                      v-model="usuario.fallecidoMadre"
                      :items="tipoFallecidoMadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>País de residencia</label>
                    <v-select
                      v-model="usuario.paisMadre"
                      :items="tipoPaisMadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento de residencia</label>
                    <v-select
                      v-model="usuario.departamentoMadre"
                      :items="tipoDepartamentoMadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioMadre"
                      :items="tipoMunicipioMadre"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Teléfono</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoMadre"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Dirección del madre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionMadre"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Ocupación del madre</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.ocupacionMadre"
                        required
                      />
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Documentos personales</strong></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form
                    @submit.prevent="onFormSubmit"
                    enctype="multipart/form-data"
                  >
                    <label>Reservista</label>
                    <v-select
                      v-model="usuario.reservista"
                      :items="tipoReservista"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Institución</label>
                    <v-select
                      v-model="usuario.institucionLibreta"
                      :items="tipoInstitucionLibreta"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Nro. de la libreta Militar</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.numeroLibreta"
                        required
                      />
                    </div>
                    <label>Clase de la libreta militar</label>
                    <v-select
                      v-model="usuario.claseLibreta"
                      :items="tipoClaseLibreta"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Fecha de expedición</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaLibreta"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <label>Licencia de conducción</label>
                    <v-select
                      v-model="usuario.licenciaConduccion"
                      :items="tipoLicenciaConduccion"
                      required
                      dense
                      solo
                      multiple
                    ></v-select>
                    <div class="form-group">
                      <label>Número de licencia</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.numeroLicencia"
                        required
                      />
                    </div>
                    <label>Categoria</label>
                    <v-select
                      v-model="usuario.categoriaLicencia"
                      :items="tipoCategoriaLicencia"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Referencias familiares</strong></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form
                    @submit.prevent="onFormSubmit"
                    enctype="multipart/form-data"
                  >
                  <br><h6>Primera referencia familiar (mínimo 2)</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombreFamiliar1"
                        required
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioFamiliar1"
                      :items="tipoMunicipioFamiliar1"
                      required
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionFamiliar1"
                        required
                      />
                    </div>
                    <label>Parentesco</label>
                    <v-select
                      v-model="usuario.parentescoFamiliar1"
                      :items="tipoParentescoFamiliar1"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoFamiliar1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularFamiliar1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaFamiliar1"
                        required
                      />
                    </div>
                    <br><h6>Segunda referencia familiar</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombreFamiliar2"
                        required
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioFamiliar2"
                      :items="tipoMunicipioFamiliar2"
                      required
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionFamiliar2"
                        required
                      />
                    </div>
                    <label>Parentesco</label>
                    <v-select
                      v-model="usuario.parentescoFamiliar2"
                      :items="tipoParentescoFamiliar2"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoFamiliar2"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularFamiliar2"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaFamiliar2"
                        required
                      />
                    </div>
                    <br><h6>Tercera referencia familiar</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombreFamiliar3"
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioFamiliar3"
                      :items="tipoMunicipioFamiliar3"
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionFamiliar3"
                      />
                    </div>
                    <label>Parentesco</label>
                    <v-select
                      v-model="usuario.parentescoFamiliar3"
                      :items="tipoParentescoFamiliar3"
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoFamiliar3"
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularFamiliar3"
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaFamiliar3"
                      />
                    </div>
                    <br><h6>Cuarta referencia familiar</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombreFamiliar4"
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioFamiliar4"
                      :items="tipoMunicipioFamiliar4"
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionFamiliar4"
                      />
                    </div>
                    <label>Parentesco</label>
                    <v-select
                      v-model="usuario.parentescoFamiliar4"
                      :items="tipoParentescoFamiliar4"
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoFamiliar4"
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularFamiliar4"
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaFamiliar4"
                      />
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
             <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Referencias personales</strong></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form
                    @submit.prevent="onFormSubmit"
                    enctype="multipart/form-data"
                  >
                  <br><h6>Primera referencia personal (mínimo 2)</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombrePersonal1"
                        required
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioPersonal1"
                      :items="tipoMunicipioPersonal1"
                      required
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionPersonal1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoPersonal1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularPersonal1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaPersonal1"
                        required
                      />
                    </div>
                    <br><h6>Segunda referencia Personal</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombrePersonal2"
                        required
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioPersonal2"
                      :items="tipoMunicipioPersonal2"
                      required
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionPersonal2"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoPersonal2"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularPersonal2"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaPersonal2"
                        required
                      />
                    </div>
                    <br><h6>Tercera referencia Personal</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombrePersonal3"
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioPersonal3"
                      :items="tipoMunicipioPersonal3"
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionPersonal3"
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoPersonal3"
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularPersonal3"
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaPersonal3"
                      />
                    </div>
                    <br><h6>Cuarta referencia Personal</h6><br>
                    <div class="form-group">
                      <label>Nombre completo</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.nombrePersonal4"
                        autofocus
                      />
                    </div>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioPersonal4"
                      :items="tipoMunicipioPersonal4"
                      dense
                      solo
                    ></v-select>
                         <div class="form-group">
                      <label>Dirección</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.direccionPersonal4"
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono fijo</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoFijoPersonal4"
                      />
                    </div>
                    <div class="form-group">
                      <label>Celular</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.celularPersonalr4"
                      />
                    </div>
                    <div class="form-group">
                      <label>Teléfono Oficina</label>
                      <input
                        type="number"
                        class="form-control"
                        v-model="usuario.telefonoOficinaPersonal4"
                      />
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
             <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Experiencia Laboral</strong></v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      
                      <br><h6>Primera referencia laboral (mínimo 1)</h6><br>
                      <label>Empresa</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.empresa1"
                        required
                      />
                    </div>
                    <label>Labora actualmente</label>
                    <v-select
                      v-model="usuario.labora1"
                      :items="tipoLabora1"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento</label>
                    <v-select
                      v-model="usuario.departamentoLaboral1"
                      :items="tipoDepartamentoLaboral1"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioLaboral1"
                      :items="tipoMunicipioLaboral1"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Fecha Incial</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaIncialLaboral1"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <div class="form-group">
                      <label>Fecha Final</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaFinalLaboral1"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <label>Certificado de la experiencia</label><br/>
                    <input
                      type="file"
                      accept="application/pdf"
                      @change="clickDocumento1($event)"
                      :src="archivoPdf1"
                    /><br/><br/>
                    <label>Tipo de servicio prestado</label>
                    <v-select
                      v-model="usuario.servicioPrestado1"
                      :items="tipoServicioPrestado1"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Cargo</label>
                    <v-select
                      v-model="usuario.cargoActual1"
                      :items="tipocargoActual1"
                      required
                      dense
                      solo
                    ></v-select>
                
                    <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Segunda referencia laboral</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Empresa</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.empresa2"
                        required
                      />
                    </div>
                    <label>Labora actualmente</label>
                    <v-select
                      v-model="usuario.labora2"
                      :items="tipoLabora2"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento</label>
                    <v-select
                      v-model="usuario.departamentoLaboral2"
                      :items="tipoDepartamentoLaboral2"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioLaboral2"
                      :items="tipoMunicipioLaboral2"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Fecha Incial</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaIncialLaboral2"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <div class="form-group">
                      <label>Fecha Final</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaFinalLaboral2"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <label>Certificado de la experiencia</label><br/>
                    <input
                      type="file"
                      accept="application/pdf"
                      @change="clickDocumento2($event)"
                      :src="archivoPdf2"
                    /><br/><br/>
                    <label>Tipo de servicio prestado</label>
                    <v-select
                      v-model="usuario.servicioPrestado2"
                      :items="tipoServicioPrestado2"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Cargo</label>
                    <v-select
                      v-model="usuario.cargoActual2"
                      :items="tipocargoActual2"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                     <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Tercera referencia laboral</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Empresa</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.empresa3"
                        required
                      />
                    </div>
                    <label>Labora actualmente</label>
                    <v-select
                      v-model="usuario.labora3"
                      :items="tipoLabora3"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento</label>
                    <v-select
                      v-model="usuario.departamentoLaboral3"
                      :items="tipoDepartamentoLaboral3"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioLaboral3"
                      :items="tipoMunicipioLaboral3"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Fecha Incial</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaIncialLaboral3"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <div class="form-group">
                      <label>Fecha Final</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaFinalLaboral3"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <label>Certificado de la experiencia</label><br/>
                    <input
                      type="file"
                      accept="application/pdf"
                      @change="clickDocumento3($event)"
                      :src="archivoPdf2"
                    /><br/><br/>
                    <label>Tipo de servicio prestado</label>
                    <v-select
                      v-model="usuario.servicioPrestado3"
                      :items="tipoServicioPrestado3"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Cargo</label>
                    <v-select
                      v-model="usuario.cargoActual3"
                      :items="tipocargoActual3"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                     <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Cuarta referencia laboral</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Empresa</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.empresa4"
                        required
                      />
                    </div>
                    <label>Labora actualmente</label>
                    <v-select
                      v-model="usuario.labora4"
                      :items="tipoLabora4"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento</label>
                    <v-select
                      v-model="usuario.departamentoLaboral4"
                      :items="tipoDepartamentoLaboral4"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioLaboral4"
                      :items="tipoMunicipioLaboral4"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Fecha Incial</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaIncialLaboral4"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <div class="form-group">
                      <label>Fecha Final</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaFinalLaboral4"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <label>Certificado de la experiencia</label><br/>
                    <input
                      type="file"
                      accept="application/pdf"
                      @change="clickDocumento4($event)"
                      :src="archivoPdf2"
                    /><br/><br/>
                    <label>Tipo de servicio prestado</label>
                    <v-select
                      v-model="usuario.servicioPrestado4"
                      :items="tipoServicioPrestado4"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Cargo</label>
                    <v-select
                      v-model="usuario.cargoActual4"
                      :items="tipocargoActual4"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                     <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Quinta referencia laboral</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Empresa</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.empresa5"
                        required
                      />
                    </div>
                    <label>Labora actualmente</label>
                    <v-select
                      v-model="usuario.labora5"
                      :items="tipoLabora5"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Departamento</label>
                    <v-select
                      v-model="usuario.departamentoLaboral5"
                      :items="tipoDepartamentoLaboral5"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Ciudad / Municipio</label>
                    <v-select
                      v-model="usuario.municipioLaboral5"
                      :items="tipoMunicipioLaboral5"
                      required
                      dense
                      solo
                    ></v-select>
                    <div class="form-group">
                      <label>Fecha Incial</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaIncialLaboral5"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <div class="form-group">
                      <label>Fecha Final</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaFinalLaboral5"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                    <label>Certificado de la experiencia</label><br/>
                    <input
                      type="file"
                      accept="application/pdf"
                      @change="clickDocumento5($event)"
                      :src="archivoPdf2"
                    /><br/><br/>
                    <label>Tipo de servicio prestado</label>
                    <v-select
                      v-model="usuario.servicioPrestado5"
                      :items="tipoServicioPrestado5"
                      required
                      dense
                      solo
                    ></v-select>
                    <label>Cargo</label>
                    <v-select
                      v-model="usuario.cargoActual5"
                      :items="tipocargoActual5"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Formación académica</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionAcademica1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaAcademica1"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.titulo1"
                        required
                      />
                   
                    <label>Nivel Académico</label>
                    <v-select
                      v-model="usuario.nivelAcademico1"
                      :items="tipoNivelAcademico1"
                      required
                      dense
                      solo
                    ></v-select>
                    <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionAcademica2"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaAcademica2"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.titulo2"
                        required
                      />
                   
                    <label>Nivel Académico</label>
                    <v-select
                      v-model="usuario.nivelAcademico2"
                      :items="tipoNivelAcademico2"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
<v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionAcademica3"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaAcademica3"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.titulo3"
                        required
                      />
                   
                    <label>Nivel Académico</label>
                    <v-select
                      v-model="usuario.nivelAcademico3"
                      :items="tipoNivelAcademico3"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                     <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionAcademica4"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaAcademica4"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.titulo4"
                        required
                      />
                   
                    <label>Nivel Académico</label>
                    <v-select
                      v-model="usuario.nivelAcademico4"
                      :items="tipoNivelAcademico4"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                  <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionAcademica5"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaAcademica5"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.titulo5"
                        required
                      />
                   
                    <label>Nivel Académico</label>
                    <v-select
                      v-model="usuario.nivelAcademico5"
                      :items="tipoNivelAcademico5"
                      required
                      dense
                      solo
                    ></v-select>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  ><strong>Cursos</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionCurso1"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaCurso1"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.tituloCurso1"
                        required
                      />
                    <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionCurso2"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaCurso2"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.tituloCurso2"
                        required
                      />
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
<v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionCurso3"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaCurso3"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.tituloCurso3"
                        required
                      />
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                     <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionCurso4"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaCurso4"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.tituloCurso4"
                        required
                      />
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                  <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header
                  >Agregar nuevo</v-expansion-panel-header
                >
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <div class="form-group">
                      <label>Institución</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.institucionCurso5"
                        required
                      />
                    </div>
                    <div class="form-group">
                      <label>Fecha título</label>
                      <v-flex xs12 sm2>
                        <input
                          type="date"
                          class="form-control"
                          v-model="usuario.fechaCurso5"
                          pattern="\d{4}-\d{2}-\d{2}"
                          required
                        />
                      </v-flex>
                    </div>
                      <label>Título obtenido</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="usuario.tituloCurso5"
                        required
                      />
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
            
            <v-expansion-panels focusable>
              <v-expansion-panel>
                <v-expansion-panel-header><strong>Soportes</strong></v-expansion-panel-header>
                <v-expansion-panel-content>
                  <form @submit.prevent="onFormSubmit">
                    <label>Foto de la cédula</label><br />
                    <input
                      type="file"
                      accept="image/*"
                      @change="clickImagen($event)"
                      :src="cedula"
                    /><br />
                    <label>Documento PDF</label><br />
                    <input
                      type="file"
                      accept="application/pdf"
                      @change="clickDocumento($event)"
                      :src="archivoPdf"
                    />
                    <div class="form-group">
                      <button class="btn btn-primary btn-block">Guardar</button>
                    </div>
                  </form>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import { db } from "../firebaseDb";
import { storage } from "../firebaseDb";
import Swal from "sweetalert2";
const ref = storage.ref();

export default {
  data() {
    return {
      
      tipos: ["Cédula de ciudadanía", "Cédula de extranjeria"],
      tipoGenero: ["Masculino", "Femenino"],
      tipoCivil: ["Soltero", "Casado", "Viudo", "Separado"],
      tipoPais: ["Colombia"],
      tipoDepartamento: ["Amazonas", "Antioquia"],
      tipoMunicipio: ["San Gil", "Curití"],
      tipoZona: [
        "Urbano",
        "Rural",
        "Norte",
        "Centro",
        "Sur",
        "Occidente",
        "Oriente",
      ],
      tipoViviendaResidencia: ["Casa", "Apartamento", "Finca"],
      tipoModalidadResidencia: [
        "Propia",
        "Arriendo",
        "Familiar",
        "Apartaestudio",
        "Conjunto residencial",
        "Condominio",
      ],
      tipoExperiencia: ["SI", "NO"],
      tipoMeses: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      tipoYear: [ "1","2","3",
        "4","5","6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
      ],
      cedula: "",
      archivoPdf: "",
      archivoPdf1: "",
      archivoPdf2: "",
      archivoPdf3: "",
      archivoPdf4: "",
      archivoPdf5: "",
      imagenes: [],
      imagen: null,
      documentos: [],
      archivo: null,
      archivo1: null,
      archivo2: null,
      archivo3: null,
      archivo4: null,
      archivo5: null,
      tipoVivienda: ["Casa", "Apartamento", "Finca"],
      tipoModalidad: ["Propia", "Arriendo", "Familiar"],
      tipoDepartamentoPropiedad: ["Amazonas", "Antioquia"],
      tipoCiudadPropiedad: ["San Gil", "Curití"],
      tipoVehiculo: [
        "Vehículo Sedan",
        "Camoineta",
        "Vehículo Blindado",
        "Motocicleta",
      ],
      tipoModeloVehiculo: ["2017", "2018", "2019", "2020", "2021", "2022"],
      tipoCilindraje: [
        "90",
        "100",
        "110",
        "115",
        "125",
        "150",
        "175",
        "200",
        "220",
        "225",
        "Mayor de 225",
      ],
    
      tipoArma: ["Pístola", "Revólver"],
      
      tipoModalidadArma: ["Tenencia", "Porte"],
      tipoCalibre: ["9mm", "7,65mm", "32L", "32", "38 Corto", "38 Largo"],
      tipoInstitucion: ["Privada", "Militar", "Policia"],
      tipoUltimoGrado: ["Capitán", "Mayor", "Teniente", "Coronel"],
      tipoEstadoLaboral: ["Activo", "Retirado"],
      tipoIdiomas: ["Inglés", "Francés ", "Portugués", "Italiano"],
      tipoNivelEscritura: ["A1", "A2", "B1", "B2", "C1", "C2"],
      tipoNivelLectura: ["A1", "A2", "B1", "B2", "C1", "C2"],
      tipoNivelConversacional: ["A1", "A2", "B1", "B2", "C1", "C2"],
      tipoSalario: ["1'000.000 a 1'500.0000","1'500.000 a 2'000.0000","2'000.000 a 2'500.0000",],
      tipoFallecidoPadre: ["SI", "NO"],
      tipoPaisPadre: ["Colombia"],
      tipoDepartamentoPadre: ["Antioquia", "Santander"],
      tipoMunicipioPadre: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoFallecidoMadre: ["SI", "NO"],
      tipoPaisMadre: ["Colombia"],
      tipoDepartamentoMadre: ["Antioquia", "Santander"],
      tipoMunicipioMadre: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoReservista: ["SI", "NO"],
      tipoInstitucionLibreta: ["Batallón Bucaramanga", "Batallón Palmira"],
      tipoClaseLibreta: ["Primera clase", "Segunda clase"],
      tipoLicenciaConduccion: ["Moto", "Carro", "Camión"],
      tipoCategoriaLicencia: ["Alta", "Medio ", "Baja"],
      tipoMunicipioFamiliar1: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioFamiliar2: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioFamiliar3: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioFamiliar4: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoParentescoFamiliar1: ["Padre", "Madre ", "Hermano","Hermana", "Abuelo ", "Abuela","Tío ", "Tía"],
      tipoParentescoFamiliar2: ["Padre", "Madre ", "Hermano","Hermana", "Abuelo ", "Abuela","Tío ", "Tía"],
      tipoParentescoFamiliar3: ["Padre", "Madre ", "Hermano","Hermana", "Abuelo ", "Abuela","Tío ", "Tía"],
      tipoParentescoFamiliar4: ["Padre", "Madre ", "Hermano","Hermana", "Abuelo ", "Abuela","Tío ", "Tía"],
      tipoMunicipioPersonal1: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioPersonal2: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioPersonal3: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioPersonal4: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoLabora1: ["SI", "NO"],
      tipoLabora2: ["SI", "NO"],
      tipoLabora3: ["SI", "NO"],
      tipoLabora4: ["SI", "NO"],
      tipoLabora5: ["SI", "NO"],
      tipoDepartamentoLaboral1: ["Antioquia", "Santander"],
      tipoDepartamentoLaboral2: ["Antioquia", "Santander"],
      tipoDepartamentoLaboral3: ["Antioquia", "Santander"],
      tipoDepartamentoLaboral4: ["Antioquia", "Santander"],
      tipoDepartamentoLaboral5: ["Antioquia", "Santander"],
      tipoMunicipioLaboral1: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioLaboral2: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioLaboral3: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioLaboral4: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoMunicipioLaboral5: ["Medellín", "Bucaramanga ", "Bogotá"],
      tipoServicioPrestado1: ["Vigilancia", "Seguridad privada ", "Escolta"],
      tipoServicioPrestado2: ["Vigilancia", "Seguridad privada ", "Escolta"],
      tipoServicioPrestado3: ["Vigilancia", "Seguridad privada ", "Escolta"],
      tipoServicioPrestado4: ["Vigilancia", "Seguridad privada ", "Escolta"],
      tipoServicioPrestado5: ["Vigilancia", "Seguridad privada ", "Escolta"],
      tipocargoActual1: ["Gerente", "Director de ventas ", "Cajero"],
      tipocargoActual2: ["Gerente", "Director de ventas ", "Cajero"],
      tipocargoActual3: ["Gerente", "Director de ventas ", "Cajero"],
      tipocargoActual4: ["Gerente", "Director de ventas ", "Cajero"],
      tipocargoActual5: ["Gerente", "Director de ventas ", "Cajero"],
      tipoNivelAcademico1: ["Bachiller", "Primaria", "Técnico","Técnologo", "Profesional"],
      tipoNivelAcademico2: ["Bachiller", "Primaria", "Técnico","Técnologo", "Profesional"],
      tipoNivelAcademico3: ["Bachiller", "Primaria", "Técnico","Técnologo", "Profesional"],
      tipoNivelAcademico4: ["Bachiller", "Primaria", "Técnico","Técnologo", "Profesional"],
      tipoNivelAcademico5: ["Bachiller", "Primaria", "Técnico","Técnologo", "Profesional"],
      departamentos_AMAZONAS: [
      "EL ENCANTO",
      "LA CHORRERA",
      "LA PEDRERA",
      "LA VICTORIA",
      "LETICIA",
      "MIRITI-PARANA",
      "PUERTO ALEGRIA",
      "PUERTO ARICA",
      "PUERTO NARIÑO",
      "PUERTO SANTANDER",
      "TARAPACA",
    ],

    departamentos_ANTIOQUIA: [
      "CAUCASIA",
      "EL BAGRE",
      "NECHI",
      "TARAZA",
      "ZARAGOZA",
      "CARACOLI",
      "MACEO",
      "PUERTO BERRIO",
      "PUERTO NARE",
      "PUERTO TRIUNFO",
      "YONDO",
      "AMALFI",
      "ANORI",
      "CISNEROS",
      "REMEDIOS",
      "SAN ROQUE",
      "SANTO DOMINGO",
      "SEGOVIA",
      "VEGACHI",
      "YALI",
      "YOLOMBO",
      "ANGOSTURA",
      "BELMIRA",
      "BRICEÑO",
      "CAMPAMENTO",
      "CAROLINA DEL PRINCIPE",
      "DONMATIAS",
      "ENTRERRIOS",
      "GOMEZ PLATA",
      "GUADALUPE",
      "ITUANGO",
      "SAN ANDRES DE CUERQUIA",
      "SAN JOSE DE LA MONTAÑA",
      "SAN PEDRO DE LOS MILAGROS",
      "SANTA ROSA DE OSOS",
      "TOLEDO",
      "VALDIVIA",
      "YARUMAL",
      "ABRIAQUI",
      "ANZA",
      "ARMENIA",
      "BURITICA",
      "CAICEDO",
      "CAÑASGORDAS",
      "DABEIBA",
      "EBEJICO",
      "FRONTINO",
      "GIRALDO",
      "HELICONIA",
      "LIBORINA",
      "OLAYA",
      "PEQUE",
      "SABANALARGA",
      "SAN JERONIMO",
      "SANTA FE DE ANTIOQUIA",
      "SOPETRAN",
      "URAMITA",
      "ABEJORRAL",
      "ALEJANDRIA",
      "ARGELIA",
      "CARMEN DE VIBORAL",
      "COCORNA",
      "CONCEPCION",
      "GRANADA",
      "GUARNE",
      "GUATAPE",
      "LA CEJA",
      "LA UNION",
      "MARINILLA",
      "NARIÑO",
      "EL PEÑOL",
      "EL RETIRO",
      "RIONEGRO",
      "SAN CARLOS",
      "SAN FRANCISCO",
      "SAN LUIS",
      "SAN RAFAEL",
      "SAN VICENTE",
      "SANTUARIO",
      "SONSON",
      "AMAGA",
      "ANDES",
      "ANGELOPOLIS",
      "BETANIA",
      "BOLIVAR",
      "BETULIA",
      "CARAMANTA",
      "CONCORDIA",
      "FREDONIA",
      "HISPANIA",
      "JARDIN",
      "JERICO",
      "LA PINTADA",
      "MONTEBELLO",
      "PUEBLORRICO",
      "SALGAR",
      "SANTA BARBARA",
      "TAMESIS",
      "TARSO",
      "TITIRIBI",
      "URRAO",
      "VALPARAISO",
      "VENECIA",
      "APARTADO",
      "ARBOLETES",
      "CAREPA",
      "CHIGORODO",
      "MURINDO",
      "MUTATA",
      "NECOCLI",
      "SAN JUAN DE URABA",
      "SAN PEDRO DE URABA",
      "TURBO",
      "VIGIA DEL FUERTE",
      "BARBOSA",
      "BELLO",
      "CALDAS",
      "COPACABANA",
      "ENVIGADO",
      "GIRARDOTA",
      "ITAGÜI",
      "LA ESTRELLA",
      "MEDELLÍN",
      "SABANETA",
    ],
    departamentos_ARAUCA: [
      "ARAUCA",
      "ARAUQUITA",
      "CRAVO NORTE",
      "FORTUL",
      "PUERTO RONDON",
      "SARAVENA",
      "TAME",
    ],
    departamentos_ATLANTICO: [
      "BARRANQUILLA",
      "BARANOA",
      "CAMPO DE LA CRUZ",
      "CANDELARIA",
      "GALAPA",
      "JUAN DE ACOSTA",
      "LURUACO",
      "MALAMBO",
      "MANATI",
      "PALMAR DE VARELA",
      "PIOJO",
      "POLONUEVO",
      "PONEDERA",
      "PUERTO COLOMBIA",
      "REPELON",
      "SABANAGRANDE",
      "SABANALARGA",
      "SANTA LUCIA",
      "SANTO TOMAS",
      "SOLEDAD",
      "SUAN",
      "TUBARA",
      "USIACURI",
    ],
    departamentos_BOLIVAR: [
      "ACHI",
      "ALTOS DEL ROSARIO",
      "ARENAL",
      "ARJONA",
      "ARROYOHONDO",
      "BARRANCO DE LOBA",
      "BRAZUELO DE PAPAYAL",
      " CALAMAR",
      "CANTAGALLO",
      "EL CARMEN DE BOLIVAR",
      "CARTAGENA DE INDIAS D.T.",
      "CICUCO",
      "CLEMENCIA",
      "CORDOBA",
      "EL GUAMO",
      "EL PEÑON",
      "HATILLO DE LOBA",
      "MAGANGUE",
      "MAHATES",
      "MARGARITA",
      "MARIA LA BAJA",
      "MONTECRISTO",
      "MORALES",
      "NOROSI",
      "PINILLOS",
      "REGIDOR",
      "RIO VIEJO",
      "SAN CRISTOBAL",
      "SAN ESTANISLAO",
      "SAN FERNANDO",
      "SAN JACINTO",
      "SAN JACINTO DEL CAUCASAN",
      "JUAN NEPOMUCENO",
      "SAN MARTIN DE LOBA",
      "SAN PABLO",
      "SANTA CATALINA",
      "SANTA CRUZ DE MOMPOX",
      "SANTA ROSA",
      "SANTA ROSA DEL SUR",
      "SIMITI",
      "SOPLAVIENTO",
      "TALAIGUA NUEVO",
      "TIQUISIO",
      "TURBACO",
      "TURBANA",
      "VILLANUEVA",
      "ZAMBRANO",
    ],
    departamentos_BOYACA: [
      "ALMEIDA",
      "AQUITANIA",
      "ARCABUCO",
      "BELEN",
      "BERBEO",
      "BETEITIVA",
      "BOAVITA",
      "BOYACA",
      "BRICEÑO",
      "BUENAVISTA",
      " BUSBANZA",
      "CALDAS",
      "CAMPOHERMOSO",
      "CERINZA",
      "CHINAVITA",
      "CHIQUINQUIRA",
      "CHIQUIZA",
      "CHISCAS",
      "CHITA",
      "CHITARAQUE",
      "CHIVATA",
      "CHIVOR",
      " CIENEGA",
      "COMBITA",
      "COPER",
      "CORRALES",
      "COVARACHIA",
      "CUBARA",
      "CUCAITA",
      "CUITIVA",
      "DUITAMA",
      "EL COCUY",
      "EL ESPINO",
      "FIRAVITOBA",
      "FLORESTA",
      "GACHANTIVA",
      "GAMEZA",
      "GARAGOA",
      "GUACAMAYAS",
      "GUATEQUE",
      "GUAYATA",
      "GÜICAN",
      "IZA",
      "JENESANO",
      "JERICO",
      "LA CAPILLA",
      "LA UVITA",
      "LA VICTORIA",
      "LABRANZAGRANDE",
      "MACANAL",
      "MARIPI",
      "MIRAFLORES",
      "MONGUA",
      "MONGUI",
      "MONIQUIRA",
      "MOTAVITA",
      "MUZO",
      "NOBSA",
      "NUEVO COLON",
      "OICATA",
      "OTANCHE",
      "PACHAVITA",
      "PAEZ",
      "PAIPA",
      "PAJARITO",
      "PANQUEBA",
      "PAUNA",
      "PAYA",
      "PAZ DE RIO",
      "PESCA",
      "PISBA",
      "PUERTO BOYACA",
      "QUIPAMA",
      "RAMIRIQUI",
      "RAQUIRA",
      "RONDON",
      "SABOYA",
      "SACHICA",
      "SAMACA",
      "SAN EDUARDO",
      "SAN JOSE DE PARE",
      "SAN LUIS DE GACENO",
      "SAN MATEO",
      "SAN MIGUEL DE SEMA",
      " SAN PABLO DE BORBUR",
      "SANTA MARIA",
      "SANTA ROSA DE VITERBO",
      "SANTA SOFIA",
      "SANTANA",
      "SATIVANORTE",
      "SATIVASUR",
      "SIACHOQUE",
      "SOATA",
      "SOCHA",
      "SOCOTA",
      "SOGAMOSO",
      "SOMONDOCO",
      "SORA",
      "SORACA",
      "SOTAQUIRA",
      "SUSACON",
      "SUTAMARCHAN",
      "SUTATENZA",
      "TASCO",
      "TENZA",
      "TIBANA",
      "TIBASOSA",
      " TINJACA",
      "TIPACOQUE",
      "TOCA",
      "TOGÜI",
      "TOPAGA",
      "TOTA",
      "TUNJA",
      "TUNUNGUA",
      "TURMEQUE",
      "TUTA",
      "TUTAZA",
      "UMBITA",
      "VENTAQUEMADA",
      "VILLA DE LEYVA",
      "VIRACACHA",
      "ZETAQUIRA",
    ],
    departamentos_CALDAS: [
      "AGUADAS",
      "ANSERMA",
      "ARANZAZU",
      "BELALCAZAR",
      "CHINCHINA",
      "FILADELFIA",
      "LA DORADA",
      "LA MERCED",
      "MANIZALES",
      "MANZANARES",
      "MARMATO",
      "MARQUETALIA",
      "MARULANDA",
      "NEIRA",
      "NORCASIA",
      "PACORA",
      "PALESTINA",
      "PENSILVANIA",
      "RIOSUCIO",
      "RISARALDA",
      "SALAMINA",
      "SAMANA SAN JOSE",
      "SUPIA",
      "VICTORIA",
      "VILLAMARIA",
      "VITERBO",
    ],
    departamentos_CAQUETA: [
      "ALBANIA",
      "BELEN DE LOS ANDAQUIES",
      "CARTAGENA DEL CHAIRA",
      "CURILLO",
      "EL DONCELLO",
      "EL PAUJIL",
      "FLORENCIA",
      "LA MONTAÑITA",
      "MORELIA",
      "PUERTO MILAN",
      "PUERTO RICO",
      "SAN JOSE DEL FRAGUA",
      "SAN VICENTE DEL CAGUAN",
      "SOLANO",
      "SOLITA",
      "VALPARAISO",
    ],
    departamentos_CASANARE: [
      "AGUAZUL",
      "HATO COROZAL",
      "CHAMEZA",
      "PORE",
      "LA SALINA",
      "SACAMA",
      "PAZ DE ARIPORO",
      "MONTERREY",
      "OROCUE",
      "MANI",
      "SAN LUIS DE PALENQUE",
      "TRINIDAD",
      "VILLANUEVA",
      "YOPAL",
      "RECETOR",
      "SABANALARGA",
      "TAMARA",
      "NUNCHIA",
      "TAURAMENA",
    ],
    departamentos_CAUCA: [
      "ALMAGUER",
      "ARGELIA",
      "BALBOA",
      "BOLIVAR",
      "BUENOS AIRES",
      "CAJIBIO",
      "CALDONO",
      "CALOTO",
      "CORINTO",
      "EL TAMBO",
      "FLORENCIA",
      "GUACHENE",
      "GUAPI",
      "INZA",
      "JAMBALO",
      "LA SIERRA",
      "LA VEGA",
      "LOPEZ DE MICAY",
      "MERCADERES",
      "MIRANDA",
      "MORALES",
      "PADILLA",
      "PAEZ",
      "PATIA",
      "PIAMONTE",
      "PIENDAMO",
      "POPAYAN",
      "PUERTO TEJADA",
      "PURACE",
      "ROSAS",
      "SAN SEBASTIAN",
      "SANTA ROSA",
      "SANTANDER DE QUILICHAO",
      "SILVIA",
      "SOTARA",
      "SUAREZ",
      "SUCRE",
      "TIMBIO",
      "TIMBIQUI",
      "TORIBIO",
      "TOTORO",
      "VILLA RICA",
    ],
    departamentos_CESAR: [
      "AGUACHICA",
      "ASTREA",
      "BECERRIL",
      "BOSCONIA",
      "CHIMICHAGUA",
      "CHIRIGUANA",
      "CODAZZI",
      "CURUMANI",
      "EL COPEY",
      "EL PASO GAMARRA",
      "GONZALEZ",
      "LA GLORIA",
      "LA JAGUA DE IBIRICO",
      "LA PAZ",
      "MANAURE",
      "BALCON DEL CESAR",
      "PAILITAS",
      "PELAYA",
      "PUEBLO BELLO",
      "RIO DE ORO",
      " SAN ALBERTO",
      " SAN DIEGO",
      " SAN MARTIN",
      " TAMALAMEQUE",
      " VALLEDUPAR",
    ],
    departamentos_CHOCO: [
      "ACANDI",
      "ALTO BAUDO (PIE DE PATO];",
      "ATRATO",
      "BAGADO",
      "BAHIA SOLANO",
      "BAJO BAUDO (PIZARRO];",
      "BOJAYA (BELLAVISTA];",
      "CANTON DE SAN PABLO",
      "EL CARMEN DE ATRATO",
      "CERTEGUI",
      "CONDOTO",
      "EL CARMEN DEL DARIEN",
      "ISTMINA",
      "JURADO",
      "LITORAL DE SAN JUAN",
      "LLORO",
      "MEDIO ATRATO",
      "MEDIO BAUDO",
      "MEDIO SAN JUAN",
      "NOVITA",
      "NUQUI",
      "QUIBDO",
      "RIOSUCIO",
      "RIO IRO",
      "RIO QUITO",
      "SAN JOSE DEL PALMAR",
      "SIPI",
      "TADO",
      "UNGUIA",
      "UNION PANAMERICANA",
    ],
    departamentos_CORDOBA: [
      "AYAPEL",
      "BUENAVISTA",
      "CANALETE",
      "CERETE",
      "CHIMA",
      "CHINU",
      "CIENAGA DE ORO",
      "COTORRA",
      "LA APARTADA",
      "LOS CORDOBAS",
      "MOMIL",
      "MOÑITOS",
      "MONTELIBANO",
      "MONTERIA",
      "PLANETA RICA",
      "PUEBLO NUEVO",
      "PUERTO ESCONDIDO",
      "PUERTO LIBERTADOR",
      "PURISIMA",
      " SAHAGUN",
      "SAN ANDRES DE SOTAVENTO",
      "SAN ANTERO",
      "SAN BERNARDO DEL VIENTO",
      "SAN CARLOS",
      "SAN JOSE DE URE",
      "SAN PELAYO",
      "SANTA CRUZ DE LORICA",
      "TIERRALTA",
      "TUCHIN",
      "VALENCIA",
    ],
    departamentos_CUNDINAMARCA: [
      "AGUA DE DIOS",
      "ALBA",
      "ANAPOIMA",
      "ANOLAIMA",
      "APULO",
      "ARBELAEZ",
      "BELTRAN",
      "BITUIMA",
      "BOJACA",
      "CABRERA",
      "CACHIPAY",
      "CAJICA",
      "CAPARRAPI",
      "CAQUEZA",
      "CARMEN DE CARUPA",
      "CHAGUANI",
      "CHIA",
      "CHIPAQUE",
      "CHOACHI",
      "CHOCONTA",
      "COGUA",
      "COTA",
      "CUCUNUBA",
      "EL COLEGIO",
      "EL PEÑON",
      "EL ROSAL",
      "FACATATIVA",
      "FOMEQUE",
      "FOSCA",
      "FUNZA",
      "FUQUENE",
      "FUSAGASUGA",
      "GACHALA",
      "GACHANCIPA",
      "GACHETA",
      "GAMA",
      "GIRARDOT",
      "GRANADA",
      "GUACHETA",
      "GUADUAS",
      "GUASCA",
      "GUATAQUI",
      "GUATAVITA",
      "GUAYABAL DE SIQUIMA",
      "GUAYABETAL",
      "GUTIERREZ",
      "JERUSALEN",
      "JUNIN",
      "LA CALERA",
      "LA MESA",
      "LA PALMA",
      "LA PEÑA",
      "LA VEGA",
      "LENGUAZAQUE",
      "MACHETA",
      "MADRID",
      "MANTA",
      "MEDINA",
      "MOSQUERA",
      "NARIÑO",
      "NEMOCON",
      "NILO",
      "NIMAIMA",
      "NOCAIMA",
      "PACHO",
      "PAIME",
      "PANDI",
      "PARATEBUENO",
      "PASCA",
      "PUERTO SALGAR",
      "PULI",
      "QUEBRADANEGRA",
      "QUETAME",
      "QUIPILE",
      "RICAURTE",
      "SAN ANTONIO DEL TEQUENDAMA",
      "SAN BERNARDO",
      "SAN CAYETANO",
      "SAN FRANCISCO",
      "SAN JUAN DE RIOSECO",
      "SASAIMA",
      "SESQUILE",
      "SIBATE",
      "SILVANIA",
      "SIMIJACA",
      "SOACHA",
      "SOPO",
      "SUBACHOQUE",
      "SUESCA",
      "SUPATA",
      "SUSA",
      "SUTATAUSA",
      "TABIO",
      "TAUSA",
      "TENA",
      "TENJO",
      "TIBACUY",
      "TIBIRITA",
      "TOCAIMA",
      "TOCANCIPA",
      "TOPAIPI",
      "UBALA",
      "UBAQUE",
      "UBATE",
      "UNE",
      "UTICA",
      "VENECIA",
      "VERGARA",
      "VIANI",
      "VILLAGOMEZ",
      " VILLAPINZON",
      "VILLETA",
      "VIOTA",
      "YACOPI",
      "ZIPACON",
      "ZIPAQUIRA",
    ],
    departamentos_DISTRITO_CAPITAL: ["BOGOTÁ"],
    departamentos_GUAINIA: [
      "BARRANCO MINAS",
      "CACAHUAL",
      "INIRIDA",
      "LA GUADALUPE",
      "MAPIRIPANA",
      "MORICHAL",
      "PANA PANA",
      "PUERTO COLOMBIA",
      "SAN FELIPE",
    ],
    departamentos_GUAJIRA: [
      "ALBANIA",
      "BARRANCAS",
      "DIBULLA",
      "DISTRACCION",
      "EL MOLINO",
      "FONSECA",
      "HATONUEVO",
      "LA JAGUA DEL PILAR",
      " MAICAO",
      "MANAURE",
      "RIOHACHA",
      "SAN JUAN DEL CESAR",
      "URIBIA",
      "URUMITA",
      "VILLANUEVA",
    ],
    departamentos_GUAVIARE: [
      "CALAMAR",
      "EL RETORNO",
      "MIRAFLORES",
      "SAN JOSE DEL GUAVIARE",
    ],
    departamentos_HUILA: [
      "ACEVEDO",
      "AGRADO",
      "AIPE",
      "ALGECIRAS",
      "ALTAMIRA",
      "BARAYA",
      "CAMPOALEGRE",
      "COLOMBIA",
      "ELIAS",
      "GARZON",
      " GIGANTE",
      "GUADALUPE",
      "HOBO",
      "IQUIRA",
      "ISNOS",
      "LA ARGENTINA",
      "LA PLATA",
      "NATAGA",
      "NEIVA",
      "OPORAPA",
      "PAICOL",
      "PALERMO",
      "PALESTINA",
      "PITAL",
      "PITALITO",
      "RIVERA",
      "SALADOBLANCO",
      "SAN AGUSTIN",
      "SANTA MARIA",
      "SUAZA",
      "TARQUI",
      "TELLO",
      "TERUEL",
      "TESALIA",
      "TIMANA",
      "VILLAVIEJA",
      "YAGUARA",
    ],
    departamentos_MAGDALENA: [
      "ALGARROBO",
      "ARACATACA",
      "ARIGUANI",
      "CERRO DE SAN ANTONIO",
      "CHIBOLO",
      "CIENAGA",
      "CONCORDIA",
      "EL BANCO",
      "EL PIÑON",
      "EL RETEN",
      "FUNDACION",
      "GUAMAL",
      "NUEVA GRANADA",
      "PEDRAZA",
      "PIJIÑO DEL CARMEN",
      "PIVIJAY",
      "PLATO",
      "PUEBLO VIEJO",
      "REMOLINO",
      "SABANAS DE SAN ANGEL",
      "SALAMINA",
      "SAN SEBASTIAN DE BUENAVISTA",
      "SANTA ANA",
      "SANTA BARBARA DE PINTO",
      "SANTA MARTA",
      "SAN ZENON",
      "SITIONUEVO",
      "TENERIFE",
      "ZAPAYAN",
      "ZONA BANANERA",
    ],
    departamentos_META: [
      "ACACIAS",
      "BARRANCA DE UPIA",
      "CABUYARO",
      "CASTILLA LA NUEVA",
      "CUBARRAL",
      "CUMARAL",
      "EL CALVARIO",
      "EL CASTILLO",
      "EL DORADO",
      "FUENTE DE ORO",
      "GRANADA",
      "GUAMAL",
      "LA MACARENA",
      "LA URIBE",
      "LEJANIAS",
      "MAPIRIPAN",
      "MESETAS",
      "PUERTO CONCORDIA",
      "PUERTO GAITAN",
      "PUERTO LLERAS",
      "PUERTO LOPEZ",
      "PUERTO RICO",
      "RESTREPO",
      "SAN CARLOS DE GUAROA",
      "SAN JUAN DE ARAMA",
      "SAN JUANITO",
      "SAN MARTIN",
      "VILLAVICENCIO",
      "VISTA HERMOSA",
    ],
    departamentos_NARINO: [
      "ALDANA",
      "ANCUYA",
      "ARBOLEDA (BERRUECOS];",
      "BARBACOAS",
      "BELEN",
      "BUESACO",
      "CHACHAGÜI",
      "COLON (GENOVA];",
      "CONSACA",
      "CONTADERO",
      "CORDOBA",
      "CUASPUD (CARLOSAMA];",
      "CUMBAL",
      "CUMBITARA",
      "EL CHARCO",
      "EL PEÑOL",
      "EL ROSARIO",
      "EL TABLON DE GOMEZ",
      "EL TAMBO",
      "FRANCISCO PIZARRO (SALAHONDA];",
      "FUNES",
      "GUACHUCAL",
      "GUAITARILLA",
      "GUALMATAN",
      "ILES",
      "IMUES",
      "IPIALES",
      "LA CRUZ",
      "LA FLORIDA",
      "LA LLANADA",
      "LA TOLA",
      "LA UNION",
      "LEIVA",
      "LINARES",
      "LOS ANDES",
      "MAGÜI (PAYAN];",
      "MALLAMA (PIEDRANCHA];",
      "MOSQUERA",
      "NARIÑO",
      "OLAYA HERRERA (BOCAS DE SATINGA];",
      "OSPINA",
      "POLICARPA",
      "POTOSI",
      "PROVIDENCIA",
      "PUERRES",
      "PUPIALES",
      "RICAURTE",
      "ROBERTO PAYAN (SAN JOSE];",
      "SAMANIEGO",
      "SAN BERNARDO",
      "SAN JOSE DE ALBAN",
      "SAN JUAN DE PASTO",
      "SAN LORENZO",
      "SAN PABLO",
      "SAN PEDRO DE CARTAGO",
      "SANDONA",
      "SANTA BARBARA (ISCUANDE];",
      "SANTACRUZ (GUACHAVEZ];",
      "SAPUYES",
      "TAMINANGO",
      "TANGUA",
      "TUMACO",
      "TUQUERRES",
      "YACUANQUER",
    ],
    departamentos_NORTE_DE_SANTANDER: [
      "ABREGO",
      "ARBOLEDAS",
      "BOCHALEMA",
      "BUCARASICA",
      "CACHIRA",
      "CACOTA",
      "CHINACOTA",
      "CHITAGA",
      "CONVENCION",
      "CUCUTA",
      "CUCUTILLA",
      "DURANIA",
      "EL CARMEN",
      "EL TARRA",
      "EL ZULIA",
      "GRAMALOTE",
      "HACARI",
      "HERRAN",
      "LA ESPERANZA",
      "LA PLAYA DE BELEN",
      "LABATECA",
      "LOS PATIOS",
      "LOURDES",
      "MUTISCUA",
      "OCAÑA",
      "PAMPLONA",
      "PAMPLONITA",
      "PUERTO SANTANDER",
      "RAGONVALIA",
      "SALAZAR DE LAS PALMAS",
      "SAN CALIXTO",
      "SAN CAYETANO",
      "SANTIAGO",
      "SANTO DOMINGO DE SILOS",
      "SARDINATA",
      "TEORAMA",
      "TIBU",
      "TOLEDO",
      "VILLA CARO",
      "VILLA DEL ROSARIO",
    ],
    departamentos_PUTUMAYO: [
      "COLON",
      "MOCOA",
      "ORITO",
      "PUERTO ASIS",
      "PUERTO CAICEDO",
      "PUERTO GUZMAN",
      "PUERTO LEGUIZAMO",
      "SAN FRANCISCO",
      "SAN MIGUEL",
      "SANTIAGO",
      "SIBUNDOY",
      "VALLE DEL GUAMEZ",
      "VILLA GARZON",
    ],
    departamentos_QUINDIO: [
      "ARMENIA",
      "BUENAVISTA",
      "CALARCA",
      "CIRCASIA",
      "CORDOBA",
      "FILANDIA",
      "GENOVA",
      "LA TEBAIDA",
      "MONTENEGRO",
      "PIJAO",
      "QUIMBAYA",
      "SALENTO",
    ],
    departamentos_RISARALDA: [
      "APIA",
      "BALBOA",
      "BELEN DE UMBRIA",
      "DOSQUEBRADAS",
      "GUATICA",
      "LA CELIA",
      "LA VIRGINIA",
      "MARSELLA",
      "MISTRATO",
      "PEREIRA",
      "PUEBLO RICO",
      "QUINCHIA",
      "SANTA ROSA DE CABAL",
      "SANTUARIO",
    ],
    departamentos_SAN_ANDRES: ["PROVIDENCIA", "SAN ANDRES", "SANTA CATALINA"],
    departamentos_SANTANDER: [
      "AGUADA",
      "ALBANIA",
      "ARATOCA",
      "BARBOSA",
      "BARICHARA",
      "BARRANCABERMEJA",
      "BETULIA",
      "BOLIVAR",
      "BUCARAMANGA",
      "CABRERA",
      "CALIFORNIA",
      "CAPITANEJO",
      "CARCASI",
      "CEPITA",
      "CERRITO",
      "CHARALA",
      "CHARTA",
      "CHIMA",
      "CHIPATA",
      "CIMITARRA",
      "CONCEPCION",
      "CONFINES",
      "CONTRATACION",
      "COROMORO",
      "CURITI",
      "EL CARMEN DE CHUCURI",
      "EL GUACAMAYO",
      "EL PEÑON",
      "EL PLAYON",
      "ENCINO",
      "ENCISO",
      "FLORIAN",
      "FLORIDABLANCA",
      "GALAN",
      "GAMBITA",
      "GIRON",
      "GUACA",
      "GUADALUPE",
      "GUAPOTA",
      "GUAVATA",
      "GÜEPSA",
      "HATO",
      "JESUS MARIA",
      "JORDAN",
      "LA BELLEZA",
      "LA PAZ",
      "LANDAZURI",
      "LEBRIJA",
      "LOS SANTOS",
      "MACARAVITA",
      "MALAGA",
      "MATANZA",
      "MOGOTES",
      "MOLAGAVITA",
      "OCAMONTE",
      "OIBA",
      "ONZAGA",
      "PALMAR",
      "PALMAS DEL SOCORRO",
      "PARAMO",
      "PIEDECUESTA",
      "PINCHOTE",
      "PUENTE NACIONAL",
      "PUERTO PARRA",
      "PUERTO WILCHES",
      "RIONEGRO",
      "SABANA DE TORRES",
      "SAN ANDRES",
      "SAN BENITO",
      "SAN GIL",
      "SAN JOAQUIN",
      "SAN JOSE DE MIRANDA",
      "SAN MIGUEL",
      "SAN VICENTE",
      "SANTA BARBARA",
      "SANTA HELENA DEL OPON",
      "SIMACOTA",
      "SOCORRO",
      "SUAITA",
      "SUCRE",
      "SURATA",
      "TONA",
      "VALLE DE SAN JOSE",
      "VELEZ",
      "VETAS",
      "VILLANUEVA",
      "ZAPATOCA",
    ],
    departamentos_SUCRE: [
      "BUENAVISTA",
      "CAIMITO",
      "CHALAN",
      "COLOSO",
      "COROZAL",
      "COVEÑAS",
      "EL ROBLE",
      "GALERAS",
      "GUARANDA",
      "LA UNION",
      "LOS PALMITOS",
      "MAJAGUAL",
      "MORROA",
      "OVEJAS",
      "PALMITO",
      "SAMPUES",
      "SAN BENITO ABAD",
      "SAN JUAN DE BETULIA",
      "SAN MARCOS",
      "SAN ONOFRE",
      "SAN PEDRO",
      "SANTIAGO DE TOLU",
      "SINCE",
      "SINCELEJO",
      "SUCRE",
      "TOLUVIEJO",
    ],
    departamentos_TOLIMA: [
      "ALPUJARRA",
      "ALVARADO",
      "AMBALEMA",
      "ANZOÁTEGUI",
      "ARMERO",
      "ATACO",
      "CAJAMARCA",
      "CARMEN DE APICALÁ",
      "CASABIANCA",
      "CHAPARRAL",
      "COELLO",
      "COYAIMA",
      "CUNDAY",
      "DOLORES",
      "ESPINAL",
      "FALAN",
      "FLANDES",
      "FRESNO",
      "GUAMO",
      "HERVEO",
      "HONDA",
      "IBAGUE",
      "ICONONZO",
      "LERIDA",
      "LIBANO",
      "MARIQUITA",
      "MELGAR",
      "MURILLO",
      "NATAGAIMA",
      "ORTEGA",
      "PALOCABILDO",
      "PIEDRAS",
      "PLANADAS",
      "PRADO",
      "PURIFICACION",
      "RIOBLANCO",
      "RONCESVALLES",
      "ROVIRA",
      "SALDAÑA",
      "SAN ANTONIO",
      "SAN LUIS",
      "SANTA ISABEL",
      "SUAREZ",
      "VALLE DE SAN JUAN",
      "VENADILLO",
      "VILLAHERMOSA",
      "VILLARRICA",
    ],
    departamentos_VALLE_DEL_CAUCA: [
      "ALCALA",
      "ANDALUCIA",
      "ANSERMANUEVO",
      "ARGELIA",
      "BOLIVAR",
      "BUENAVENTURA",
      "BUGA",
      "BUGALAGRANDE",
      "CAICEDONIA",
      "CALI",
      "CANDELARIA",
      "CARTAGO",
      "DAGUA",
      "DARIEN",
      "EL AGUILA",
      "EL CAIRO",
      "EL CERRITO",
      "EL DOVIO",
      "FLORIDA",
      "GINEBRA",
      "GUACARI",
      "JAMUNDI",
      "LA CUMBRE",
      "LA UNION",
      "LA VICTORIA",
      "OBANDO",
      "PALMIRA",
      "PRADERA",
      "RESTREPO",
      "RIOFRIO",
      "ROLDANILLO",
      "SAN PEDRO",
      "SEVILLA",
      "TORO",
      "TRUJILLO",
      "TULUA",
      "ULLOA",
      "VERSALLES",
      "VIJES",
      "YOTOCO",
      "YUMBO",
      "ZARZAL",
    ],
    departamentos_VAUPES: [
      "CARURU",
      "MITU",
      "PACOA",
      "PAPUNAUA",
      "TARAIRA",
      "YAVARATE",
    ],
    departamentos_VICHADA: [
      "CUMARIBO",
      "LA PRIMAVERA",
      "PUERTO CARREÑO",
      "SANTA ROSALIA",
    ],

      usuario: {
        primernombre: "",
        segundonombre: "",
        primerapellido: "",
        segundoapellido: "",
        tipodocumento: "",
        documento: "",
        genero: "",
        altura: "",
        nacimiento: "",
        civil: "",
        pais: "",
        departamento: "",
        zona: "",
        municipio: "",
        direccionResidencia: "",
        viviendaResidencia: "",
        modalidadResidencia: "",
        experiencia: "",
        year: "",
        meses: "",
        email: "",
        telefono: "",
        vivienda: "",
        propietario: "",
        modalidad: "",
        telefonoVivienda: "",
        direccionPropiedad: "",
        departamentoPropiedad: "",
        ciudadPropiedad: "",
        vehiculo: "",
        marca: "",
        placa: "",
        cilindraje: "",
        modeloVehiculo: "",

        arma: "",
        modalidadArma: "",
        calibre: "",
        numeroArma: "",
        institucion: "",
        ultimoGrado: "",
        estadoLaboral: "",
        fechaIncial: "",
        fechaFinal: "",
        retiro: "",
        idiomas: "",
        nivelEscritura: "",
        nivelLectura: "",
        nivelConversacional: "",
        observaciones: "",
        salario: "",
        nombrePadre: "",
        fallecidoPadre: "",
        paisPadre: "",
        departamentoPadre: "",
        municipioPadre: "",
        telefonoPadre: "",
        direccionPadre: "",
        ocupacionPadre: "",
        nombreMadre: "",
        fallecidoMadre: "",
        paisMadre: "",
        departamentoMadre: "",
        municipioMadre: "",
        telefonoMadre: "",
        direccionMadre: "",
        ocupacionMadre: "",
        reservista: "",
        institucionLibreta: "",
        numeroLibreta: "",
        claseLibreta: "",
        fechaLibreta: "",
        licenciaConduccion: "",
        numeroLicencia: "",
        categoriaLicencia: "",
        nombreFamiliar1:"",
        nombreFamiliar2:"",
        nombreFamiliar3:"",
        nombreFamiliar4:"",
        municipioFamiliar1:"",
        municipioFamiliar2:"",
        municipioFamiliar3:"",
        municipioFamiliar4:"",
        direccionFamiliar1:"",
        direccionFamiliar2:"",
        direccionFamiliar3:"",
        direccionFamiliar4:"",
        parentescoFamiliar1:"",
        parentescoFamiliar2:"",
        parentescoFamiliar3:"",
        parentescoFamiliar4:"",
        telefonoFijoFamiliar1:"",
        telefonoFijoFamiliar2:"",
        telefonoFijoFamiliar3:"",
        telefonoFijoFamiliar4:"",
        celularFamiliar1:"",
        celularFamiliar2:"",
        celularFamiliar3:"",
        celularFamiliar4:"",
        telefonoOficinaFamiliar1:"",
        telefonoOficinaFamiliar2:"",
        telefonoOficinaFamiliar3:"",
        telefonoOficinaFamiliar4:"",
        nombrePersonal1:"",
        nombrePersonal2:"",
        nombrePersonal3:"",
        nombrePersonal4:"",
        municipioPersonal1:"",
        municipioPersonal2:"",
        municipioPersonal3:"",
        municipioPersonal4:"",
        direccionPersonal1:"",
        direccionPersonal2:"",
        direccionPersonal3:"",
        direccionPersonal4:"",
        telefonoFijoPersonal1:"",
        telefonoFijoPersonal2:"",
        telefonoFijoPersonal3:"",
        telefonoFijoPersonal4:"",
        celularPersonal1:"",
        celularPersonal2:"",
        celularPersonal3:"",
        celularPersonal4:"",
        telefonoOficinaPersonal1:"",
        telefonoOficinaPersonal2:"",
        telefonoOficinaPersonal3:"",
        telefonoOficinaPersonal4:"",
        empresa1:"",
        empresa2:"",
        empresa3:"",
        empresa4:"",
        empresa5:"",
        labora1:"",
        labora2:"",
        labora3:"",
        labora4:"",
        labora5:"",
        departamentoLaboral1:"",
        departamentoLaboral2:"",
        departamentoLaboral3:"",
        departamentoLaboral4:"",
        departamentoLaboral5:"",
        municipioLaboral1:"",
        municipioLaboral2:"",
        municipioLaboral3:"",
        municipioLaboral4:"",
        municipioLaboral5:"",
        fechaIncialLaboral1:"",
        fechaIncialLaboral2:"",
        fechaIncialLaboral3:"",
        fechaIncialLaboral4:"",
        fechaIncialLaboral5:"",
        fechaFinalLaboral1:"",
        fechaFinalLaboral2:"",
        fechaFinalLaboral3:"",
        fechaFinalLaboral4:"",
        fechaFinalLaboral5:"",
        servicioPrestado1:"",
        servicioPrestado2:"",
        servicioPrestado3:"",
        servicioPrestado4:"",
        servicioPrestado5:"",
        cargoActual1:"",
        cargoActual2:"",
        cargoActual3:"",
        cargoActual4:"",
        cargoActual5:"",

        institucionAcademica1:"",
        institucionAcademica2:"",
        institucionAcademica3:"",
        institucionAcademica4:"",
        institucionAcademica5:"",
        fechaAcademica1:"",
        fechaAcademica2:"",
        fechaAcademica3:"",
        fechaAcademica4:"",
        fechaAcademica5:"",
        titulo1:"",
        titulo2:"",
        titulo3:"",
        titulo4:"",
        titulo5:"",
        nivelAcademico1:"",
        nivelAcademico2:"",
        nivelAcademico3:"",
        nivelAcademico4:"",
        nivelAcademico5:"",
        institucionCurso1:"",
        institucionCurso2:"",
        institucionCurso3:"",
        institucionCurso4:"",
        institucionCurso5:"",
        fechaCurso1:"",
        fechaCurso2:"",
        fechaCurso3:"",
        fechaCurso4:"",
        fechaCurso5:"",
        tituloCurso1:"",
        tituloCurso2:"",
        tituloCurso3:"",
        tituloCurso4:"",
        tituloCurso5:"",
      },
    };
  },
  methods: {
  
    clickImagen(e) {
      this.imagen = e.target.files[0];
      console.log(this.imagen);
    },
    clickDocumento(e) {
      this.archivo = e.target.files[0];
      console.log(this.archivo);
    },
     clickDocumento1(e) {
      this.archivo1 = e.target.files[0];
      console.log(this.archivo1);
    },
     clickDocumento2(e) {
      this.archivo2 = e.target.files[0];
      console.log(this.archivo2);
    },
     clickDocumento3(e) {
      this.archivo3 = e.target.files[0];
      console.log(this.archivo3);
    },
     clickDocumento4(e) {
      this.archivo4 = e.target.files[0];
      console.log(this.archivo4);
    },
     clickDocumento5(e) {
      this.archivo5 = e.target.files[0];
      console.log(this.archivo5);
    },
    
    salir() {
      const refImg = ref.child("imagenes/" + this.imagen.name);
      const metadata = { contentType: "image/jpeg" };
      refImg.put(this.imagen, metadata).then((e) => console.log(e));

      const refDoc = ref.child("documentos/" + this.archivo1.name);
      const metadata2 = { contentType: "application/pdf" };
      refDoc.put(this.archivo1, metadata2).then((e) => console.log(e));
    },

      municipios() {
      var i = 0;
      var dpt;
      dpt = document.getElementById("departamentos").value;
      if (dpt != "") {
        var mis_municipios = eval("this." + "departamentos_" + dpt);
        var num_municipios = mis_municipios.length;
        document.f1.municipios.length = num_municipios;
        for (i = 0; i < num_municipios; i++) {
          document.f1.municipios.options[i].value = mis_municipios[i];
          document.f1.municipios.options[i].text = mis_municipios[i];
        }
      } else {
        document.f1.municipios.length = 1;
        document.f1.municipios.options[0].value = "";
        document.f1.municipios.options[0].text = "SIN ASIGNAR";
      }
    },

    onFormSubmit(event) {
      event.preventDefault();

      db.collection("usuarios")
        .add({
          primernombre: this.usuario.primernombre,
          segundonombre: this.usuario.segundonombre,
          primerapellido: this.usuario.primerapellido,
          segundoapellido: this.usuario.segundoapellido,
          tipodocumento: this.usuario.tipodocumento,
          documento: this.usuario.documento,
          altura: this.usuario.altura,
          genero: this.usuario.genero,
          nacimiento: this.usuario.nacimiento,
          civil: this.usuario.civil,
          email: this.usuario.email,
          pais: this.usuario.pais,
          departamento: this.usuario.departamento,
          municipio: this.usuario.municipio,
          zona: this.usuario.zona,
          pais: this.usuario.pais,
          direccionResidencia: this.usuario.direccionResidencia,
          viviendaResidencia: this.usuario.viviendaResidencia,
          modalidadResidencia: this.usuario.modalidadResidencia,
          experiencia: this.usuario.experiencia,
          year: this.usuario.year,
          meses: this.usuario.meses,
          telefono: this.usuario.telefono,
          vivienda: this.usuario.vivienda,
          propietario: this.usuario.propietario,
          modalidad: this.usuario.modalidad,
          telefonoVivienda: this.usuario.telefonoVivienda,
          direccionPropiedad: this.usuario.direccionPropiedad,
          vehiculo: this.usuario.vehiculo,
          marca: this.usuario.marca,
          placa: this.usuario.placa,
          cilindraje: this.usuario.cilindraje,
          modeloVehiculo: this.usuario.modeloVehiculo,
          arma: this.usuario.arma,
          modalidadArma: this.usuario.modalidadArma,
          calibre: this.usuario.calibre,
          numeroArma: this.usuario.numeroArma,
          institucion: this.usuario.institucion,
          ultimoGrado: this.usuario.ultimoGrado,
          estadoLaboral: this.usuario.estadoLaboral,
          fechaIncial: this.usuario.fechaIncial,
          fechaFinal: this.usuario.fechaFinal,
          retiro: this.usuario.retiro,
          idiomas: this.usuario.idiomas,
          nivelEscritura: this.usuario.nivelEscritura,
          nivelLectura: this.usuario.nivelLectura,
          nivelConversacional: this.usuario.nivelConversacional,
          observaciones: this.usuario.observaciones,
          salario: this.usuario.salario,
          nombrePadre: this.usuario.nombrePadre,
          fallecidoPadre: this.usuario.fallecidoPadre,
          paisPadre: this.usuario.paisPadre,
          departamentoPadre: this.usuario.departamentoPadre,
          municipioPadre: this.usuario.municipioPadre,
          telefonoPadre: this.usuario.telefonoPadre,
          direccionPadre: this.usuario.direccionPadre,
          ocupacionPadre: this.usuario.ocupacionPadre,
          nombreMadre: this.usuario.nombreMadre,
          fallecidoMadre: this.usuario.fallecidoMadre,
          paisMadre: this.usuario.paisMadre,
          departamentoMadre: this.usuario.departamentoMadre,
          municipioMadre: this.usuario.municipioMadre,
          telefonoMadre: this.usuario.telefonoMadre,
          direccionMadre: this.usuario.direccionMadre,
          ocupacionMadre: this.usuario.ocupacionMadre,
          reservista: this.usuario.reservista,
          institucionLibreta: this.usuario.institucionLibreta,
          numeroLibreta: this.usuario.numeroLibreta,
          claseLibreta: this.usuario.claseLibreta,
          fechaLibreta: this.usuario.fechaLibreta,
          licenciaConduccion: this.usuario.licenciaConduccion,
          numeroLicencia: this.usuario.numeroLicencia,
          categoriaLicencia: this.usuario.categoriaLicencia,
          nombreFamiliar1: this.usuario.nombreFamiliar1,
          nombreFamiliar2: this.usuario.nombreFamiliar2,
          nombreFamiliar3: this.usuario.nombreFamiliar3,
          nombreFamiliar4: this.usuario.nombreFamiliar4,
          municipioFamiliar1: this.usuario.municipioFamiliar1,
          municipioFamiliar2: this.usuario.municipioFamiliar2,
          municipioFamiliar3: this.usuario.municipioFamiliar3,
          municipioFamiliar4: this.usuario.municipioFamiliar4,
          direccionFamiliar1: this.usuario.direccionFamiliar1,
          direccionFamiliar2: this.usuario.direccionFamiliar2,
          direccionFamiliar3: this.usuario.direccionFamiliar3,
          direccionFamiliar4: this.usuario.direccionFamiliar4,
          parentescoFamiliar1: this.usuario.parentescoFamiliar1,
          parentescoFamiliar2: this.usuario.parentescoFamiliar2,
          parentescoFamiliar3: this.usuario.parentescoFamiliar3,
          parentescoFamiliar4: this.usuario.parentescoFamiliar4,
          telefonoFijoFamiliar1: this.usuario.telefonoFijoFamiliar1,
          telefonoFijoFamiliar2: this.usuario.telefonoFijoFamiliar2,
          telefonoFijoFamiliar3: this.usuario.telefonoFijoFamiliar3,
          telefonoFijoFamiliar4: this.usuario.telefonoFijoFamiliar4,
          celularFamiliar1: this.usuario.celularFamiliar1,
          celularFamiliar2: this.usuario.celularFamiliar2,
          celularFamiliar3: this.usuario.celularFamiliar3,
          celularFamiliar4: this.usuario.celularFamiliar4,
          telefonoOficinaFamiliar1: this.usuario.telefonoOficinaFamiliar1,
          telefonoOficinaFamiliar2: this.usuario.telefonoOficinaFamiliar2,
          telefonoOficinaFamiliar3: this.usuario.telefonoOficinaFamiliar3,
          telefonoOficinaFamiliar4: this.usuario.telefonoOficinaFamiliar4,
          nombrePersonal1: this.usuario.nombrePersonal1,
          nombrePersonal2: this.usuario.nombrePersonal2,
          nombrePersonal3: this.usuario.nombrePersonal3,
          nombrePersonal4: this.usuario.nombrePersonal4,
          municipioPersonal1: this.usuario.municipioPersonal1,
          municipioPersonal2: this.usuario.municipioPersonal2,
          municipioPersonal3: this.usuario.municipioPersonal3,
          municipioPersonal4: this.usuario.municipioPersonal4,
          direccionPersonal1: this.usuario.direccionPersonal1,
          direccionPersonal2: this.usuario.direccionPersonal2,
          direccionPersonal3: this.usuario.direccionPersonal3,
          direccionPersonal4: this.usuario.direccionPersonal4,
          telefonoFijoPersonal1: this.usuario.telefonoFijoPersonal1,
          telefonoFijoPersonal2: this.usuario.telefonoFijoPersonal2,
          telefonoFijoPersonal3: this.usuario.telefonoFijoPersonal3,
          telefonoFijoPersonal4: this.usuario.telefonoFijoPersonal4,
          celularPersonal1: this.usuario.celularPersonal1,
          celularPersonal2: this.usuario.celularPersonal2,
          celularPersonal3: this.usuario.celularPersonal3,
          celularPersonal4: this.usuario.celularPersonal4,
          telefonoOficinaPersonal1: this.usuario.telefonoOficinaPersonal1,
          telefonoOficinaPersonal2: this.usuario.telefonoOficinaPersonal2,
          telefonoOficinaPersonal3: this.usuario.telefonoOficinaPersonal3,
          telefonoOficinaPersonal4: this.usuario.telefonoOficinaPersonal4,
          empresa1: this.usuario.empresa1,
          empresa2: this.usuario.empresa2,
          empresa3: this.usuario.empresa3,
          empresa4: this.usuario.empresa4,
          empresa5: this.usuario.empresa5,
          labora1: this.usuario.labora1,
          labora2: this.usuario.labora2,
          labora3: this.usuario.labora3,
          labora4: this.usuario.labora4,
          labora5: this.usuario.labora5,
          departamentoLaboral1: this.usuario.departamentoLaboral1,
          departamentoLaboral2: this.usuario.departamentoLaboral2,
          departamentoLaboral3: this.usuario.departamentoLaboral3,
          departamentoLaboral4: this.usuario.departamentoLaboral4,
          departamentoLaboral5: this.usuario.departamentoLaboral5,
          municipioLaboral1: this.usuario.municipioLaboral1,
          municipioLaboral2: this.usuario.municipioLaboral2,
          municipioLaboral3: this.usuario.municipioLaboral3,
          municipioLaboral4: this.usuario.municipioLaboral4,
          municipioLaboral5: this.usuario.municipioLaboral5,
          fechaIncialLaboral1: this.usuario.fechaIncialLaboral1,
          fechaIncialLaboral2: this.usuario.fechaIncialLaboral2,
          fechaIncialLaboral3: this.usuario.fechaIncialLaboral3,
          fechaIncialLaboral4: this.usuario.fechaIncialLaboral4,
          fechaIncialLaboral5: this.usuario.fechaIncialLaboral5,
          fechaFinalLaboral1: this.usuario.fechaFinalLaboral1,
          fechaFinalLaboral2: this.usuario.fechaFinalLaboral2,
          fechaFinalLaboral3: this.usuario.fechaFinalLaboral3,
          fechaFinalLaboral4: this.usuario.fechaFinalLaboral4,
          fechaFinalLaboral5: this.usuario.fechaFinalLaboral5,
          servicioPrestado1: this.usuario.servicioPrestado1,
          servicioPrestado2: this.usuario.servicioPrestado2,
          servicioPrestado3: this.usuario.servicioPrestado3,
          servicioPrestado4: this.usuario.servicioPrestado4,
          servicioPrestado5: this.usuario.servicioPrestado5,
          cargoActual1: this.usuario.cargoActual1,
          cargoActual2: this.usuario.cargoActual2,
          cargoActual3: this.usuario.cargoActual3,
          cargoActual4: this.usuario.cargoActual4,
          cargoActual5: this.usuario.cargoActual5,
          institucionAcademica1: this.usuario.institucionAcademica1,
          institucionAcademica2: this.usuario.institucionAcademica2,
          institucionAcademica3: this.usuario.institucionAcademica3,
          institucionAcademica4: this.usuario.institucionAcademica4,
          institucionAcademica5: this.usuario.institucionAcademica5,
          fechaAcademica1: this.usuario.fechaAcademica1,
          fechaAcademica2: this.usuario.fechaAcademica2,
          fechaAcademica3: this.usuario.fechaAcademica3,
          fechaAcademica4: this.usuario.fechaAcademica4,
          fechaAcademica5: this.usuario.fechaAcademica5,
          titulo1: this.usuario.titulo1,
          titulo2: this.usuario.titulo2,
          titulo3: this.usuario.titulo3,
          titulo4: this.usuario.titulo4,
          titulo5: this.usuario.titulo5,
          nivelAcademico1: this.usuario.nivelAcademico1,
          nivelAcademico2: this.usuario.nivelAcademico2,
          nivelAcademico3: this.usuario.nivelAcademico3,
          nivelAcademico4: this.usuario.nivelAcademico4,
          nivelAcademico5: this.usuario.nivelAcademico5,
          institucionCurso1: this.usuario.institucionCurso1,
          institucionCurso2: this.usuario.institucionCurso2,
          institucionCurso3: this.usuario.institucionCurso3,
          institucionCurso4: this.usuario.institucionCurso4,
          institucionCurso5: this.usuario.institucionCurso5,
          fechaCurso1: this.usuario.fechaCurso1,
          fechaCurso2: this.usuario.fechaCurso2,
          fechaCurso3: this.usuario.fechaCurso3,
          fechaCurso4: this.usuario.fechaCurso4,
          fechaCurso5: this.usuario.fechaCurso5,
          tituloCurso1: this.usuario.tituloCurso1,
          tituloCurso2: this.usuario.tituloCurso2,
          tituloCurso3: this.usuario.tituloCurso3,
          tituloCurso4: this.usuario.tituloCurso4,
          tituloCurso5: this.usuario.tituloCurso5,
        })
        .then(() => {
          Swal.fire(
            "¡Felicitaciones!",
            "¡Registro se ha creado correctamente!",
            "success"
          );
          this.usuario.primernombre = "";
          this.usuario.segundonombre = "";
          this.usuario.primerapellido = "";
          this.usuario.segundoapellido = "";
          this.usuario.tipodocumento = "";
          this.usuario.documento = "";
          this.usuario.email = "";
          this.usuario.telefono = "";
          this.usuario.vivienda = "";
          this.usuario.propietario = "";
          this.usuario.modalidad = "";
          this.usuario.telefonoVivienda = "";
          this.usuario.direccionPropiedad = "";
          this.usuario.vehiculo = "";
          this.usuario.marca = "";
          this.usuario.placa = "";
          this.usuario.cilindraje = "";
          this.usuario.modeloVehiculo = "";
          this.cedula = "";
          this.archivoPdf1 = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.clase {
  width: 80%;
}
.centimetros {
  margin-left: 10px;
  margin-top: 5px;
}
.selector {
  margin-left: -5%;
}

</style>