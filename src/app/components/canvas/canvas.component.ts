import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators'
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements AfterViewInit {
  @Input() public canvasId: string;
  @Input() public width = 400;
  @Input() public height = 400;

  @ViewChild('canvas') public canvas: ElementRef;

  private ctx: CanvasRenderingContext2D;
  constructor() { }

  ngAfterViewInit() {
    console.log("canvas", this.canvas);
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');
    console.log("canvasEl", canvasEl);

    // set the width and height
    canvasEl.width = this.width;
    canvasEl.height = this.height;


    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    ////DA QUI IN GIù è una demo per sperimentare/////
    //////////////////////////////////////////////////
    //////////////////////////////////////////////////
    // set some default properties about the line
    this.ctx.lineWidth = 3;
    this.ctx.lineCap = 'round';
    this.ctx.strokeStyle = '#000';

    // we'll implement this method to start capturing mouse events
    this.captureEvents(canvasEl);
  }

  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
      .pipe(
        switchMap((e) => {
          // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event    
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();

        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };

        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };

        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number, y: number },
    currentPos: { x: number, y: number }
  ) {
    // incase the context is not set
    if (!this.ctx) { return; }

    // start our drawing path
    this.ctx.beginPath();

    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.ctx.moveTo(prevPos.x, prevPos.y); // from

      // draws a line from the start pos until the current position
      this.ctx.lineTo(currentPos.x, currentPos.y);

      // strokes the current path with the styles we set earlier
      this.ctx.stroke();
    }
  }
}
