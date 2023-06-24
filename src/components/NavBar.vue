<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <PokedexImage></PokedexImage>
      </a>
      <a class="navbar-item">Curriculum Vitae</a>
      <a class="navbar-item">
        <PokedexImage></PokedexImage>
      </a>
      <a class="navbar-item">To do List</a>
      <a class="navbar-item">
        <PokedexImage></PokedexImage>
      </a>
      <a class="navbar-item">Project Organizer</a>
      <a class="navbar-item">
        <PokedexImage></PokedexImage>
      </a>
      <a class="navbar-item">Lari's Calculator</a>
      <a class="navbar-item">
        <PokedexImage></PokedexImage>
      </a>
      
    </div>
  </nav>
</template>
<script>
import PokedexImage from './PokedexItens/PokedexImage.vue';

export default {
  name: 'NavBar',
  components: {
    PokedexImage
  }
}
</script>
<style>
</style>