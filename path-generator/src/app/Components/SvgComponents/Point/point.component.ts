import { Component, ElementRef, EventEmitter, Input, OnDestroy, AfterViewInit, Output, ViewChild } from '@angular/core';
import { IBreakPoint } from 'src/app/helpers/general';
import * as d3 from 'd3';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'g[app-point]',
  templateUrl: 'point.component.html',
})
export class PointComponent implements AfterViewInit, OnDestroy {
  @ViewChild('el', {static: false}) el: ElementRef;
  private _item: IBreakPoint;
  get item(): IBreakPoint {
    return this._item;
  }
  @Input() set item(value: IBreakPoint) {
    this._item = value;
  }
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
  @Output() onUpdate: EventEmitter<IBreakPoint> = new EventEmitter<IBreakPoint>();
  private drag = d3.drag().on('drag', e => this.dragger(e)).on('end', e => this.dragEnd(e));

  ngAfterViewInit() {
    const circle = d3.select(this.el.nativeElement);
    circle.call(this.drag);
  }
  ngOnDestroy() {
    const circle = d3.select(this.el.nativeElement);
    circle.on('drag', null);
  }
  onRemoveItem() {
    this.onRemove.emit(this.item.id);
  }

  dragger(event: any) {
    this.item.x = event.x;
    this.item.y = event.y;
  }

  dragEnd(event: any) {
    this.onUpdate.emit(this.item);
  }
}
