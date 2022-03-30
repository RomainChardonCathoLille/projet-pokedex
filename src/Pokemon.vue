<template>
<!-- Conditionner affichage par v-if -->
    <div class="mainContainer" v-if="itemsLoaded">
        <div class="mainImageContainer">
            <img :src="currentImage"/>
        </div>
        <div class="nameContainer">
            <h1>{{ firstLetterUppercase(pokemon.name) }} - N.{{ pokemon.id }}</h1>
        </div>
        <div class="mainInfosContainer">
            <div class="mainInfoItem">
                Weight: {{ pokemon.weight/10 }}kg
            </div>
            <div class="mainInfoItem">
                Height: {{ pokemon.height/10 }}m
            </div>
        </div>
        <div class="statsContainer"  style="overflow-x: hidden;">
            <div class="statBar" v-for="stat in pokemon.stats" style="width:50%; float:left;margin-left:auto;margin-right:auto;">
                {{ stat.base_stat }} {{ firstLetterUppercase(stat.stat.name) }} <br>
                <progress :value="stat.base_stat" max="300"></progress>
            </div>
        </div>
    </div>
</template>


<script>
import axios from "axios";
export default {
    data() {
        return {
            pokemon: {},
            pokemonStats: [],
            itemsLoaded: false,
            currentImage: "",
        };
    },
    props: {
        id: String,
    },
    async mounted(){
        this.pokemon = this.$store.getters.getPokemonByIndex(this.id);
        if(this.pokemon == null){
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`);
            this.pokemon = res.data;
        }
        console.log(this.pokemon);
        let pokemonImage = this.pokemon.sprites.other["official-artwork"]["front_default"];
        // this.currentImage = this.pokemon.sprites.other.official-artwork.front_default;
        this.currentImage = pokemonImage;
        this.itemsLoaded = true;
        for(let i = 0; i < this.pokemon.stats.length; i++){
            this.pokemonStats.push(this.pokemon.stats[i]);
        }
    },
    methods: {
        firstLetterUppercase(string){
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
    },
}
</script>

<style>
    .mainContainer {
        overflow-y: auto;
        margin-top: 15px;
        margin-bottom: 15px;
        margin-left: auto;
        margin-right: auto;
        width: 80%;
        min-width: 250px;
        max-width: 1100px;

        background: rgba( 255, 255, 255, 0.15 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 5px );
        -webkit-backdrop-filter: blur( 5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    .mainImageContainer {
        display: block;
        border-right: 1px solid rgba( 255, 255, 255, 0.18 );
        width: 30%;
        min-width: 250px;
        float: left;
        /* border: 2px solid white; */
    }
    img {
        object-fit: cover;
        width: 100%;
    }
    .nameContainer {
        margin-top: 5px;
        padding-bottom: 5px;
        overflow: hidden;
        text-align: center;
        font-family: 'Ubuntu', sans-serif;
        font-size: 25px;
        border-bottom: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    .mainInfosContainer {
        padding: 10px;
        overflow: hidden;
        font-family: 'Ubuntu', sans-serif;
    }
    .mainInfoItem {
        width: 50%;
        float: left;
        text-align: center;
    }
</style>
