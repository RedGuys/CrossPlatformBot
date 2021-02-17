class ModuleManager {

    #Bot;
    #Modules = [];

    constructor(bot) {
        this.#Bot = bot;
    }

    registerModule(module) {
        module.registerModuleManager(this);
        this.#Modules.push(module);
    }

    workMessage(req,res) {
        this.#Bot.workMessage(req,res);
    }
}

module.exports = ModuleManager;