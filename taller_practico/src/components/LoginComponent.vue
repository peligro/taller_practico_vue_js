<template>
  <div>
    <h1>Ingresa tus datos para acceder</h1>
    <form name="form" id="form" v-on:submit.prevent="procesar();">
      <p>
        E-Mail: <input type="text" name="correo" placeholder="E-Mail" class="form-control" v-model="contacto.correo" />
      </p>
      <p>
        Contraseña: <input type="password" name="password" placeholder="Contraseña" class="form-control" v-model="contacto.password" />
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
        name: 'LoginComponent',
        data() {
            return {
                submited: false,
                contacto: {
                    correo: '',
                    password: ''
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
                    "Content-Type": "application/json",
                  },
                };
                axios
                .post(Global.url + 'login', this.contacto, config)
                .then( (response) => {
                  if(response.status==200)
                  {
                    //console.log(response.data.nombre);
                    this.flashMessage.show({status: 'success', title: 'Mi aplicación', message: 'Te has logueado exitosamente!!!.'});
                    localStorage.setItem('cesar_token', response.data.token);
                    localStorage.setItem('cesar_nombre', response.data.nombre);
                    this.$router.push('/servicios');
                  }
                }

                )
                .catch( (error) => {
                  this.flashMessage.show({status: 'error', title: 'Mi aplicación', message: 'Los datos ingresados no son válidos.'+error})
                  document.form.reset(); 
                });

            }
        },
        validations: {
            contacto: {
                password: {
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