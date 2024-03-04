const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const { TOKEN } = require('./auth');
const { welcome_message, know_more, join_us_message, help_collaborate_message } = require('./messages');
const { joining_form, help_form } = require('./weblinks');


const bot = new Telegraf(TOKEN);
bot.start((ctx) => {
    ctx.replyWithMarkdownV2(welcome_message, {
        reply_markup: {
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
                        callback_data: "help_collaboarate"
                    }
                ]
            ]
        }
    })
});

bot.action("know_more", (ctx) => {
    ctx.replyWithMarkdownV2(know_more);
});

bot.action("join", (ctx) => {
    ctx.replyWithMarkdownV2(join_us_message, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Click here to open Joining Form",
                        web_app: { url: joining_form }
                    }
                ]
            ]
        }
    })
});

bot.action("help_collaboarate", (ctx) => {
    ctx.replyWithMarkdownV2(help_collaborate_message, {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Click here to open Help Us Form",
                        web_app: { url: help_form }
                    }
                ]
            ]
        }
    })
});

bot.action("contact", (ctx) => {
    ctx.reply("You can mail us at edignitengo@gmail.com or contact us at 7984844099")
});


bot.launch();