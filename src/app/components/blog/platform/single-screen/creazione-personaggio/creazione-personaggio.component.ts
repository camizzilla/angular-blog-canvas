import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creazione-personaggio',
  templateUrl: './creazione-personaggio.component.html',
  styleUrls: ['./creazione-personaggio.component.scss']
})
export class CreazionePersonaggioComponent implements OnInit {

  constructor() { }

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


}
