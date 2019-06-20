import { Component, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { Square } from '../canvas/square'

@Component({
    selector: 'app-canvas',
    template: `
    <div class="has-text-centered">
        <canvas #canvas  width="600" height="300"></canvas>
        <button class="button is-primary is-fullwidth" (click)="play()">Play</button>   
    </div>
  `,
    styles: ['canvas { border-style: solid }']
})
export class AppCanvasComponent implements OnInit {
    @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
    ctx: CanvasRenderingContext2D;
    canvasWidth: number;
    canvasHeight: number;
    raf = 0;
    stopAnimation: boolean = false;
    // squares: Square[] = [];
    square: Square;

    constructor() { }

    ngOnInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.canvasWidth = this.canvas.nativeElement.width;
        this.canvasHeight = this.canvas.nativeElement.height;
    }

    start() {
        if (this.raf) {
            window.cancelAnimationFrame(this.raf);
            this.stopAnimation = true;
        }
        this.raf = window.requestAnimationFrame(() => this.loop());
    }

    loop() {
        if (this.stopAnimation) {
            this.stopAnimation = false;
            return;
        }
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.square.moveRight();
        window.requestAnimationFrame(() => this.loop());
    }

    play() {
        this.square = new Square(this.ctx);
        // this.square.reset();
        this.start();
    }



}