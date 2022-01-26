<script>
  import { fade } from "svelte/transition";
  import Navbar from "@/components/Navbar.svelte";
  import Banner from "@/components/Banner.svelte";
  import Search from "@/components/Searcharea.svelte";
  import Cards from "@/components/Cards.svelte"
  import Map from "@/components/Maps.svelte"
</script>

<main transition:fade>
  <Navbar />
  <Banner />
  <Search />
  <Cards />
  <Map />
</main>
<style>
/*
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }*/

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>