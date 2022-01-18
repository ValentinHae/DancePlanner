<script>
  let tanzstil = '';
  let stadt = '';
  let range = 50;
</script>

<h1>Tanzevents suchen</h1>
<div class="textinput">
  <input type=text id="Tanzstil" placeholder="Tanzstil" bind:value={tanzstil}>
  <input type=text id="Stadt" placeholder="Stadt" bind:value={stadt}>
</div>
<div class="slidecontainer">
  <p>Umgebung</p>
  <input type="range" min="0" max="100" bind:value={range} step="5" class="slider" id="range">
  <p>Umkreis: {range}km</p>
  <p>{tanzstil} & {stadt}</p>
</div>
<div class=output>
  <hr>
  <p>Karten</p>
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
  #Tanzstil{
    margin-top:4em;  
    margin-bottom: 4em;
  }
  #Stadt{
    margin-bottom:1.5em;
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
  input:focus::placeholder {
  color: transparent;
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