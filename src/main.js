import { createApp } from 'vue'
import App from './App.vue'
import router from './routing'
import { createStore } from "vuex";

import './index.css'

const app = createApp(App);

const store = createStore({
    state() {
        return {
            pokemons: [],
            pokemonsCompleteData: [],
            homepageMainApiNextCall: "",
        }
    },
    getters: {
        getAllPokemons: (state) => state.pokemons,
        getPokemonByIndex: (state) => (index) => {
            return state.pokemons[index-1];
        },
        checkIfDataComplete: (state) => (index) => {
            return state.pokemonsCompleteData[index-1];
        },
        getNextHomepageApiCall: (state) => state.homepageMainApiNextCall,
    },
    mutations: {
        addPokemon(state, pokemon){
            state.pokemons.push(pokemon);
            state.pokemonsCompleteData.push(false);
        },
        setPokemon(state, pokemonData){
            let id = parseInt(pokemonData.id) - 1;
            state.pokemons[id] = pokemonData;
            state.pokemonsCompleteData[id] = true;
        },
        setHomepageMainApiNextCall(state, url){
            state.homepageMainApiNextCall = url;
        }
    }
});

app.use(router);
app.use(store);

app.mount('#app');