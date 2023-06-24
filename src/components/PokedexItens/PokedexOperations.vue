<template>
  <div>
    <h1>Pokédex</h1>
    <ul>
      <li v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'PokedexOperations',
  data() {
    return {
      pokemons: [],
    };
  },
  mounted() {
    this.fetchPokemons();
  },
  methods: {
    fetchPokemons() {
      axios
        .get('https://pokeapi.co/api/v2/pokemon?limit=20')
        .then(response => {
          this.pokemons = response.data.results;
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>