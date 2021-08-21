import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActionTypes, createSvgPoint, IBreakPoint, IPoint, SelectedTeethType } from 'src/app/helpers/general';
import { ILinesData, LinesData } from 'src/app/helpers/Line';
import { DrawService } from 'src/app/Services/draw.service';
import * as d3 from 'd3';
// tslint:disable-next-line: max-line-length
import { IConvertedPathToPolygon, IDataLine, IDataLineType, ITeethDataObject, LEFT_BI_CUSPID, LEFT_CENTRAL, LEFT_CUSPID, LEFT_LATERAL, RIGHT_BI_CUSPID, RIGHT_CENTRAL, RIGHT_CUSPID, RIGHT_LATERAL } from './constants';

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
  RIGHT_CENTER_TEETH: ITeethDataObject;
  LEFT_CENTER_TEETH: ITeethDataObject;
  RIGHT_LATERAL_TEETH: ITeethDataObject;
  LEFT_LATERAL_TEETH: ITeethDataObject;
  RIGHT_CUSPID_TEETH: ITeethDataObject;
  LEFT_CUSPID_TEETH: ITeethDataObject;
  RIGHT_BI_CUSPID_TEETH: ITeethDataObject;
  LEFT_BI_CUSPID_TEETH: ITeethDataObject;
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
      if (this.selectedTeeth === SelectedTeethType.LEFT_CENTRAL) {
        this.width = '86.83533447684391%';
      }
      if (this.selectedTeeth === SelectedTeethType.RIGHT_CENTRAL) {
        this.width = '87.55364806866953%';
      }
      if (this.selectedTeeth === SelectedTeethType.RIGHT_LATERAL) {
        this.width = '70.71108901044257%';
      }
      if (this.selectedTeeth === SelectedTeethType.LEFT_LATERAL) {
        this.width = '70.59405940594059%';
      }
      if (this.selectedTeeth === SelectedTeethType.RIGHT_CUSPID) {
        this.width = '60.38461538461538%';
      }
      if (this.selectedTeeth === SelectedTeethType.LEFT_CUSPID) {
        this.width = '62.16489630753667%';
      }
      if (this.selectedTeeth === SelectedTeethType.RIGHT_BICUSPID) {
        this.width = '48.02898550724638%';
      }
      if (this.selectedTeeth === SelectedTeethType.LEFT_BICUSPID) {
        this.width = '51.73463177115033%';
      }
    });
    this.drawService.actionSubject.subscribe(it => {
      this.actionType = it;
      if (!this.actionType) {
        d3.select('#tempPath').attr('d', '');
        d3.select('#tempCircle').attr('cx', 0).attr('cy', 0);
      }
    });
    this.convertTeethData(RIGHT_CENTRAL);
    this.convertTeethData(LEFT_CENTRAL);
    this.convertTeethData(RIGHT_LATERAL);
    this.convertTeethData(LEFT_LATERAL);
    this.convertTeethData(RIGHT_CUSPID);
    this.convertTeethData(LEFT_CUSPID);
    this.convertTeethData(RIGHT_BI_CUSPID);
    this.convertTeethData(LEFT_BI_CUSPID);
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

  convertTeethData(item: ITeethDataObject) {
    const _item: ITeethDataObject = JSON.parse(JSON.stringify(item));
    _item.points = item.points.map(line => {
      const _l: IDataLine = {
        type: line.type,
        x: this.convertor(line.x, item.viewBoxX),
        y: this.convertor(line.y, item.viewBoxY),
      };
      if (line.type === IDataLineType.C) {
        Object.keys(line).forEach(key => {
          if (key === 'x1' || key === 'x2') {
            _l[key] = this.convertor(line[key], item.viewBoxX);
          } else if (key === 'y1' || key === 'y2') {
            _l[key] = this.convertor(line[key], item.viewBoxY);
          } else if (key === 'end') {
            _l[key] = line.end;
          }
        });
      } else if (line.type === IDataLineType.L) {
        _l.end = line.end;
      }
      return _l;
    });
    _item.convertedPath = this.generatePath(_item);
    _item.convertedPoints = this.convertPathToPolygon(_item.convertedPath);
    if (item.type === SelectedTeethType.RIGHT_CENTRAL) {
      this.RIGHT_CENTER_TEETH = _item;
      return;
    }
    if (item.type === SelectedTeethType.LEFT_CENTRAL) {
      this.LEFT_CENTER_TEETH = _item;
      return;
    }
    if (item.type === SelectedTeethType.RIGHT_LATERAL) {
      this.RIGHT_LATERAL_TEETH = _item;
      return;
    }
    if (item.type === SelectedTeethType.LEFT_LATERAL) {
      this.LEFT_LATERAL_TEETH = _item;
      return;
    }
    if (item.type === SelectedTeethType.RIGHT_CUSPID) {
      this.RIGHT_CUSPID_TEETH = _item;
      return;
    }
    if (item.type === SelectedTeethType.LEFT_CUSPID) {
      this.LEFT_CUSPID_TEETH = _item;
      return;
    }
    if (item.type === SelectedTeethType.RIGHT_BICUSPID) {
      this.RIGHT_BI_CUSPID_TEETH = _item;
      return;
    }
    if (item.type === SelectedTeethType.LEFT_BICUSPID) {
      this.LEFT_BI_CUSPID_TEETH = _item;
      return;
    }
  }

  convertor = (point: number | undefined, viewBox: number) => {
    const _p = point || 0;
    const n = (_p * 100) / viewBox;
    return n / 100;
  }

  generatePath = (_item: ITeethDataObject): string => {
    let p = '';
    _item.points.forEach(it => {
      if (it.type === IDataLineType.M) {
        p = `${it.type}${it.x} ${it.y} `;
      } else if (it.type === IDataLineType.C) {
        p += !it.end ? `${it.type}${it.x1} ${it.y1}, ${it.x2} ${it.y2}, ${it.x} ${it.y} ` : `${it.type}${it.x1} ${it.y1}, ${it.x2} ${it.y2}, ${it.x} ${it.y}${it.end}`;
      } else if (it.type === IDataLineType.L) {
        p += `${it.type}${it.x} ${it.y}${it.end}`;
      }
    })
    return p;
  }

  convertPathToPolygon = (_path: string, counter?: number, minCount?: number): IConvertedPathToPolygon => {
    const NUM_POINTS = counter || 100;
    const MIN_NUM_POINTS = minCount || 30;
    const _svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const _pathNode = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    _svg.setAttributeNS(null, 'width', '100%');
    _svg.setAttributeNS(null, 'height', '100%');
    _svg.setAttributeNS(null, 'viewBox', '0 0 1 1');
    _svg.setAttributeNS(null, 'preserveAspectRatio', 'none');
    _svg.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:space', 'preserve');
    _svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg');
    _pathNode.setAttributeNS(null, 'd', _path);
    _pathNode.setAttributeNS(null, 'id', 'test');
    _svg.appendChild(_pathNode);
    const len = _pathNode.getTotalLength();
    const arrayOfPointsAsArrayArrayNumbers100: number[][] = [];
    const arrayOfPointsAsArrayArrayNumbers20: number[][] = [];
    const arrayOfPointsAsIPoint100: IPoint[] = [];
    const arrayOfPointsAsIPoint20: IPoint[] = [];

    for (let i = 0; i < NUM_POINTS; i++) {
      const pt = _pathNode.getPointAtLength((i * len) / (NUM_POINTS - 1));
      arrayOfPointsAsArrayArrayNumbers100.push([pt.x, pt.y]);
      arrayOfPointsAsIPoint100.push({ x: pt.x, y: pt.y });
    }
    for (let i = 0; i < MIN_NUM_POINTS; i++) {
      const pt = _pathNode.getPointAtLength((i * len) / (MIN_NUM_POINTS - 1));
      arrayOfPointsAsArrayArrayNumbers20.push([pt.x, pt.y]);
      arrayOfPointsAsIPoint20.push({ x: pt.x, y: pt.y });
    }
    return { arrayOfPointsAsIPoint100, arrayOfPointsAsIPoint20, arrayOfPointsAsArrayArrayNumbers100, arrayOfPointsAsArrayArrayNumbers20 };
  };
}
