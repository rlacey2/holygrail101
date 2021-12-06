import { Component, OnInit, ViewChild, ViewEncapsulation, OnDestroy } from '@angular/core';
import { UiStateService } from './services/ui-state.service';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  appUI: any;
  app: any;
  subs: Subscription[] = []; // a cache of subscriptions
  smMenuVertical: any;

  constructor(
    private uiState: UiStateService,
    private breakpointObserver: BreakpointObserver) {
    this.subs.push(
      this.uiState.getState().subscribe(state => {
        this.app = state.app;
        console.log(state);
      }
      )
    );
  }

  ngOnInit(): void {

    // 844px appears to match  navbar-expand-md
    this.subs.push(
      this.breakpointObserver.observe([
        '(max-width: 844px)'
      ]).subscribe(result => {
        if (result.matches) {
          console.log('<=844px');
          this.smMenuVertical = 'collapse';
        } else {
          // if necessary:
          console.log('>844px');
          this.smMenuVertical = 'undefined';
        }
      })
    );
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

  implementMe(x: string) {
    alert('implement action: ' + x);
  }
}
