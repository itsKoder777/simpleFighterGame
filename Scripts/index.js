import Game from "./game.js";

const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext("2d");
const canvasWidth = 800;
const canvasHeight = 600;
const game = new Game(canvasWidth, canvasHeight);

function gameLoop() {
    ctx.clearRect(0, 0 ,canvasWidth, canvasHeight)
    game.draw(ctx);
    game.update();
    requestAnimationFrame(gameLoop);
}
requestAnimationFrame(gameLoop);
