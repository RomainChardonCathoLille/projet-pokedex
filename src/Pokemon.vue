<template>
    <div>Je suis un pokémon</div>
</template>


<script>
import "axios";
export default {
    data() {
        return {
            pokemons: [],
        };
    },
    props: {
        pokemonData: Object,
    },
    created(){
        console.log(this.pokemonData);
    },
    methods: {},
}
</script>

<style>
</style>
