<template>
  <div class="card" style="width: 18rem;">
    <img :src=image  class="card-img-top" style="width: 100px; height: 100px;"/>

  <div class="card-body">
    <h5 class="card-title">{{ title }}</h5>
    <p class="card-text">{{ description }}</p>
    <p class="card-text">Serve até {{ 2 }} pessoas</p>
    <p class="card-text">R$ {{ price }}</p>
    <p class="card-text">Categoria: {{ category }}</p>
    <a href="#" class="btn btn-primary">Adicionar ao pedido !</a>
  </div>
</div>
   <!--  <div class="my_card">
      <div class="content">
        <i class="fa-duotone fa-pot-food"></i>
        <h3>{{ title }}</h3>
        <p class="percentage">
        <i class="fa-duotone fa-pot-food"></i>   {{ description }}
        </p>
        <p><i class="fa fa-users"> </i>   Serve até {{ 2 }} pessoas</p>
        <p><i class="fa fa-users"> </i> {{ price }}</p>
        <p><i class="fa-solid fa-kitchen-set"> </i> {{ category }}</p>
        <img :src=image  style="width: 100px; height: 100px;"/>
      </div>
    </div> -->
  </template>
  
  <script>

  export default {
    name: "CardsMenuInitComponent",
    props: {
      title: String,
      description: String,
      image: String,
      price: String,
      category: String
    },
  };
  </script>
  
  <style scoped> 
  </style>
  