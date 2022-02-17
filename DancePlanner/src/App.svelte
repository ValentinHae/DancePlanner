<script>
  import { fade } from "svelte/transition";
  import Navbar from "@/components/Navbar.svelte";
  import Banner from "@/components/Banner.svelte";
  import Search from "@/components/Searcharea.svelte";
  import Cards from "@/components/Cards.svelte"
  import Map from "@/components/Maps.svelte"
  import Footer from "@/components/Footer.svelte"
  import Searcharea from "@/components/Searcharea.svelte"
</script>

<main transition:fade>
  <Navbar />
  <Banner />
  <Searcharea />
  <Cards />
  <Map />
  <Footer />
</main>
<style>
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>