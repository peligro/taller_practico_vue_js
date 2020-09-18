<template>
  <div>
    <h1>Página de Servicios</h1>
    <p>Bienvenid@ {{ nombre }} | <a href="javascript:void(0);" v-on:click="cerrarSesion();">Salir</a></p>
    <div class="media" v-for="servicio in servicios" :key="servicio.id">
      <div class="media-left media-middle">
        <router-link :to="{ name: 'servicios-detalle', params: { slug: servicio.slug} }">
          <img class="media-object" :src="servicio.foto" :alt="servicio.titulo" width="200" height="200" />
        </router-link>
      </div>
      <div class="media-body">
        <h2 class="media-heading">{{servicio.titulo}}</h2>
        {{servicio.detalle}}
      </div>
    </div>

  </div>
</template>

<script>
    import {
        Global
    } from '../Global';
    import axios from 'axios';
    export default {
        name: 'ServiciosComponent',
        data() {
            return {
                servicios: [],
                nombre: ''
            }
        },
        mounted() {
            if(localStorage.getItem('cesar_token'))
            {
                this.getServicios();
                this.nombre = localStorage.getItem('cesar_nombre');
            }else
            {
                this.$router.push("/login");
            }
            
        },
        methods: {
            getServicios() {
                let config = {
                    headers: {
                        'token': Global.token
                    }
                }
                axios.get(Global.url + 'servicios', config)
                    .then(
                        res => {
                            //console.log('servicios', res.status);
                            if (res.status == 200) {
                                this.servicios = res.data;
                                //console.log('servicios', this.servicios);
                            } else {
                                alert("no se pudo conectar");
                            }
                        }

                    )
            },
            cerrarSesion()
            {
                localStorage.clear();
                //localStorage.removeItem(nombreDelLocal);
                this.$router.push("/login");
            }
        },

    }
</script>