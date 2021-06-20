const CommandManager = require("./CommandManager");
const ModuleManager = require("./ModuleManager");

class Bot {

    _prefix;
    _commandManager;
    _moduleManager;

    constructor(prefix = "/") {
        this._prefix = prefix;
        this._moduleManager = new ModuleManager(this);
        this._commandManager = new CommandManager();
    }

    getCommandManager() {
        return this._commandManager;
    }

    registerModule(module) {
        this._moduleManager.registerModule(module);
    }

    workMessage(req, res) {
        if (req.content.startsWith(this._prefix)) {
            req.content = req.content.substring(this._prefix.length);
            this._commandManager.workMessage(req, res);
        }
    }
}

module.exports = Bot;
