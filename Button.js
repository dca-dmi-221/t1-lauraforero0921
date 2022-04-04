class Button { 
    constructor(x, y, text, xPos, yPos, radius) { 
        this.x = x;
        this.y = y;
        this.text = text;
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius
    }

    draw() { 
        fill(255, 0, 0);
        rect(this.x, this.y, this.radius, this.radius, 30)
        fill(255);
        textSize(20);
        text(this.text, this.x + this.xPos, this.y + this.yPos);
    }

    getX() { 
        return this.x + (this.radius/2)
    }

    getY() {
        return this.y + (this.radius/2)
    }
}