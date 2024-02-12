import Player1 from "./player1.js";
import Player2 from "./player2.js";
import Weapon from "./weapon.js";
import Eye from "./eye.js";
import Input from "./input.js";

export default class Game {
    constructor(gameWidth ,gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.weapon1 = new Weapon();
        this.weapon2 = new Weapon();
        this.eye1 = new Eye();
        this.eye2 = new Eye();
        this.player1 = new Player1(this.eye1, this.weapon1, this.gameWidth, this.gameHeight);
        this.player2 = new Player2(this.eye2, this.weapon2, this.gameWidth, this.gameHeight);
        this.input = new Input(this.player1, this.player2);
    }
    draw(ctx) {
        this.player1.draw(ctx);
        this.player2.draw(ctx);
    }
    update() {
        this.player1.update();
        this.player2.update();
    }
}