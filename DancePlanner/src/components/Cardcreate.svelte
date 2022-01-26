<script>
    import Map from "@/components/Maps.svelte"

    export let title, long, lat, dances, city, street, housenumber, date, time, imageSrc;
</script>

<div class="flip-card">
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <img src={imageSrc} alt="Eventimage" >
        <p>
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
        <Map long={long} lat={lat} button={false}/>
      </div>
    </div>
  </div>


<style>
img {
  max-height:100px;
}
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
  background-color: white;
  color: black;
}

.flip-card-back {
  background-color: dodgerblue;
  color: white;
  transform: rotateY(180deg);
}
</style>