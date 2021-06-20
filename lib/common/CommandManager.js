class CommandManager {

    _commands = [];

    constructor() {
    }

    registerCommand(command, handler) {
        this._commands.push({name: command, work: handler});
    }

    workMessage(req, res) {
        for (let command of this._commands) {
            if (req.content.startsWith(command.name)) {
                command.work(req, res);
            }
        }
    }
}

module.exports = CommandManager;