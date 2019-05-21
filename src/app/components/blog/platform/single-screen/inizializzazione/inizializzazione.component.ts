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

}
