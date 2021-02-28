import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DrawService {

  public gridSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public teethSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  private showGrid: boolean = true;
  private showTeeth: boolean = true;

  constructor() { }

  onShowGrid(value: boolean) {
    if (this.showGrid === value) { return; }
    this.showGrid = value;
    this.gridSubject.next(this.showGrid);
  }

  onShowTeeth(value: boolean) {
    if (this.showTeeth === value) { return; }
    this.showTeeth = value;
    this.teethSubject.next(this.showTeeth);
  }
}
