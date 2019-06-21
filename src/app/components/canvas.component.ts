import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
// import { Square } from '../canvas/square'

@Component({
    selector: 'app-canvas',
    template: `
    <div class="has-text-centered">
        <canvas #canvas  width="600" height="300"></canvas>
        <button class="button is-primary is-fullwidth" *ngIf="addBtn" (click)="play()">Play</button>   
    </div>
  `,
    styles: ['canvas { border-style: solid }']
})
export class AppCanvasComponent implements OnInit {
    @Input() public classCanvas;
    @Input() public addBtn;


    @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;
    ctx: CanvasRenderingContext2D;
    canvasWidth: number;
    canvasHeight: number;
    raf = 0;
    stopAnimation: boolean = false;
    // squares: Square[] = [];
    square;

    constructor() { }

    ngOnInit() {
        this.ctx = this.canvas.nativeElement.getContext('2d');
        this.square = new this.classCanvas(this.ctx);
        console.log(this.addBtn);
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
        this.square.start();
        window.requestAnimationFrame(() => this.loop());
    }

    play() {
        this.square = new this.classCanvas(this.ctx);
        // this.square.reset();
        this.start();
    }



}