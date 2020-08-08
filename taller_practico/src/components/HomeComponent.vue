<template>
  <div>
    
    <h1>Página de Inicio</h1>
    <h3>Nombre: {{ nombre | convierte_a_mayusculas }}</h3>
    <p>
      <a href="javascript:void(0);" v-on:click="cuantasVeces();">Presióname!!!</a> <a href="javascript:void(0);" @click="otroMetodo('hola', 'chao')">Otro método</a>
    </p>
    <hr />
    <h4>El valor del contador es {{ contador }}</h4>

  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
  data(){
    return{
      nombre:'César Cancino',
      edad:40,
      contador:0
    }
  },
  methods:{
    cuantasVeces()
    {
      this.contador++;
    },
    otroMetodo(par1, par2)
    {
      alert('par1='+par1+' | par2='+par2);
    }
  },
  filters:{
    convierte_a_mayusculas(value)
    {
      return value.toUpperCase();
    }
  },
  mounted(){
    console.log('el componente se ha montado');
  },
  created ()
  {
    console.log('se ha creado el componente');
  },
  updated()
  {
    console.log('el componente ha sido actualizado');
  },
  destroyed(){
    console.log('se ha eliminado');
  }
}
</script>

