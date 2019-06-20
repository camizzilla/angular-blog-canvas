export class Square {
    private color: string = 'red';
    private x: number = 0;
    private y: number = 0;
    private w: number = 30;
    private h: number = 30;
    private step: number = 5

    constructor(private ctx: CanvasRenderingContext2D) { }

    reset() {
        this.x = 0;
    }

    moveRight() {
        this.x += this.step;
        console.log("x:::", this.x);
        this.draw();
    }

    private draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}