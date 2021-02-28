import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ILinesData, LinesData } from 'src/app/helpers/Line';
import { DrawService } from 'src/app/Services/draw.service';

@Component({
  selector: 'app-draw',
  templateUrl: 'draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit, AfterViewInit {
  @ViewChild('svgEl') svgEl: ElementRef;
  showGrid: boolean = false;
  lines: ILinesData;
  constructor(private drawService: DrawService) {}

  ngOnInit() {

    this.drawService.gridSubject.subscribe(it => {
      this.showGrid = it;
    });
  }

  ngAfterViewInit() {
    this.initGridLinesData();
  }

  initGridLinesData() {
    // const svgElement = (this.svgEl.nativeElement as HTMLElement).getBoundingClientRect();
    this.lines = new LinesData();
  }

}
