import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { ActionTypes, SelectedTeethType } from '../helpers/general';

@Injectable({ providedIn: 'root' })
export class DrawService {

  public gridSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public modalSubject: Subject<boolean> = new Subject<boolean>();
  public teethSubject: Subject<SelectedTeethType | null> = new Subject<SelectedTeethType | null>();
  public actionSubject: Subject<ActionTypes> = new Subject<ActionTypes>();
  private showGrid: boolean = false;
  private showModal: boolean = false;
  private selectedTeeth: SelectedTeethType | null;
  private actionType: ActionTypes;

  constructor() { }

  onShowGrid(value: boolean) {
    if (this.showGrid === value) { return; }
    this.showGrid = value;
    this.gridSubject.next(this.showGrid);
  }

  onShowTeeth(value: SelectedTeethType) {
    this.selectedTeeth = this.selectedTeeth === value ? null : value;
    this.teethSubject.next(this.selectedTeeth);
  }

  onSetAction(value: ActionTypes) {
    if (this.actionType === value) { return; }
    this.actionType = value;
    this.actionSubject.next(this.actionType);
  }
  onSetShowPath(value: boolean) {
    this.showModal = value;
    this.modalSubject.next(this.showModal);
  }
}
