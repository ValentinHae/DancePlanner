<script>
  import Objects from "./Suggestions.svelte"

  let dancestyles = [
    'African dance',
    'All Dance Styles',
    'Afro House',
    'Bachata',
    'Ballroom',
    'Balboa',
    'Shag',
    'Balkan Disco',
    'Ballett',
    'Blues',
    'Bellydance',
    'Bolero',
    'Bollywood',
    'Boogie Woogie',
    'Bossa Nova',
    'Bourlesque',
    'Zouk',
    'Breakdance',
    'Burlesque',
    'ChaChaCha',
    'Changa',
    'Charleston',
    'Cheloveki',
    'Contemporary',
    'Contact',
    'Country Dance',
    'Cumbia',
    'Pogo',
    'Poledance',
    'Dancehall',
    'Dirty Dancing',
    'Disco',
    'Discofox',
    'Ecstatic',
    'Ententanz',
    'Flamenco',
    'Folk',
    'Forró',
    'Fox',
    'Funk',
    'Guaracha',
    'Go Go Dance',
    'Happy Feet',
    'Hawaiian',
    'Hula',
    'Hip Hop',
    'Hoop Dance',
    'House',
    'Indian',
    'Indie',
    'Inner Dance',
    'Irish Dance',
    'Jazz Dance',
    'Jive',
    'Kizomba',
    'Lambada',
    'Lindy Hop',
    'Linedance',
    'Mambo',
    'Merengue',
    'No Dance Provided',
    'Omambo',
    'Oriental Dance',
    'Q dance',
    'ROCK\'N\'ROLL',
    'Rave',
    'Reggae',
    'Reggaeton',
    'Rock N Roll',
    'Rock Step',
    'Rueda',
    'Rumba',
    'Salsa',
    'Samba',
    'Sambo',
    'Semba',
    'Son',
    'Shim Sham',
    'Shuffle',
    'Square',
    'Streetdance',
    'Sway',
    'Swing',
    'Table Dance',
    'Tango',
    'Tap',
    'Techno',
    'Timba',
    'Trance',
    'Twerk',
    'Twist',
    'Urban Kiz',
    'Quickstep',
    'Waltz',
    'Wiener Walzer',
    'Workshop Latino',
    'Yogadance',
    'Zumba',
    ]


	let dancestylesNew = [];
	let dancestylesSearch = "";
  let isFocused = false;

  const onFocus = () => isFocused=true;
  const onBlur = () => isFocused=false;

  const typeahead = () => {
      let dancestylesNewIncludes = dancestyles.filter(dancestyles => dancestyles.toLowerCase().includes(dancestylesSearch.toLowerCase()) )
      let dancestylesNewStartWith = dancestyles.filter(dancestyles => dancestyles.toLowerCase().startsWith(dancestylesSearch.toLowerCase()) )
      dancestylesNew = dancestylesNewStartWith.sort().concat(dancestylesNewIncludes.sort())
      dancestylesNew = [...new Set(dancestylesNew)]
  }

  const newSearchInput = (dancestyle) => {
    dancestylesSearch = dancestyle
  }

  const randomDance = () => {
    let randomDancestyle = dancestyles[Math.floor(Math.random()*dancestyles.length)]
    dancestylesSearch = randomDancestyle
  }

</script>

<form autocomplete="off" action="/action_page.php">
  <div class="typeahead">
    <input id="dancestyle" type="text" name="dancestyle" placeholder="Tanzstil" bind:value={dancestylesSearch} on:input={typeahead} on:focus={onFocus} on:blur={onBlur}>
  </div>
  <ul class="typeahead-object-list" >
    {#if isFocused === true}
      {#if dancestylesSearch.length === 0}
        {#each dancestyles as dancestyle}
          <Objects suggestionComponent={dancestyle} on:mousedown={() => newSearchInput(dancestyle)} />
        {/each}
      {:else}
        {#each dancestylesNew as dancestyle}
          <Objects suggestionComponent={dancestyle} on:mousedown={() => newSearchInput(dancestyle)} />
        {/each}
      {/if}
    {/if}
  </ul>
</form>
<div class="randombutton">
  <button on:click={() => {randomDance(); typeahead();}}><strong>Zufälligen Tanzstil erkunden</strong></button>
</div>
<style>
  .typeahead {
    position: relative;
  }
  input{
    margin-top: 4em;
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
    transition: width 0.4s ease-in-out;
  }
  input[type=text]:focus {
      background-color: whitesmoke;
      outline: none;
      width: 65%;
    }
  ul {
    max-height: 215px;
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
  button:hover{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 4px 8px, rgba(0, 0, 0, 0.23) 0px 4px 8px;
  }
</style>