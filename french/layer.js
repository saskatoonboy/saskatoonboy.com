
class Layer {
    constructor(x, y, width, height, bgColor) {
        this.drawables = [];
        this.background = bgColor;
        this.pos = createVector(x, y);
        this.height = height;
        this.width = width;
        this.visible = true;
    }

    newImage() { 
        this.drawables.push();
    }

    newTextBox() {
        this.drawables.push();
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }

    toggleHidden() {
        this.visible = !this.visible;
    }

    isHidden() {
        return this.visible;
    }

    display() {
        if (this.visible) {
            fill(this.background);
            rect(this.pos.x, this.pos.y, this.width, this.height);
            for (let drawable of drawables) {
                drawable.display();
            }
        }
    }
}
