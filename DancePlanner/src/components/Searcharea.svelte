<script>
    import { onMount } from 'svelte';
    import { fade, fly } from 'svelte/transition';
    import Objects from "./Suggestions.svelte"
    import { citynamesSearchStore, dancestyleSearchStore, rangeStore } from "./store.js";
    import { citylist } from "./Data.svelte"
    import { dancestyles } from "./Data.svelte"
    
    let visible = true,
              onLoad = false
      onMount(() => {
          setTimeout(() => onLoad = true, 50)
      })
      
	  let dancestylesNew = [];
    let dancestylesSearch = "";
    let isFocusedDance = false;
    let isFocusedCity = false;
    let citynames = [];
    let citynamesNew = [];
    let citynamesSearch = "";
    let range = 55;
    let key;
  
    function searchComplete() {
        $rangeStore = range;
        $citynamesSearchStore = citynamesSearch;
        $dancestyleSearchStore = dancestylesSearch;
    }
    for (const city of citylist) {
        citynames.push(city.name)
    }
  
    const onFocusDance = () => isFocusedDance=true;
    const onBlurDance = () => isFocusedDance=false;
    const onFocusCity = () => isFocusedCity=true;
    const onBlurCity = () => isFocusedCity=false;
        
    const typeaheadCity = () => {
        let citynamesNewIncludes = citynames.filter(citynames => citynames.toLowerCase().includes(citynamesSearch.toLowerCase()) )
        let citynamesNewStartWith = citynames.filter(citynames => citynames.toLowerCase().startsWith(citynamesSearch.toLowerCase()) )
        citynamesNew = citynamesNewStartWith.sort().concat(citynamesNewIncludes.sort())
        citynamesNew = [...new Set(citynamesNew)]
    }
        
    const newSearchInputCity = (city) => {
        citynamesSearch = city
    }

    const typeaheadDance = () => {
        let dancestylesNewIncludes = dancestyles.filter(dancestyles => dancestyles.toLowerCase().includes(dancestylesSearch.toLowerCase()) )
        let dancestylesNewStartWith = dancestyles.filter(dancestyles => dancestyles.toLowerCase().startsWith(dancestylesSearch.toLowerCase()) )
        dancestylesNew = dancestylesNewStartWith.sort().concat(dancestylesNewIncludes.sort())
        dancestylesNew = [...new Set(dancestylesNew)]
    }

    const newSearchInputDance = (dancestyle) => {
        dancestylesSearch = dancestyle
    }

    const randomDance = () => {
        let randomDancestyle = dancestyles[Math.floor(Math.random()*dancestyles.length)]
        dancestylesSearch = randomDancestyle
    }

    function handleKeydown(event) {
		  key = event.key;
      if (key == "Enter") {
        searchComplete()
        onBlurDance()
        onBlurCity()
      }
      if (key == "Backspace") {
        searchComplete()
      }
	  }
</script>

{#if onLoad && visible}
	<h1 class="load" in:fly="{{ y: 100, duration: 700 }}" out:fade>
		Tanzevents suchen
  </h1>
{/if}

<div class="typeahead"> 
  <input id="dancestyle" type="text" name="dancestyle" placeholder="Tanzstil" bind:value={dancestylesSearch} on:input={typeaheadDance} on:focus={onFocusDance} on:blur={() => {onBlurDance();searchComplete()}} on:keydown={handleKeydown}>
</div>
<ul class="typeahead-object-list" >
  {#if isFocusedDance === true}
    {#if dancestylesSearch.length === 0}
      {#each dancestyles as dancestyle}
        <Objects suggestionComponent={dancestyle} on:mousedown={() => {newSearchInputDance(dancestyle);searchComplete()}} />
      {/each}
    {:else}
      {#each dancestylesNew as dancestyle}
        <Objects suggestionComponent={dancestyle} on:mousedown={() => {newSearchInputDance(dancestyle);searchComplete()}} />
      {/each}
    {/if}
  {/if}
</ul>

<div class="randombutton">
    <button on:click={() => {randomDance(); typeaheadDance(); searchComplete()}}><strong>Zufälligen Tanzstil erkunden</strong></button>
</div>

<div class="typeahead">
  <input id="stadt" type="text" name="stadt" placeholder="Stadt" bind:value={citynamesSearch} on:input={typeaheadCity} on:focus={onFocusCity} on:blur={() => {onBlurCity();searchComplete()}} on:keydown={handleKeydown}>
</div>

<ul class="typeahead-object-list">
  {#if isFocusedCity === true}
    {#if citynamesSearch.length !== 0}
        {#each citynamesNew as city}
            <Objects suggestionComponent={city} on:mousedown={() => {newSearchInputCity(city);searchComplete()}} />
        {/each}
    {/if}
  {/if}
</ul>

<div class="slidecontainer">
    <p>Umkreis: {range}km</p>
    <input type="range" min="10" max="100" bind:value={range} step="1" class="slider" id="range" on:mouseup={searchComplete}>
</div>

<div id="all-dances" class="output">
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
  @media only screen and (max-width: 600px) {
    h1{
      font-size: 2em;
    }
    h2{
      font-size: 2em;
    }
  }
  .slidecontainer {
  width: 100%;
  margin-bottom: 4em;
  margin-top: 4em;
  }
  input[type=range] {
    width: 60%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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
  button {
    width: 20%;
    display: block;
    text-align: center;
    text-decoration: black;
    border: 3px solid black;
    border-radius: 0;
    margin-top: 1em;
    margin-left: auto;
    margin-right: auto;
    transition: width 0.4s ease-in-out;
    background: rgb(149,65,131,0.3);
    background: linear-gradient(90deg, rgba(149,65,131,0.3) 0%, rgba(191,166,227,0.3) 25%, rgba(125,185,241,0.3) 75%, rgba(68,109,137,0.3) 100%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  @media only screen and (max-width: 600px) {
    button{
      font-size: 10px;
    }
  }
  button:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 8px, rgba(0, 0, 0, 0.23) 0px 4px 8px;
  }
  .typeahead {
    position: relative;
  }
  input{
    margin-bottom:0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  input:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 8px, rgba(0, 0, 0, 0.23) 0px 4px 8px;
  } 
  input[type=text] {
    width: 60%;
    display: block;
    text-align: center;
    border: 3px solid black;
    border-radius: 0;
    margin-left: auto;
    margin-right: auto;
    margin-top: 4em;  
    transition: width 0.4s ease-in-out;
  }
  input[type=text]:focus {
      background-color: whitesmoke;
      outline: none;
      width: 65%;
  }
  ul {
  max-height: 219px;
  overflow: auto;
  }
  ul.typeahead-object-list {
    position: absolute;
    margin-left:17.5%;
    margin-right:17.5%;
    padding:0;
    margin-top:0;
    width:65%;
    z-index: 99;
    background-color: whitesmoke;
  }
</style>