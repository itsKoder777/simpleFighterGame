export default class Weapon {
    constructor() {
        this.image = new Image();
        this.image.src = "/Images/weapon.png";

        this.width = 50;
        this.push = {
            x: 5,
            y: 20
        }
    }
}