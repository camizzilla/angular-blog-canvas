import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-canvas-base',
  templateUrl: './canvas-base.component.html',
  styleUrls: ['./canvas-base.component.scss']
})
export class CanvasBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  htmlCode = `
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Platform game - single screen</title>
      <link rel="stylesheet" type="text/css" href="style.css">
    </head>
  
    <body>
      <canvas id=”myCanvas”></canvas>
    </body>
    <script src="main.js"></script>
  </html>`;

  cssCode = `
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
  
  canvas {
    width: 300px;  
    height: 300px;
    border: 3px solid black;
  }
  `

}
