<script>
    import Card from "@/components/Cardcreate.svelte"

    let events = [
    {"title":"Rave Abend", "dances":"Rave","lon":"9.1184046","lat":"48.6643556", "city": "Steinenbronn", "street": "Vaihinger Straße", "housenumber": "22","startDate": "24.01.2022", "startTime": "8:00"},
    {"title":"Rave in the Grave","dances":"Rave","lon":"8.1184046","lat":"49.6643556", "city": "Steinenbronn", "street": "Vaihinger Straße", "housenumber": "24","startDate": "25.01.2022", "startTime": "7:00"},
    {"title":"Raving Tonight","dances":"Rave","lon":"6","lat":"47.6643556", "city": "Steinenbronn", "street": "Vaihinger Straße", "housenumber": "26","startDate": "26.01.2022", "startTime": "9:00"}
    ]

</script>

{#each events as {title, dances ,lon ,lat, city, street, housenumber, startDate, startTime}}
    <Card title={title} dances={dances} lon={lon} lat={lat} city={city} street={street} housenumber={housenumber} date={startDate} time={startTime}/>
{/each}


