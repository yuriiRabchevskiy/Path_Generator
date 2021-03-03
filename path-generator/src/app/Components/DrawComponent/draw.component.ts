import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionTypes, createSvgPoint, IBreakPoint, IPoint, SelectedTeethType } from 'src/app/helpers/general';
import { ILinesData, LinesData } from 'src/app/helpers/Line';
import { DrawService } from 'src/app/Services/draw.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-draw',
  templateUrl: 'draw.component.html',
  styleUrls: ['./draw.component.scss'],
})
export class DrawComponent implements OnInit, AfterViewInit {
  @ViewChild('svgEl') svgEl: ElementRef;
  width: string = '100%';
  showGrid: boolean = false;
  showModal: boolean = false;
  teethTypes = SelectedTeethType;
  selectedTeeth: SelectedTeethType | null;
  private _actionType: ActionTypes;

  private line = d3
    .line()
    .x((d: any) => d.x)
    .y((d: any) => d.y);
  get actionType() { return this._actionType; }
  set actionType(value: ActionTypes) {
    if (value !== this._actionType) {
      this._actionType = value;
    }
    if (value) {
      this.setEventListener();
    } else {
      this.removeEventListener();
    }
  }
  lines: ILinesData;
  points: IBreakPoint[] = [];
  pointsByPersenteg: IPoint[] = [];
  drawPathString: string = '';
  polyLine: string = '';
  constructor(private drawService: DrawService) {
    this.drawPath = this.drawPath.bind(this);
  }

  ngOnInit() {
    this.drawService.gridSubject.subscribe(it => {
      this.showGrid = it;
    });
    this.drawService.modalSubject.subscribe(it => {
      this.showModal = it;
    });
    this.drawService.teethSubject.subscribe(it => {
      this.selectedTeeth = it;
      if (this.selectedTeeth === SelectedTeethType.LEFT_CENTRAL || this.selectedTeeth === SelectedTeethType.RIGHT_CENTRAL) {
        this.width = '87.6%';
      }
      if ( this.selectedTeeth === SelectedTeethType.RIGHT_LATERAL) {
        this.width = '71.07%';
      }
      if (this.selectedTeeth === SelectedTeethType.LEFT_LATERAL) {
        this.width = '70.58%';
      }
      if (this.selectedTeeth === SelectedTeethType.RIGHT_CUSPID) {
        this.width = '60.28%';
      }
      if (this.selectedTeeth === SelectedTeethType.LEFT_CUSPID) {
        this.width = '59.8%';
      }
      if (this.selectedTeeth === SelectedTeethType.RIGHT_BICUSPID) {
        this.width = '52.87%';
      }
      if (this.selectedTeeth === SelectedTeethType.LEFT_BICUSPID) {
        this.width = '52.29%';
      }
    });
    this.drawService.actionSubject.subscribe(it => {
      this.actionType = it;
      if (!this.actionType) {
        d3.select('#tempPath').attr('d', '');
        d3.select('#tempCircle').attr('cx', 0).attr('cy', 0);
      }
    });
  }

  ngAfterViewInit() {
    this.initGridLinesData();
  }

  initGridLinesData() {
    this.lines = new LinesData();
  }

  onClick(event: any) {
    if (this.actionType === ActionTypes.PATH) {
      this.onAddPoint(event);
      return;
    }
  }

  onAddPoint(event: any) {
    const point: IPoint = createSvgPoint(this.svgEl.nativeElement, event);
    if (!point) { return; }
    const _obj: IBreakPoint = {
      x: point.x,
      y: point.y,
      id: this.points.length,
    };
    const _byPers: IPoint = this.getPointByPersenteg(point);
    this.pointsByPersenteg = [...this.pointsByPersenteg, _byPers];
    this.points = [...this.points, _obj];
    this.polyLine = this.points.map(it => [it.x, it.y]).toString();
  }

  setEventListener() {
    this.svgEl.nativeElement.addEventListener('mousemove', this.drawPath, false);
  }
  removeEventListener() {
    this.svgEl.nativeElement.removeEventListener('mousemove', this.drawPath);
  }

  drawPath(event: any) {
    if (!this.points || !this.points.length) { return; }
    const point = createSvgPoint(this.svgEl.nativeElement, event);
    const arr: any[] = [this.points[this.points.length - 1], point];
    const path: string = this.line(arr) || '';
    d3.select('#tempPath').attr('d', path).attr('pointer-events', 'none');
    d3.select('#tempCircle').attr('cx', point.x).attr('cy', point.y);
  }

  onRemoveItem(id: number) {
    const index = this.points.findIndex(it => it.id === id);
    this.points.splice(index, 1);
    this.pointsByPersenteg.splice(index, 1);
    this.polyLine = this.points.map(it => [it.x, it.y]).toString();
  }

  onUpdateItem(item: IBreakPoint) {
    const _byPers: IPoint = this.getPointByPersenteg(item);
    const index = this.points.findIndex(it => it.id === item.id);
    this.points.splice(index, 1, item);
    this.pointsByPersenteg.splice(index, 1, _byPers);
    this.polyLine = this.points.map(it => [it.x, it.y]).toString();
  }

  onCloseModal(event: boolean) {
    this.drawService.onSetShowPath(event);
  }

  getPointByPersenteg(point: any): IPoint {
    const _x = Number(point.x.toFixed(2));
    const _y = Number(point.y.toFixed(2));
    return { x: _x, y: _y };
  }
}
