import { Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild, OnInit } from '@angular/core';
import { ITeethDataObject } from '../../DrawComponent/constants';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'g[app-path]',
  templateUrl: 'path.component.html',
})
export class PathComponent {
  polygon: number[];
  clipPolygon: number[];
  private _item: ITeethDataObject;
  get item(): ITeethDataObject {
    return this._item;
  }
  @Input() set item(value: ITeethDataObject) {
    this._item = value;
    console.log(JSON.stringify(value));
    this.polygon = value.convertedPoints ? ([] as number[]).concat.apply([], value.convertedPoints?.arrayOfPointsAsArrayArrayNumbers100) : [];
    this.clipPolygon = value.convertedPoints ? ([] as number[]).concat.apply([], value.convertedPoints?.arrayOfPointsAsArrayArrayNumbers20) : [];
  }
}
