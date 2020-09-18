<template>
  <div>
  <ol class="breadcrumb">
  <li><router-link to="/home">Home</router-link></li>
  <li><router-link to="/servicios">Servicios</router-link></li>
  <li class="active">{{servicios.titulo}}</li>
</ol>
    <h1>Página de Detalle de Servicios</h1>
    <div class="media">
      <div class="media-left media-middle">
          <img class="media-object" :src="servicios.foto" :alt="servicios.titulo" width="200" height="200" />
        
      </div>
      <div class="media-body">
        <h2 class="media-heading">{{servicios.titulo}}</h2>
        {{servicios.detalle}}
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
        name: 'ServiciosDetalleComponent.vue',
        data() {
            return {
                servicios: []
            }
        },
        mounted() {
            let slug = this.$route.params.slug; 
            //console.log(slug);
            this.getServicios(slug);
        },
        methods: {
            getServicios(slug) {
                let config = {
                    headers: {
                        'token': Global.token
                    }
                }
                axios.get(Global.url + 'servicios/'+slug, config)
                    .then(
                        res => {
                            //console.log('servicios', res.status);
                            if (res.status == 200) {
                                this.servicios = res.data[0];
                                //console.log('servicios', this.servicios);
                            } else {
                                alert("no se pudo conectar");
                            }
                        }

                    )
            }
        },

    }
</script>