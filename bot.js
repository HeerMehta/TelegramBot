const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const { TOKEN } = require('./auth');
const { welcome_message, know_more } = require('./messages');


const bot = new Telegraf(TOKEN);
bot.start((ctx) => {
    // console.log(JSON.stringify(ctx));
    ctx.replyWithMarkdownV2(welcome_message, {reply_markup: {
        inline_keyboard: [
            [
                {
                    text: "Know more about us",
                    callback_data: "know_more",
                }
            ],
            [
                {
                    text: "Join Us",
                    callback_data: "join",
                },
                {
                    text: "Contact Us",
                    callback_data: "contact",
                }
            ],
            [
                {
                    text: "Help/ Collaborate with us",
                    callback_data: "help_collaborate",
                }
            ]
        ]
    }})
});

bot.action("know_more", (ctx) => {
    ctx.replyWithMarkdownV2(know_more);
});

bot.action("join", (ctx) => {
    
});

bot.on(message('contact'), (ctx) => {
    ctx.reply("contact recieved")
})

bot.launch();