// Imports of external Modules
import {
    GitRequestConfig,
    getCurrentFileContent,
    updateFileContent
} from "https://deno.land/x/git_hub_file_requests@v0.1.2/mod.ts";
import {
    DanceEvent
} from "./Event.ts";


// Constants and Parameter
const GitHub = new GitRequestConfig("ValentinHae", "DancePlanner", "Events.json")

let content = '{"id": "124124124","title": "FOLK FEST CUBA SI","imageName": "Dancing-Bachata, Salsa, Merengue-in-Ukraine-Kyiv-on-2020-11-20-at-3pm-1595276066817.jpg","dances": "Bachata, Salsa, Merengue","countryCode": "Germany","city": "Berlin","street": "n.a.","housenumber": "n.a.","startDate": "2022-01-30","startTime": "2022-01-21","link": "DancePlanner","lat": 50.45466,"lon": 30.5238}'

async function run() {
    let response = await updateFileContent(GitHub,content) 
    console.log(response)
};

run()