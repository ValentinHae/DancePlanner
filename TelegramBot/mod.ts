// Imports
import { Bot, Context, NextFunction, GitRequestConfig, getCurrentFileContent, updateFileContent } from "./deps.ts";
import "https://deno.land/x/dotenv/load.ts";

// Set Enviromental Variables
const TOKEN_GITHUB = Deno.env.get("GitHubToken") as string;
const TOKEN_BOT = Deno.env.get("TELEGRAM_TOKEN") as string;
console.log(`TOKEN_GITHUB: ${TOKEN_GITHUB}\nTOKEN_BOT: ${TOKEN_BOT}`);

// Create new Bot:
const bot = new Bot(TOKEN_BOT);

async function receiveTitle(
   ctx: Context,
   next: NextFunction, // is an alias for: () => Promise<void>
): Promise<void> {
   
}
/** Measures the response time of the bot, and logs it to `console` */
async function responseTime(
   ctx: Context,
   next: NextFunction, // is an alias for: () => Promise<void>
): Promise<void> {
   // take time before
   const before = Date.now(); // milliseconds
   // invoke downstream middleware
   await next(); // make sure to `await`!
   // take time after
   const after = Date.now(); // milliseconds
   ctx.reply(
      `Test from Middleware`
   );
   // log difference
   console.log(`Response time: ${after - before} ms`);
}
// bot.use(responseTime);
// Start-Command-Handler
bot.command("start", async (ctx) => {
   await ctx.reply(
      `Hi, ... \nHow can I help you. Use the following commands for getting more Informationen: \n/help \n/createEvent`, {
   });
});

// Help-Command-Handler
bot.command('help', (ctx) => ctx.reply(
   `I can work with the following Commands and they do the following things:\n
   /start : Start the Conversation
   /help : Get an Overview over all the Commands
   /createEvent : Create an new DanceEvent and Publish it`
));
// Create new Event:

// CreateEvent-Command-Handler
bot.command('createEvent', async (ctx, next) => {
   ctx.reply(`Perfect, could you please state the Title of the Event?`);
   bot.use(responseTime);
});

// Reply to any message Error-Message.
bot.on("message", async (ctx) => {
   // Get the chat identifier.
   const chatId = ctx.msg.chat.id;
   console.log(chatId)
   // Send the reply.
   await bot.api.sendMessage(chatId, `Sorry, I think I did not unstand what you are trying to say. \nIf you need help, please use /help.`);
 });
bot.start();
