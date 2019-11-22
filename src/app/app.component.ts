import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UiStateService } from './services/ui-state.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {


  appUI;

  app;
  sub1: Subscription;

  constructor(private uiState: UiStateService) {
    this.sub1 = this.uiState.getState().subscribe(state => {
      this.app = state.app;
      console.log(state);
    }
    );
  }

  ngOnDestroy() {
    this.sub1.unsubscribe();
  }

  ngOnInit(): void {

  }

  implementMe(x: string) {
    alert('implement action: ' + x);
  }
}
