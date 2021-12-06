import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UiStateService } from '../services/ui-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view1',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    class: 'hg-component-wrapper'
  },

  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.css']
})
export class View1Component implements OnInit, OnDestroy {
  ui: any; // = { showCH: true, showCF: true, showLeft: true, showRight: true };

  view1: any
  app: any
  sub1: Subscription;

  constructor(private uiState: UiStateService) {
    this.sub1 = this.uiState.getState().subscribe(state => {
      this.ui = state.view1;
      this.app = state.app;
      console.log(state);
    });
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  ngOnInit() {}

  implementMe(x: string) {
    alert('implement action: ' + x);
  }

  showAll(flag: boolean) {
    this.uiState.updateState(flag);
  }

  setValues() {
    this.app.showAll = false;
    this.app.hideAll = false;
  }
}
