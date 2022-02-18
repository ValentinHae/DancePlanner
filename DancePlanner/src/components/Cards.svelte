<script>
    import Card from "@/components/Cardcreate.svelte"
    import { dancestyleSearchStore, citynamesSearchStore, rangeStore } from "./store.js"
    import { DistanceCalculator } from "https://deno.land/x/distancecalculator/distance-calculator.ts"
    import { citylist } from "./Data.svelte"
    
    let url = "https://raw.githubusercontent.com/ValentinHae/DancePlanner/main/Events.json";

    /** fetch events json from github */
    let events_json_promise = fetch(url)
        .then(res => res.json())
        .then((out) => {
            //fetch and json promise resolved 
            //console.log('Fetched events from ' + url);
            return out  //returns promise for events json
        })
        .catch(err => { throw err });
    
    /** filter events json with style and city*/
    function searchEvents(json_promise, style_filter, city_filter, range_filter) {
        // console.log('Searching for: ' + style_filter + ' in ' + city_filter + ' with a range of ' + range_filter)
        let city;
        
        return json_promise.then((events_json) => {
            if (style_filter == 'All Dance Styles') 
                style_filter = '';
            city = citylist.find((city) => city.name.toLocaleLowerCase() === city_filter.toLocaleLowerCase());
            let data_filtered = events_json.filter(filterDances(city_filter, style_filter, range_filter, city))
            //console.log('Found events: ' + data_filtered)
            
            // return data_filtered
            return data_filtered
        })
    }

    function filterDances(city_filter, style_filter, range_filter, city){
        return function(element){
            let isMatch = true;
            if (!range_filter) range_filter = 55;
            if (!style_filter) style_filter = '';   
            if(city_filter)
            {
                //console.log('applied city filter')
                isMatch &&= range_filter >= DistanceCalculator.getDistanceInKilometers(element.lat, element.lon, city.lat, city.lon);   //search in area around city
                isMatch ||= element.city.toLowerCase().includes(city_filter.toLowerCase()); //include also events with same city name even they are outside the area
                //console.log('distance: ',DistanceCalculator.getDistanceInKilometers(element.lat, element.lon, city.lat, city.lon))
                //console.log(element.lat, city.lat, element.lon, city.lon)
            }
            if(style_filter)
            {
                //console.log('applied style_filter')
                isMatch &&= element.dances.toLowerCase().includes(style_filter.toLowerCase())
            }
            return isMatch;
        }
    }
    
</script>
{#await searchEvents(events_json_promise, $dancestyleSearchStore, $citynamesSearchStore, $rangeStore)}
        <p>Waiting</p>        
    {:then events}
        {#each events as {title, dances ,lon ,lat, city, street, housenumber, startDate, startTime}}
            <Card title={title} dances={dances} lon={lon} lat={lat} city={city} street={street} housenumber={housenumber} date={startDate} time={startTime}/>
        {/each}
    {:catch error}
        <p>FAIL {error.message}</p>
{/await}