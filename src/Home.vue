

<template>
  <div class="pokemons_container">
    <div v-for="pokemon in pokemons">
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
            // pokemons: [],
        };
    },
    computed: {
        pokemons(){
            return this.$store.getters.getAllPokemons;
        },
    },
    mounted() {
        if(this.$store.getters.getAllPokemons.length) return;
        axios.get("https://pokeapi.co/api/v2/pokemon")
            .then((result) => {
                let resPokemons = result.data.results;
                for(let i = 0; i < resPokemons.length; i++){
                    let url = resPokemons[i].url;
                    let lastSlashPosition = url.lastIndexOf('/');
                    let id = parseInt(url.substring(lastSlashPosition+1));
                    // this.pokemons.push(resPokemons[i]);
                    // if(this.$store.getters.checkIfDataComplete[id] != null && this.$store.getters.checkIfDataComplete[id]== false){
                        this.$store.commit('addPokemon', resPokemons[i]);
                    // }
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