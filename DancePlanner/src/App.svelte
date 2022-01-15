<script>
  import { fade } from "svelte/transition";
  import Navbar from "@/components/Navbar.svelte";
  import Header from "@/components/Header.svelte";
  import Home from "@/components/Home.svelte";
</script>

<main transition:fade>
  <Navbar />
  <Header />
  <Home />
</main>

<style>
  
</style>

<!--
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }-->