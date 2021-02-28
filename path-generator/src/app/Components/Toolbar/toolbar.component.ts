import { Component, OnInit } from '@angular/core';
import { DrawService } from 'src/app/Services/draw.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  showGrid: boolean = false;
  showTeeth: boolean = false;
  constructor(private drawService: DrawService) {}


  ngOnInit() {
    this.drawService.gridSubject.subscribe(it => {
      this.showGrid = it;
    });
    this.drawService.teethSubject.subscribe(it => {
      this.showTeeth = it;
    });
  }
  onShowGrid($event: boolean) {
    this.drawService.onShowGrid($event);
  }
  onShowTeeth($event: boolean) {
    this.drawService.onShowTeeth($event);
  }
}
