class Song {

    constructor(name, artist, duration, x, y, pos) {
        this.name = name;
        this.artist = artist;
        this.duration = duration;
        this.x = x;
        this.y = y;
        this.pos = pos;

        this.selected = false;
    }

    draw(img) {
        textSize(40);
        text(this.name, this.x, this.y)
        textSize(20);
        text(this.artist, this.x, this.y + 40)
        text(this.duration, this.x + 120, this.y + 40)
        image(img, this.x - 120, this.y - 40, 100, 100)
        
        if (this.selected === true) {
            fill(0, 0, 255, 50);
            rect(this.x - 180, this.y - 60, 580, 150, 40)
            textSize(20);
            fill(255);
            text(this.name + " - " + this.artist, 500, 140);
            textSize(20);
            text(this.duration, 952, 710)
            image(img, 270, 165, 680, 500)

        }

    }

    setSelected(selected) {
        this.selected = selected;
    }

    getX() {
        return this.x - 60
    }

    getY() {
        return this.y - 20
    }

    getPos() { 
        return this.pos
    }
}