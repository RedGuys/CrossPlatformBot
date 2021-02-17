class CommandManager {

    #commands = [];

    constructor() {
    }

    registerCommand(command,handler) {
        this.#commands.push({name:command,work:handler});
    }

    workMessage(req,res) {
        for (let command of this.#commands) {
            if(req.content.startsWith(command.name)) {
                command.work(req,res);
            }
        }
    }
}

module.exports = CommandManager;