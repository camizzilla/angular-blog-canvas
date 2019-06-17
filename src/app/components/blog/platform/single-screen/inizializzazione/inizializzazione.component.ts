import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inizializzazione',
  templateUrl: './inizializzazione.component.html',
  styleUrls: ['./inizializzazione.component.scss']
})
export class InizializzazioneComponent implements AfterViewInit {

  constructor() { }

  @ViewChild('canvasFillrect') canvasFillrect: ElementRef;
  @ViewChild('canvasIntro') canvasIntro: ElementRef;

  private contextFillrect: CanvasRenderingContext2D;
  private contextIntro: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.contextFillrect = (this.canvasIntro.nativeElement as HTMLCanvasElement).getContext('2d');
    this.contextIntro = (this.canvasFillrect.nativeElement as HTMLCanvasElement).getContext('2d');
    this.canvasSize(this.canvasFillrect);
    this.canvasSize(this.canvasIntro);
    this.draw();
  }

  canvasSize(canvas: ElementRef) {
    canvas.nativeElement.width = 600;
    canvas.nativeElement.height = 400;
  }

  mainCode = `
    let canvas = document.getElementById("myCanvas");
    canvas.width = 640;
    canvas.height = 480;

    let context = canvas.getContext('2d');`;

  canvasFillCode = `
    context.fillStyle = "#ffad6a";
    context.fillRect(10, 10, 580, 380);`;

  canvasTextCode = `
    context.font = "50px Impact";
    context.fillStyle = "#6a8aff";
    context.textAlign = "center";
    context.fillText("Platform Single Screen", canvas.width / 2, canvas.height / 2);`;

  private draw() {
    this.contextFillrect.fillStyle = "#ffad6a";
    this.contextFillrect.fillRect(10, 10, 580, 380);
  };

}
