

<template>
  <div class="pokemons_container">
    <div v-for="pokemon in pokemons">
        <PokemonCard :pokemonData="pokemon" v-if="pokemon != undefined"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import PokemonCard from './components/PokemonCard.vue'
export default {
    data() {
        return {
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
                let nextApiCall = result.data.next;
                for(let i = 0; i < resPokemons.length; i++){
                    let url = resPokemons[i].url;
                    let lastSlashPosition = url.lastIndexOf('/');
                    this.$store.commit('addPokemon', resPokemons[i]);
                    this.$store.commit('setHomepageMainApiNextCall', nextApiCall);
                }
            });
            this.getNextPokemons();
    },
    methods: {
        getNextPokemons(){
            window.onscroll = async () => {
                let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
                if(bottomOfWindow){
                    if(this.$store.getters.getNextHomepageApiCall != undefined){
                        let res = await axios.get(this.$store.getters.getNextHomepageApiCall);
                        if(res != undefined && res != null){
                            let resPokemons = res.data.results;
                            let nextApiCall = res.data.next;

                            for(let i = 0; i < resPokemons.length; i++){
                                this.$store.commit("addPokemon", resPokemons[i]);
                            }
                            this.$store.commit('setHomepageMainApiNextCall', nextApiCall);
                        }
                    }
                } 
            }
        }
    },
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