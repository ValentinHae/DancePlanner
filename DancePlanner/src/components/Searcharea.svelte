<script>
  import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
  import DanceTyper from "@/components/Typeaheaddance.svelte"
  import CityTyper from "@/components/Typeaheadcity.svelte"

  let visible = true,
			onLoad = false
	onMount(() => {
		setTimeout(() => onLoad = true, 50)
	})

  let tanzstil = '';
  let stadt = '';
  let range = 50;
</script>

{#if onLoad && visible}
	<h1 class="load" in:fly="{{ y: 100, duration: 700 }}" out:fade>
		Tanzevents suchen
  </h1>
{/if}

<div class="textinput">
  <DanceTyper />
  <CityTyper />
</div>

<div class="slidecontainer">
  <p>Umgebung</p>
  <input type="range" min="1" max="100" bind:value={range} step="1" class="slider" id="range">
  <p>Umkreis: {range}km</p>
</div>

<div class="output">
  <hr>
  <h2>Alle Tanzevents</h2>
</div>

<link
  href="https://fonts.googleapis.com/css?family=Overpass:100,400"
  rel="stylesheet"
/>
  
<style>
  h1 {
    color: black;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    text-align: center;
  }
  p {
    color: black;
    text-transform: uppercase;
    font-size: 1.5em;
    font-weight: 100;
    text-align: center;
  }
  h2 {
    color: black;
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
    text-align: center;
    margin: 1em; 
  }
  .slidecontainer {
  width: 100%;
  margin-bottom: 4em;
  }
  input[type=range] {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2em;
    -webkit-appearance: none;
    appearance: none;
    height: 25px;
    background:whitesmoke;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  .slider:hover {
  opacity: 1;
  } 
  .slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px; 
  background: black;
  cursor: pointer; 
  }
  
</style>