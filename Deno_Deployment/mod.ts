import { webhookCallback } from "https://deno.land/x/grammy/mod.ts";
// You might modify this to the correct way to import your `Bot` object.
import BOT from "./bot.ts";
import { serve } from "https://deno.land/std/http/server.ts";

const handleUpdate = webhookCallback(BOT, "std/http");

serve(async (req) => {
  if (req.method == "POST") {
    try {
      return await handleUpdate(req);
    } catch (err) {
      console.error(err);
      return new Response();
    }
  }

  return new Response();
});