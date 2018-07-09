import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { IndexDashComponent } from './components/index-dash/index-dash.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule
  ],
  declarations: [IndexDashComponent]
})
export class DashboardModule { }
