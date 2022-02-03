import{ GitRequestConfig, getCurrentFileContent, updateFileContent} from "https://deno.land/x/git_hub_file_requests@v0.1.2/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";


const GitHub = new GitRequestConfig("ValentinHae", "DancePlanner", "Events.json")
let content = '[{"test":"test"}, "test2":3]'

async function run() {
    let x = await getCurrentFileContent(GitHub)
    let y = await updateFileContent(GitHub, content)
    console.log(`Content in File: ${x}\nStatusCode of Rest-Call: ${y}`)
}
run()