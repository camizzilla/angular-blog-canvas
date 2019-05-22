import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inizializzazione',
  templateUrl: './inizializzazione.component.html',
  styleUrls: ['./inizializzazione.component.scss']
})
export class InizializzazioneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
}
