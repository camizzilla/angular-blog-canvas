import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-creazione-personaggio',
  templateUrl: './creazione-personaggio.component.html',
  styleUrls: ['./creazione-personaggio.component.scss']
})
export class CreazionePersonaggioComponent implements AfterViewInit {

  constructor() { }
  @ViewChild('canvasLoop') canvasLoop: ElementRef;
  // @ViewChild('canvasIntro') canvasIntro: ElementRef;
  // @ViewChild('canvasIntroFinal') canvasIntroFinal: ElementRef;
  playerWidth: number;
  playerHeight: number;
  playerX: number;
  playerY: number;

  contextLoop: CanvasRenderingContext2D;
  // private contextIntro: CanvasRenderingContext2D;
  // private contextIntroFinal: CanvasRenderingContext2D;

  ngAfterViewInit() {
    this.contextLoop = (this.canvasLoop.nativeElement as HTMLCanvasElement).getContext('2d');
    // this.contextIntro = (this.canvasIntro.nativeElement as HTMLCanvasElement).getContext('2d');
    // this.contextIntroFinal = (this.canvasIntroFinal.nativeElement as HTMLCanvasElement).getContext('2d');
    this.canvasSize(this.canvasLoop);
    // this.canvasSize(this.canvasIntro);
    // this.canvasSize(this.canvasIntroFinal);
    this.drawLoop();
    // this.drawIntro();
    // this.drawIntroFinal();
  }

  canvasSize(canvas: ElementRef) {
    canvas.nativeElement.width = 600;
    canvas.nativeElement.height = 400;
  }
  ngOnInit() {
  }

  varCode = `
    let canvas = document.getElementById("myCanvas");
    canvas.width = 640;
    canvas.height = 480;
  
    let context = canvas.getContext('2d');
  
    let playerWidth = 50;
    let playerHeight = 100;
    let playerX = 100;
    let playerY = canvas.height - playerHeight;`;

  fillRectCode = `
      context.fillRect(playerX, playerY, playerWidth, playerHeight);`;

  loopCode = `
      let loop = () => {
        context.fillRect(playerX, playerY, playerWidth, playerHeight);
        requestAnimationFrame(loop);
      };`;

  clearRectCode = ` 
    let loop = () => {
	    context.clearRect(0, 0, canvas.width, canvas.height);
	    playerX =+ step;
      context.fillRect(playerX, playerY, playerWidth, playerHeight);
      requestAnimationFrame(loop);
    };`;

  borderCode = `
    if( playerX > 0 && playerX < canvas.width - playerWidth && playerY > 0 
        && playerY < canvas.height - playerHeight
     ){
        playerX = playerX + step;    
    }
    `;

  drawLoop() {
    this.playerWidth = 50;
    this.playerHeight = 100;
    this.playerX = 100;
    this.playerY = this.canvasLoop.nativeElement.height - this.playerHeight;
    this.loop();
  }

  loop() {
    this.contextLoop.fillRect(this.playerWidth, this.playerHeight, this.playerX, this.playerY);
    requestAnimationFrame(this.loop);
  };

}
