const DiscordJs = require("discord.js");
const Request = require("../common/Request");
const Response = require("../common/Response");
const Module = require("../common/Module");
const User = require("../common/User");

class Discord extends Module {

    #bot;
    #ModuleManager;

    constructor(token) {
        super();
        this.#bot = new DiscordJs.Client();
        this.#bot.on("message",(message) => {
            this.#ModuleManager.workMessage(
                new Request(message.content, new User('ds',message.author.id,message.author.username)),
                new Response(
                    async (text) => {await message.reply(text)},
                    async (photo) => {
                        await message.reply({files:photo.url});
                    }
                    ));
        });
        this.#bot.login(token);
    }

    registerModuleManager(moduleManager) {
        this.#ModuleManager = moduleManager;
    }
}

module.exports = Discord;