<template>
  <div>
  <img :src="pokemonImage" alt="Bulma">
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PokedexImage',
  data() {
    return {
      pokemonImage: Object,
    };
  },
  mounted() {
    this.fetchPokemonImage(39);
  },
  methods: {
    fetchPokemonImage(number) {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${number}`)
        .then(response => {
          this.pokemonImage = response.data.sprites.front_default;
          console.log(response.data.sprites)
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>