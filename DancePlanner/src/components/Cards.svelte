<script>
    import Card from "@/components/Cardcreate.svelte"
    import {dancestyleSearchStore, citynamesSearchStore, rangeStore} from "./store.js"

    let url = "https://raw.githubusercontent.com/ValentinHae/DancePlanner/main/Events.json";

    let events_json_promise = fetch(url)
        .then(res => res.json())
        .then((out) => {
            console.log('fetched json from ' + url);
            return out
        })
        .catch(err => { throw err });
    
    function searchEvents(json_promise, style_filter, city_filter) {
        console.log('Searching for: ' + style_filter + ' in ' +city_filter)
        return json_promise.then((events_json) => {
            let citynames = [];
            for (const cities of events_json) {
                citynames.push(cities.city)
            }
            
            if (style_filter == 'All Dance Styles') 
                style_filter = '';
            var data_filtered = events_json.filter( element => element.dances.includes(style_filter) && element.city.includes(city_filter))
            console.log('Found events: ' + data_filtered)
            return data_filtered
        })  
    }
    
</script>
{#await searchEvents(events_json_promise, $dancestyleSearchStore, $citynamesSearchStore)}
        <p>Waiting</p>        
    {:then events}
        {#each events as {title, dances ,lon ,lat, city, street, housenumber, startDate, startTime}}
            <Card title={title} dances={dances} lon={lon} lat={lat} city={city} street={street} housenumber={housenumber} date={startDate} time={startTime}/>
        {/each}
    {:catch error}
        <p>FAIL {error.message}</p>
{/await}