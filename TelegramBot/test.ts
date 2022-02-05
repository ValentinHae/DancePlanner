import { Bot, session, Context, NextFunction, Composer }from "https://deno.land/x/grammy/mod.ts";
const bot = new Bot("5036428272:AAHFhqKICq7VNpz-ZUX516s5HUGS40lJ_3s");
const composer = new Composer();

bot.command("start", (ctx) => ctx.reply("Started!"));
bot.command("help", (ctx) => ctx.reply("Help text"));
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
  // log difference
  console.log(`Response time: ${after - before} ms`);
}
composer.use(responseTime);
bot.use(composer);
bot.on(":text", (ctx) => ctx.reply("Text!")); // (*)
bot.on(":photo", (ctx) => ctx.reply("Photo!"));

bot.start();