import {
    GitRequestConfig,
    getCurrentFileContent,
    updateFileContent
} from "https://deno.land/x/git_hub_file_requests@v0.1.2/mod.ts";
import {
    DanceEvent
} from "./Event.ts";

 export async function updateContent(newEvent:DanceEvent, GitRequestConfig:GitRequestConfig) {
    // Get current Data from the Github-File
    let data =  await JSON.parse(await getCurrentFileContent(GitRequestConfig));
    // Add new Event to the Content
    data.push(newEvent);
    // Post new Data to the Github-File
    let repsonse = await updateFileContent(GitRequestConfig, JSON.stringify(data));
    return repsonse
};