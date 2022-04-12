

<template>
    <div class="pokemonCard" @click="chargerPageDetails">
        <div class="cardImageZone">
            <img :src="pokemonImage"/>
        </div>
        <div class="nameZone">
            <p>{{ pokemonInfos.name }}</p>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            pokemonInfos: {},
            pokemonImage: '',
        };
    },
    props: {
        pokemonData: Object
    },
    async mounted() {
        let url = this.pokemonData.url;
        let lastSlashPosition = url.lastIndexOf('/');
        let id = parseInt(url.substring(lastSlashPosition+1));
        if(this.$store.getters.checkIfDataComplete(id)){
            this.pokemonInfos = this.$store.getters.getPokemonByIndex(id);
        } else {
            let res = await axios.get(this.pokemonData.url);
            this.pokemonInfos = res.data;
            this.pokemonInfos.url = url;
            this.$store.commit("setPokemon", res.data);
        }
        this.pokemonImage = this.pokemonInfos.sprites.other["official-artwork"]["front_default"];
    },

    methods: {
        chargerPageDetails(){
            this.$router.push({
                path: `/pokemon/${this.pokemonInfos.id}`
            });
        }
    },
}
</script>
<style>
    .pokemonCard {
    /* background-color: white; */

        height: 350px;
        width: 300px;
        border-radius: 15px;

        
        margin-top: 50px;
        overflow: hidden;

        float: left;
        margin-left: 15px;
        margin-right: 15px;

        /* border: 1px solid gainsboro; */
        transition-duration: 150ms;

        background: rgba( 255, 255, 255, 0.15 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 5px );
        -webkit-backdrop-filter: blur( 5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }
    .pokemonCard:hover {
            transform: translateY(-20px) scale(1.05) ;
            transition-duration: 150ms;
            cursor: pointer;
    }
    .cardImageZone {
        display: flex;
        width: 100%;
        height: 80%;
        justify-content: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.18);
        /* background-color: #dbdbdb; */
    }
    .nameZone {
        display: flex;
        align-items: center;
        justify-content: center;
        /* color: black; */
        color: whitesmoke;
        height: 20%;
    }
</style>