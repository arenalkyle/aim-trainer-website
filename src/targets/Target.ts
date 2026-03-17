class Target {
    x: number;
    y: number;
    radius: number;
    dx: number;
    dy: number;
    dRadius: number;

    constructor(x: number, y: number, radius?: number, dx?: number, dy?: number, dRadius?: number) {
        this.x = x;
        this.y = y;
        this.radius = radius || 32;
        this.dx = dx || 0;
        this.dy = dy || 0;
        this.dRadius = dRadius || 0;
    }

    public attemptHit(x: number, y: number): boolean {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2)) <= this.radius;
    }

    public update(): void {
        this.x += this.dx;
        this.y += this.dy;
        this.radius += this.dRadius;
    }

    public moveLeft(dx?: number): void {
        this.dx = dx || -1;
    }

    public moveRight(dx?: number): void {
        this.dx = dx || 1;
    }

    public moveUp(dy?: number): void {
        this.dy = dy || 1;
    }

    public moveDown(dy?: number): void {
        this.dy = dy || -1;
    }

    public stopMoving(): void {
        this.dx = 0;
        this.dy = 0;
    }

    public shrink(dRadius?: number): void {
        this.dRadius = dRadius || -1;
    }
}