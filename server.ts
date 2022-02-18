import {Application, send} from 'https://deno.land/x/oak/mod.ts';

import * as flags from 'https://deno.land/std/flags/mod.ts';

const {args, exit} = Deno;

const DEFAULT_PORT = 8000;

const argPort = flags.parse(args).port;

const port = argPort ? Number(argPort) : DEFAULT_PORT;

if (isNaN(port)){
    console.log("This is not port number");
    exit(1);
};

const app = new Application();

app.use(async (context) => {
  await send(context, context.request.url.pathname, {
    root: `${Deno.cwd()}/DancePlanner/public`,
    index: "index.html",
  });
});
await app.listen({port: port});