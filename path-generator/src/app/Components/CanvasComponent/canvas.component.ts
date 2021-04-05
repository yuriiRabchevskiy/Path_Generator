import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fabric } from 'fabric';
import { CANVAS_ID } from './model';
@Component({
  selector: 'app-canvas',
  templateUrl: 'canvas.html',
  styleUrls: ['./canvas.scss'],
})
export class CanvasComponent implements AfterViewInit {
  @ViewChild(`${CANVAS_ID}`) public canvasEl: ElementRef;
  id = CANVAS_ID;
  img = new Image();
  imgSrc: string = 'assets/images/Photo_FrontRetractedTogether.png';
  canvas: fabric.Canvas;

  constructor() {
  }

  ngAfterViewInit() {
    this.onSetupCanvasPropriates();
  }

  getImgPosition() {
    this.img.src = this.imgSrc;
    let newWidth = this.canvasEl.nativeElement.width;
    const wrh = this.img.width / this.img.height;
    let newHeight = newWidth / wrh;
    if (newHeight > this.canvasEl.nativeElement.height) {
      newHeight = this.canvasEl.nativeElement.height;
      newWidth = newHeight * wrh;
    }
    const xOffset = newWidth < this.canvasEl.nativeElement.width ? ((this.canvasEl.nativeElement.width - newWidth) / 2) : 0;
    const yOffset = newHeight < this.canvasEl.nativeElement.height ? ((this.canvasEl.nativeElement.height - newHeight) / 2) : 0;
    return { x: xOffset, y: yOffset };
  }

  onSetupCanvasPropriates() {
    const position = this.getImgPosition();
    this.canvas = new fabric.Canvas(`${this.id}`, { width: this.canvasEl.nativeElement.width, height: this.canvasEl.nativeElement.height });
    this.canvas.setBackgroundImage(this.imgSrc, this.canvas.renderAll.bind(this.canvas), {
      left: position.x,
      top: position.y,
    });

    this.canvas.setZoom(1.56);
    this.canvas.renderAll();
  }
}
