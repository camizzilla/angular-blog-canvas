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
  @ViewChild('canvasIntroFinal') canvasIntroFinal: ElementRef;

  private contextFillrect: CanvasRenderingContext2D;
  private contextIntro: CanvasRenderingContext2D;
  private contextIntroFinal: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.contextFillrect = (this.canvasFillrect.nativeElement as HTMLCanvasElement).getContext('2d');
    this.contextIntro = (this.canvasIntro.nativeElement as HTMLCanvasElement).getContext('2d');
    this.contextIntroFinal = (this.canvasIntroFinal.nativeElement as HTMLCanvasElement).getContext('2d');
    this.canvasSize(this.canvasFillrect);
    this.canvasSize(this.canvasIntro);
    this.canvasSize(this.canvasIntroFinal);
    this.drawFillrect();
    this.drawIntro();
    this.drawIntroFinal();
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

  private drawFillrect() {
    this.contextFillrect.fillStyle = "#ffad6a";
    this.contextFillrect.fillRect(10, 10, 580, 380);
  };
  private drawIntro() {
    this.contextIntro.fillStyle = "#ffad6a";
    this.contextIntro.fillRect(10, 10, 580, 380);

    this.contextIntro.font = "50px Impact";
    this.contextIntro.fillStyle = "#6a8aff";
    this.contextIntro.textAlign = "center";
    this.contextIntro.fillText("Platform Single Screen", this.canvasIntro.nativeElement.width / 2, this.canvasIntro.nativeElement.height / 2);
  }

  private drawIntroFinal() {
    this.contextIntroFinal.fillStyle = "#ffad6a";
    this.contextIntroFinal.fillRect(10, 10, 580, 380);

    this.contextIntroFinal.font = "50px Impact";
    this.contextIntroFinal.fillStyle = "#5E41CC";
    this.contextIntroFinal.textAlign = "center";
    this.contextIntroFinal.fillText("Platform Single Screen", this.canvasIntroFinal.nativeElement.width / 2, this.canvasIntroFinal.nativeElement.height / 2);

    this.contextIntroFinal.fillStyle = "#000";
    this.contextIntroFinal.fillRect(
      this.canvasIntroFinal.nativeElement.width / 2 - 95,
      this.canvasIntroFinal.nativeElement.height / 2 + 30,
      200,
      80
    );

    this.contextIntroFinal.fillStyle = "#85FF88";
    this.contextIntroFinal.fillRect(
      this.canvasIntroFinal.nativeElement.width / 2 - 100,
      this.canvasIntroFinal.nativeElement.height / 2 + 35,
      200,
      80
    );


    this.contextIntroFinal.font = "50px Impact";
    this.contextIntroFinal.fillStyle = "#B37039";
    this.contextIntroFinal.textAlign = "center";
    this.contextIntroFinal.fillText("START", this.canvasIntroFinal.nativeElement.width / 2, this.canvasIntroFinal.nativeElement.height / 2 + 95);

  }

}
