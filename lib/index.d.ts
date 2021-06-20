//Main

export class Bot {
    constructor(prefix?: string);

    getCommandManager(): CommandManager;

    registerModule(module: Module);

    workMessage(req: Request, res: Response)
}

export class Discord extends Module {
    constructor(token: string);

    registerModuleManager(moduleManager: ModuleManager)
}

export class Telegram extends Module {
    constructor(token: string);

    registerModuleManager(moduleManager: ModuleManager);
}

export class VK extends Module {
    constructor(token: string);

    registerModuleManager(moduleManager: ModuleManager);

    getUser(module: VK, ctx): User;

    sendPhotosByURL(module: VK, ctx, photos: string[]);

    uploadPhoto(module: VK, filePath: string, peerId: number): string[];
}

export class Request {
    protected constructor(content: string, user: User, chat: Chat);

    get content(): string;

    set content(value: string);

    get user(): User;

    set user(value: User);

    get chat(): Chat;

    set chat(value: Chat);
}

export class Response {
    protected constructor(reply: (text: string) => {}, replyPhoto: (photos: PhotoResolvable | PhotoResolvable[]) => {});

    reply(text: string);

    replyPhoto(photos: PhotoResolvable | PhotoResolvable[]);
}

export class Utils {
    static downloadPhoto(url: string): string;
}

//Structures

export class Chat {
    protected constructor(module: string, id: number);

    get module(): string;

    get id(): number;
}

export class Module {
    registerModuleManager(moduleManager: ModuleManager)
}

export class PhotoResolvable extends String {
}

export class User {
    protected constructor(module: string, id: number, username: string, first_name: string, last_name: string);

    get module(): string;

    get id(): number;

    get username(): string;

    get first_name(): string;

    get last_name(): string;
}

//Managers

export class CommandManager {
    protected constructor();

    registerCommand(command: string, handler: (req: Request, res: Response) => {});

    workMessage(req: Request, res: Response);
}

export class ModuleManager {
    constructor(bot: Bot);

    registerModule(module: Module);

    workMessage(req: Request, res: Response);
}