class User {
    module;
    id;
    username;
    first_name;
    last_name;

    constructor(module, id, username, first_name, last_name) {
        this.module = module;
        this.id = id;
        this.username = username;
        this.first_name = first_name
        this.last_name = last_name;
    }
}

module.exports = User;