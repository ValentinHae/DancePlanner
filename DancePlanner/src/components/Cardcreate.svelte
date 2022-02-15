<script>
    import Map from "@/components/Maps.svelte"

    export let title, lon, lat, dances, city, street, housenumber, date, time;
</script>

<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <p id="title">
          <strong>{title}</strong>
        </p>
        <p>
          <strong>{dances}</strong>
        </p>
        <p>
          <strong>Stadt:</strong> {city}
        </p>
        <p>
          <strong>Adresse:</strong> {street} {housenumber}
        </p>
        <p>
          <strong>Datum:</strong> {date}
        </p>
        <p>
          <strong>Uhrzeit:</strong> {time}
        </p>
      </div>
      <div class="flip-card-back">
        <Map lon={lon} lat={lat} button={false}/>
      </div>
    </div>
  </div>

<style>
  .flip-card {
    transition: 0.3s;
    width: 35%;
    height: 400px;
    margin-left: 10%;
    margin-bottom: 200px;
    display:inline-block;
    background-color: transparent;
    perspective: 1000px; 
  }

  #title {
    font-size: 40px;
  }

  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }

  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }

  .flip-card-front {
    color: black;
    margin-top:auto;
    border-radius: 5px 5px 5px 5px;
    background: linear-gradient(90deg, rgba(149,65,131,0.2) 0%, rgba(191,166,227,0.2) 25%, rgba(125,185,241,0.2) 75%, rgba(68,109,137,0.2) 100%);
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }

  .flip-card-back {
    background-color: dodgerblue;
    color: white;
    transform: rotateY(180deg);
  }
</style>