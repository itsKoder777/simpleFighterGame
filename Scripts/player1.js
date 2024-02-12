export default class Player1 {
    constructor(eye, weapon, gameWidth, gameHeight){
        this.gameHeight = gameHeight;
        this.gameWidth = gameWidth;

        this.facingRight = true;
        this.eye = eye
        this.weapon = weapon

        this.image = new Image();
        this.image.src = "/Images/character1.png";
        this.imageWidth = 56;
        this.imageHeight = 105;

        this.position = {
            x: 0,
            y: 500
        }
        this.change = {
            x: 0,
            y: 0
        }
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.position.x, this.position.y);
        ctx.drawImage(this.eye.image, this.position.x + this.eye.push.x, this.position.y + this.eye.push.y)
        ctx.drawImage(this.weapon.image, this.position.x + this.weapon.push.x, this.position.y + this.weapon.push.y);
    }
    update() {
        this.position.x += this.change.x;
        this.position.y += this.change.y;

        if(this.position.y < 0) this.position.y = 0;
        if(this.position.y + this.imageHeight > this.gameHeight) 
            this.position.y = this.gameHeight - this.imageHeight;

        if(this.position.x < 0) this.position.x = 0;
        if(this.position.x + this.imageWidth > this.gameWidth) 
            this.position.x = this.gameWidth - this.imageWidth;
    }
    moveRight() {
        if (!this.facingRight) {
            this.eye.push.x = 25;
            this.weapon.push.x = 5;
            this.facingRight = true;
        }
        this.change.x = 5;
    }
    moveLeft() {
        if (this.facingRight) {
            this.eye.push.x = 0;
            this.weapon.push.x = 0;
            this.facingRight = false;
        }
        this.change.x = -5;
    }
    jump() {
        this.change.y = -10;
        setTimeout(() => {
            this.change.y = 10;
        }, 200)
    }
    stop() {
        this.change.x = 0;
    }
    attack() {
        if(this.facingRight){
            this.weapon.push.x += this.weapon.width / 2;
            setTimeout(() => {
                this.weapon.push.x -= this.weapon.width / 2
            }, 50)
        }

        if(!this.facingRight){
            this.weapon.push.x -= this.weapon.width / 2;
            setTimeout(() => {
                this.weapon.push.x += this.weapon.width / 2
            }, 50)
        }
    }
}