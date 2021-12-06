import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {
  /*
    ui = {
      app: { header: true, footer: true, showAll: true, hideAll: false },
      view1: { showCH: true, showCF: true, showLeft: true, showRight: true },
      view2: { showCH: true, showCF: true, showLeft: true, showRight: true }
    };
  */
  ui: any;

  behaviourSubject: BehaviorSubject<any>;

  constructor() {
    this.behaviourSubject = new BehaviorSubject(this.setState(true));

    this.behaviourSubject.next(this.setState(true));

  }

  public getState(): Observable<any> { // clients subscribe to the function return and not the subject directly
    return (this.behaviourSubject.pipe(distinctUntilChanged()));
  }

  updateState(flag: any) {
    this.behaviourSubject.next(this.setState(flag));
  }

  setState(flag: any) {
    console.log(flag);
    if (flag) {
      this.ui = {
        app: { header: true, footer: true, showAll: false, hideAll: false },
        view1: { showCH: true, showCF: true, showLeft: true, showRight: true },
        view2: { showCH: true, showCF: true, showLeft: true, showRight: true }
      };
    } else {
      this.ui = {
        app: { header: false, footer: false, showAll: false, hideAll: false },
        view1: { showCH: false, showCF: false, showLeft: false, showRight: false },
        view2: { showCH: false, showCF: false, showLeft: false, showRight: false }
      };
    }

    return this.ui;
  }
}
