class Game {
    public name: string;
    public readonly gameSettings: GameSettings;

    constructor(name: string, gameSettings: GameSettings) {
        this.name = name;
        this.gameSettings = new GameSettings();
    }
}