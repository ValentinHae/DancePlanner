// Imports
import { Bot } from "./deps.ts";
import "https://deno.land/x/dotenv/load.ts";

// Set Enviromental Variables
const TOKEN_GITHUB = Deno.env.get("GitHubToken") as string;
const TOKEN_BOT = Deno.env.get("TELEGRAM_TOKEN") as string;
console.log(`TOKEN_GITHUB: ${TOKEN_GITHUB}\nTOKEN_BOT: ${TOKEN_BOT}`);

// Create new Bot:
const bot = new Bot(TOKEN_BOT);

bot.on("text",async (ctx) => {
   const text = ctx.message?.text;

   if(text === '/start'){
        ctx.telegram.sendMessage(ctx.message.chat.id, `Hello ${ctx.state.role}`);
   }
});

// Launch the Bot:
bot.launch();