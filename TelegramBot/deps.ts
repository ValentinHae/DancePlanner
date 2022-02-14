// external dependencies
// Grammy-Module @grammyjs
export {
    Bot,
    Context,
}from "https://deno.land/x/grammy/mod.ts";
export type {
    SessionFlavor
}from "https://deno.land/x/grammy/mod.ts";

// GitHub-File-Request-Module @tkister
export {
    GitRequestConfig,
}from "https://deno.land/x/git_hub_file_requests/mod.ts";

// Load Enviromental-Variable-Libary@pietvanzoen
export {
    config
}from 'https://deno.land/x/dotenv/mod.ts';

if (import.meta.main){
    console.log("Loaded")
}else{
    console.log("Imported")
}