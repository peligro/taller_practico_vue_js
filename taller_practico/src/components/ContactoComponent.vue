<template>
  <div>
    <h1>Página de Contacto</h1>
    <form name="form" id="form" v-on:submit.prevent="procesar();">
      <p>
        Nombre: <input type="text" name="nombre" placeholder="Nombre" class="form-control" v-model="contacto.nombre" autocomplete="=off" />
        
      </p><div v-if="submited && !$v.contacto.nombre.required" class="alert alert-danger">El campo nombre es obligatorio</div>
      <div v-if="submited && !$v.contacto.nombre.minLength">El campo nombre debe tener al menos 2 caracteres</div>
      <p>
        E-Mail: <input type="text" name="correo" placeholder="E-Mail" class="form-control" v-model="contacto.correo" />
      </p>
      <p>
        Teléfono: <input type="text" name="telefono" placeholder="Teléfono" class="form-control" v-model="contacto.telefono" />
      </p>
      <p>
        Mensaje: <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje:" class="form-control" v-model="contacto.mensaje"></textarea>
      </p>
      <hr />
      <input type="submit" value="Enviar" title="Enviar" class="btn btn-primary" />
    </form>
    <FlashMessage></FlashMessage>
  </div>
</template>

<script>
    import {
        required,
        minLength,
        email
    } from 'vuelidate/lib/validators';
    import { Global } from "../Global";
    import axios from "axios";
    export default {
        name: 'ContactoComponent',
        data() {
            return {
                submited: false,
                contacto: {
                    nombre: '',
                    correo: '',
                    telefono: '',
                    mensaje: ''
                }
            }
        },
        methods: {
            procesar() {
                this.submited = true;
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return false;
                }
                let config = {
                  headers: {
                    token: Global.token,
                    "Content-Type": "application/x-www-form-urlencoded",
                  },
                };
                let parametros =
                      "nombre=" +
                      this.contacto.nombre +
                      "&correo=" +
                      this.contacto.correo +
                      "&telefono=" +
                      this.contacto.telefono +
                      "&mensaje=" +
                      this.contacto.mensaje;
                axios
                .post(Global.url + 'contacto', parametros, config)
                .then( (response) => {
                  if(response.status==200)
                  {
                    this.flashMessage.show({satus: 'success', title: 'Mi aplicación', message: 'Hemos recibido tu mensaje exitosamente. Nos pondremos en contacto contigo a la brevedad.'});
                    document.form.reset();
                    this.$router.push('/contacto?s=1');
                  }
                }

                )
                .catch( (error) => {
                  console.log(error);
                }

                );

            }
        },
        validations: {
            contacto: {
                nombre: {
                    required,
                    minLength: minLength(2)
                },
                correo: {
                    required,
                    minLenght: minLength(2),
                    email

                }
            }
        }

    }
</script>