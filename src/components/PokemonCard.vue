

<template>
    <div class="pokemonCard">
        <div class="cardImageZone">
            <img :src="pokemonInfos.sprites.front_default"/>
        </div>
        <div class="nameZone">
            <p>{{ nameWithCapitalLetter(pokemonInfos.name) }}</p>
        </div>
    </div>
</template>

<script>import axios from "axios";

export default {
    data() {
        return {
            pokemonInfos: {sprites: {front_default : ''}},
        };
    },
    props: {
        pokemonData: Object
    },
    async created() {
        console.log(this.pokemonData);
        let res = await axios.get(this.pokemonData.url);
        this.pokemonInfos = res.data;
        console.log(res.data);
        // axios.get(this.pokemonData.url)
        //     .then(res => {
        //         this.pokemonInfos = res.data
        //         console.log(res.data);
        //         console.log(this.pokemonInfos);
        //     });
    },

    methods: {
        nameWithCapitalLetter(name){
            console.log(name);
            return name
        }
    },
}
</script>
<style>
    .pokemonCard {
    background-color: white;

    height: 350px;
    width: 300px;
    border-radius: 15px;

    
    margin-top: 50px;
    /*margin-left: 3%;*/
    overflow: hidden;

    float: left;
    margin-left: 15px;
    margin-right: 15px;

    border: 1px solid gainsboro;
    /* box-shadow: 4px 4px 4px lightgray; */
    transition-duration: 150ms;
    }
    .pokemonCard:hover {
            transform: translateY(-20px) scale(1.05) ;
            transition-duration: 150ms;
    }
    .cardImageZone {
        display: flex;
        width: 100%;
        height: 80%;
        justify-content: center;
        background-color: #dbdbdb;
    }
    .nameZone {
        display: flex;
        align-items: center;
        justify-content: center;
        color: black;
        height: 20%;
    }
</style>