class ModuleManager {

    _Bot;
    _Modules = [];

    constructor(bot) {
        this._Bot = bot;
    }

    registerModule(module) {
        module.registerModuleManager(this);
        this._Modules.push(module);
    }

    workMessage(req, res) {
        this._Bot.workMessage(req, res);
    }
}

module.exports = ModuleManager;