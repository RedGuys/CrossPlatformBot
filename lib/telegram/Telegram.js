const Telegraf = require("telegraf").Telegraf;
const Request = require("../common/Request");
const Response = require("../common/Response");
const Module = require("../common/Module");

class Telegram extends Module {

    #bot;
    #ModuleManager;

    constructor(token) {
        super();
        this.#bot = new Telegraf(token);
        this.#bot.on("text",(ctx) => {
            this.#ModuleManager.workMessage(new Request(ctx.message.text),new Response(async (text) => {await ctx.reply(text)}));
        });
        this.#bot.startPolling();
    }

    registerModuleManager(moduleManager) {
        this.#ModuleManager = moduleManager;
    }
}

module.exports = Telegram;