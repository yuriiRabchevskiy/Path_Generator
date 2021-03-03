import { Component, OnInit } from '@angular/core';
import { ActionTypes, SelectedTeethType } from 'src/app/helpers/general';
import { DrawService } from 'src/app/Services/draw.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  actionTypes = ActionTypes;
  showGrid: boolean = false;
  teethTypes = SelectedTeethType;
  selectedTeeth: SelectedTeethType | null;
  activeType: ActionTypes;
  constructor(private drawService: DrawService) {}


  ngOnInit() {
    this.drawService.gridSubject.subscribe(it => {
      this.showGrid = it;
    });
    this.drawService.teethSubject.subscribe(it => {
      this.selectedTeeth = it;
    });
    this.drawService.actionSubject.subscribe(it => {
      this.activeType = it;
    });
  }
  onShowGrid($event: boolean) {
    this.drawService.onShowGrid($event);
  }
  onShowTeeth(type: SelectedTeethType) {
    this.drawService.onShowTeeth(type);
  }
  onSetAction($event: ActionTypes) {
    this.drawService.onSetAction($event);
  }
  onShowPath() {
    this.drawService.onSetShowPath(true);
  }
}
