import {
    GitRequestConfig,
    getCurrentFileContent,
    updateFileContent
} from "https://deno.land/x/git_hub_file_requests@v0.1.2/mod.ts";
import {
    DanceEvent
} from "./Event.ts";


const GitHub = new GitRequestConfig("ValentinHae", "DancePlanner", "Events.json")
let Testcontent: Array < DanceEvent > = [{
    "id": "1625108744123",
    "title": "Luc Sanou s Introduction to African Dance",
    "dances": "African dance",
    "startDate": "2021-07-15",
    "city": "Bergen",
    "countryCode": "NO",
    "lat": 60.39299,
    "lon": 5.32415,
    "street": "",
    "housenumber": "",
    "startTime": "",
    "link": "https://www.facebook.com/events/eventId/935011744016311",
    "chatLink": "ceca"
}, {
    "id": "1625109674747",
    "title": "Tropea TANGO MARE Festival 2021 - 7#edition !",
    "dances": "Tango",
    "startDate": "2021-09-01",
    "city": "Catania",
    "countryCode": "IT",
    "lat": 37.49223,
    "lon": 15.07041,
    "street": "",
    "housenumber": "",
    "startTime": "",
    "link": "https://www.facebook.com/events/eventId/840702416353630",
    "chatLink": "3c65"
}, {
    "id": "1625109979771",
    "title": "Festival La Plata Baila Tango 7ma Edición -",
    "dances": "Disco, Tango",
    "startDate": "2022-04-13",
    "city": "La Plata",
    "countryCode": "AR",
    "lat": -34.92145,
    "lon": -57.95453,
    "street": "",
    "housenumber": "",
    "startTime": "",
    "link": "https://www.facebook.com/events/eventId/409140189973906",
    "chatLink": "82fc"
}];
let newJSON: DanceEvent = new DanceEvent("1625110734844","El Barco Hamburgo","Salsa","2021-07-17","Hamburg","DE",53.55073,9.99302,"","","","https://www.facebook.com/events/eventId/214628866370418","5807")
console.log(newJSON)
async function run() {
    let x: Array < DanceEvent > = JSON.parse(await getCurrentFileContent(GitHub));
    console.log(x);
    let y = await updateFileContent(GitHub, JSON.stringify(Testcontent));
    console.log(`Content in File: ${x}\nStatusCode of Rest-Call: ${y}`);
}
// run();

async function updateContent(newEvent:DanceEvent, GitRequestConfig:GitRequestConfig) {
    // Get current Data from the Github-File
    let data =  await JSON.parse(await getCurrentFileContent(GitRequestConfig));
    // Add new Event to the Content
    // data.push(newEvent);
    console.log(data.length)
    console.log(data)
    // Post new Data to the Github-File
    let repsonse = await updateFileContent(GitRequestConfig, JSON.stringify(data));
    console.log(`StatusCode of Rest-Call: ${data}`);
};
updateContent(newJSON, GitHub);