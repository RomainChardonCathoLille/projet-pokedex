

<template>
  <div class="pokemons_container">
    <div v-for="pokemon in pokemons">
    <!-- <p>{{ pokemon.name }}</p> -->
        <PokemonCard :pokemonData="pokemon"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PokemonCard from './components/PokemonCard.vue'
export default {
    data() {
        return {
            pokemons: [],
        };
    },
    created() {
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then((result) => {
                let resPokemons = result.data.results;
                for(let i = 0; i < resPokemons.length; i++){
                    this.pokemons.push(resPokemons[i]);
                }
            });
    },
    methods: {},
    components: { PokemonCard }
}
</script>

<style>
    .pokemons_container {
        display: flex;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
        flex-wrap: wrap;
        padding-bottom: 50px;
    }
</style>