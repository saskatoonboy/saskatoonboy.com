class Drawable {
    constructor(x, y, w, h) {
        this.pos = createVector(x, y);
        this.width = w;
        this.height = h;
        this.visible = true;
    }

    display() {
        if (this.visible) {
            rect(this.pos.x, this.pos.y, this.width, this.height);
        }
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
}

class Image extends Drawable {
    constructor(x, y, img) {
        if (img === undefined) {
            super(x, y, 0, 0);
        } else {
            super(x, y, img.width, img.height);
        }
        this.visible = true;
        this.image = img;
    }

    display() {
        if (this.image !== undefined) {
            print(this.image);
            if (this.width = 0) {
                this.width = this.image.width;
                this.height = this.image.height;
            }
            image(this.image, this.pos.x, this.pos.y);
        }
    }
}

class TextBox extends Drawable {
    constructor(x, y, w, h) {
        super(x, y, w, h);
    }
}