<script>
    import Card from "@/components/Cardcreate.svelte"

    let events = [
    {"title":"Rave Abend", "dances":"Rave","long":"9.1184046","lat":"48.6643556", "city": "Steinenbronn", "street": "Vaihinger Straße", "housenumber": "22","startDate": "24.01.2022", "startTime": "8:00","imageSrc" : "Banner.png"},
    {"title":"Rave in the Grave","dances":"Rave","long":"8.1184046","lat":"49.6643556", "city": "Steinenbronn", "street": "Vaihinger Straße", "housenumber": "24","startDate": "25.01.2022", "startTime": "7:00","imageSrc" : "the-event.jpg"},
    {"title":"Raving Tonight","dances":"Rave","long":"6","lat":"47.6643556", "city": "Steinenbronn", "street": "Vaihinger Straße", "housenumber": "26","startDate": "26.01.2022", "startTime": "9:00","imageSrc" : "Banner.png"}
    ]

</script>

{#each events as {title,dances,long,lat, city, street, housenumber, startDate, startTime, imageSrc}}
    <Card title={title} dances={dances} long={long} lat={lat} city={city} street={street} housenumber={housenumber} date={startDate} time={startTime} imageSrc={imageSrc}/>
{/each}


