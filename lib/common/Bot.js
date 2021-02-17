const CommandManager = require("./CommandManager");
const ModuleManager = require("./ModuleManager");

class Bot {

    #prefix;
    #commandManager = new CommandManager();
    #moduleManager;

    constructor(prefix = "/") {
        this.#prefix = prefix;
        this.#moduleManager = new ModuleManager(this);
    }

    getCommandManager() {
        return this.#commandManager;
    }

    registerModule(module) {
        this.#moduleManager.registerModule(module);
    }

    workMessage(req,res) {
        if(req.content.startsWith(this.#prefix)) {
            req.content = req.content.substring(this.#prefix.length);
            this.#commandManager.workMessage(req, res);
        }
    }
}

module.exports = Bot;
