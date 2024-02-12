export default class Input{
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;

        //DOWN
        //player1
        document.addEventListener("keydown", (event) => {
            switch(event.key){
                case "d":
                    this.player1.moveRight();
                    break;

                case "a":
                    this.player1.moveLeft();
                    break;

                case "w":
                    this.player1.jump();
                    break;

                case "s":
                    this.player1.attack();
            }
        })
        //player2
        document.addEventListener("keydown", (event) => {
            switch(event.key) {
                case "ArrowRight":
                    this.player2.moveRight();
                    break;

                case "ArrowLeft":
                    this.player2.moveLeft();
                    break;

                case "ArrowUp":
                    this.player2.jump();
                    break;

                case "ArrowDown":
                    this.player2.attack();
            }
        })
        //UP
        //player1
        document.addEventListener("keyup", (event) => {
            switch(event.key){
                case "d":
                    if(this.player1.change.x > 0) this.player1.stop();
                    break;

                case "a":
                    if(this.player1.change.x < 0) this.player1.stop();
                    break;

                case "s":
                    this.player1.rest();
            }
        })
        //player2
        document.addEventListener("keyup", (event) => {
            switch(event.key) {
                case "ArrowRight":
                    if(this.player2.change.x > 0) this.player2.stop();
                    break;

                case "ArrowLeft":
                    if(this.player2.change.x < 0) this.player2.stop();
                    break;

                case "ArrowDown":
                    this.player2.rest();
            }
        })
    }
}