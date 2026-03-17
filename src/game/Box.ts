class Box {
    public x: number;
    public y: number;
    public width: number;
    public height: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    public containsPoint(px: number, py: number): boolean {
        return px >= this.x &&
            px <= this.x + this.width &&
            py >= this.y &&
            py <= this.y + this.height;
    }

    public containsCircle(cx: number, cy: number, radius: number): boolean {
        return cx - radius >= this.x && // left edge
            cx + radius <= this.x + this.width && // right edge
            cy - radius >= this.y && // top edge
            cy + radius <= this.y + this.height; // bottom edge
    }

    public isOutOfBounds(px: number, py: number): boolean {
        return px < this.x || px > this.x + this.width || py < this.y || py > this.y + this.height;
    }

}