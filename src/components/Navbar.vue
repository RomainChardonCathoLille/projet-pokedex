<template>
<div>
    <img v-bind:src="require('/images/pokemon_logo.png')"/>
</div>

</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        data(){
            return {}
        },
    });
</script>