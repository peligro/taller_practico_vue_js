<template>
  <div>
    <h1>Página de nosotros</h1>
    
    <div class="alert alert-success" v-if="edad && edad>=18 && edad<65">
      Eres mayor de edad
      <br />
    </div>
      
    <div class="alert alert-warning" v-else-if="edad && edad>=65">
      Estás veteran@ !!!!
      <br />
    </div>

    <div class="alert alert-danger" v-else>
      Eres menor de edad
      <br />
    </div>
     <hr />
     <h2>Listado de personas</h2>
     <table class="table table-bordered">
       <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Edad</th>
          <th>E-Mail</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="persona in personas" :key="persona.id">
         <td>{{ persona.id }}</td>
         <td>{{ persona.nombre }}</td>
         <td>{{ persona.edad }}</td>
         <td>{{ persona.correo }}</td>
         <td>
         </td>
        </tr>
      </tbody>
     </table>
  </div>
</template>

<script>
export default {
  name: 'NosotrosComponent',
  data(){
    return{
      edad:65,
      personas:[
      {'id': 1, 'nombre':'César Cancino', 'edad': 40, 'correo':'yo@cesarcancino.com'},
      {'id': 2, 'nombre':'Lupita Mendoza', 'edad': 40, 'correo':'lupita@gmail.com'},
      {'id': 3, 'nombre':'Federico Cantú', 'edad': 68, 'correo':'fede@hotmail.com'},
      {'id': 4, 'nombre':'Andrés Martínez', 'edad': 26, 'correo':'andy@yahoo.es'}
      ]
    }
  }
  
}
</script>

