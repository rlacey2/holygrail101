import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { VariableAst } from '@angular/compiler';
import { UiStateService } from '../services/ui-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view2',
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    class: 'hg-component-wrapper'
  },
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.css']
})
export class View2Component implements OnInit, OnDestroy {
  ui: any;
  view1: any;
  app: any;
  sub1: Subscription;

  constructor(private uiState: UiStateService) {
    this.ui = uiState.ui.view1;
    this.app = uiState.ui.app;
    this.sub1 = this.uiState.getState().subscribe(state => {
      this.ui = state.view2;
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

  showAll(flag: any) {
    this.uiState.updateState(flag);
  }

  setValues() {
    this.app.showAll = false;
    this.app.hideAll = false;
  }
}
