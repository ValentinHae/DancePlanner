// External Imports
import {
    Bot,
    Context,
    GitRequestConfig,
    SessionFlavor,
    config,
} from "./deps.ts";

// Internal Imports
import {
    DanceEvent
} from "./Event.ts";
import {
    updateContent
} from "./GitTransfer.ts";


// Function to Start TypeScript-Telegram-Bot
export default async function run(githubUsername: string, githubRepository: string, githubFilePath: string) {
    // Get Enviromental-Variables as CONST
    // Get the Telegram-Bot-Token
    const ENV: any = config();
    const TOKEN: string = ENV.TELEGRAM_TOKEN as string;
    console.log(TOKEN);

    // Create the GitHub-Request-Repository
    const GITHUB: GitRequestConfig = new GitRequestConfig(githubUsername, githubRepository, githubFilePath);
    console.log(GITHUB);

    // Setting Context of the Session
    type MyContext = Context & SessionFlavor < DanceEvent > ;
    // create new Bot-Instance from the Grammy-Framework
    const BOT = new Bot < MyContext > (TOKEN);

    // Definition of Global Variables
    let currentQuestionId: number
    let buffer = new Array();

    // Bot -Function Definition
    // Start Command
    BOT.filter(ctx => ctx.chat?.type === 'private').command('start', async ctx => {
        await ctx.reply(
            `Hi,\nHow can I help you. Use the following commands for getting more Informationen:\n/help\n/createEvent`
        );
    });

    // Help Command
    BOT.filter(ctx => ctx.chat?.type === 'private').command('help', async ctx => {
        await ctx.reply(
            `Hi,\nI'm able to create new Danceing Events, which will be shown on our Webpage.\nIf you want to create a new Event type: \n/createEvent`
        );
    });

    // Create new Event
    BOT.filter(ctx => ctx.chat?.type === 'private').command('createEvent', async ctx => {
        await ctx.reply(
            `Perfect, could you please state the Title of the Event?`, {
                reply_markup: {
                    force_reply: true
                },
            }
        );
        currentQuestionId = ctx.msg.message_id;
    });
    // Message Recieve Validation

    // Catch errors and log them to Console
    BOT.catch(err => console.error(err));

    // Start bot! - [Run until interruped through the Cmd]
    BOT.start();
};

// Validate if Programm is imported or directly run:
if (import.meta.main){
    run("ValentinHae", "DancePlanner", "Events.json");
};