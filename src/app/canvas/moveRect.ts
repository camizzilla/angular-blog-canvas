export class MoveRect {
    private color: string = '#000';
    private x: number = 100;
    private w: number = 50;
    private h: number = 100;
    private y: number = 0;
    private canvasWidth: number = 0;
    private canvasHeight: number = 0;

    private step: number = 5

    constructor(private ctx: CanvasRenderingContext2D) {
        this.canvasWidth = ctx.canvas.width;
        this.canvasHeight = ctx.canvas.height;
        this.y = this.canvasHeight - this.h;
        this.init();
    }

    init() {
        this.draw();
    }

    reset() {
        this.x = 0;
    }

    start() {
        this.x += this.step;
        this.draw();
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    }

    private draw() {
        this.clear();

        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}