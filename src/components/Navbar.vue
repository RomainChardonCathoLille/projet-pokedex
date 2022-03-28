<template>

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://www.nicepng.com/png/full/12-124701_pokeball-png.png"
        height="16"
        alt="pokemon logo"
        loading="lazy"
        id="navbarLogo"
      />
    </a>

    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Pokémons</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Berries</a>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#">Machines</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<script>
    import { defineComponent } from "vue";

    export default defineComponent({
        data(){
            return {}
        },
    });
</script>

<style>
    #navbarLogo {
        margin-top: -1px;
        width: 30px;
    }
</style>