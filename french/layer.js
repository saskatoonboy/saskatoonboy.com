
class Layer {
    constructor(x, y, width, height, bgColor) {
        this.drawables = [];
        this.background = bgColor;
        this.pos = createVector(x, y);
        this.height = height;
        this.width = width;
        this.visible = true;

        layers.push(this);
    }

    newImage(x, y, img) { 
        this.drawables.push(new Image(x, y, img));
    }

    newTextBox() {
        this.drawables.push(new TextBox());
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
            for (let drawable of this.drawables) {
                drawable.display();
            }
        }
    }
}
