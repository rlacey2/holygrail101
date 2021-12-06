import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';

import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

import { HeaderComponent } from './header/header.component';

import { MenuComponent } from './menu/menu.component';
import { UiStateService } from './services/ui-state.service';

const routes: Routes = [
  {
    path: 'view1',
    component: View1Component
  },

  {
    path: 'view2',
    component: View2Component
  }, //

  {
    path: '',
    redirectTo: 'view1',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'view1',
    pathMatch: 'full'
  }

  //    { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    HeaderComponent,
    MenuComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,

    BrowserAnimationsModule,

    RouterModule.forRoot(routes, { enableTracing: true, useHash: true })
  ],
  providers: [UiStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
