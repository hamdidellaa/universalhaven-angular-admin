import { LoaderComponent } from './loader/loader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlltasksComponent } from './alltasks/alltasks.component';
import { TasksRoutingModule } from './tasks-routing/tasks-routing.module';
import { SingletaskComponent } from './singletask/singletask.component';
import { SharedModule } from './shared/shared.module';
import { TaskdetailsComponent } from './taskdetails/taskdetails.component';
import { SingletaskcommentComponent } from './singletaskcomment/singletaskcomment.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreatetaskComponent } from './createtask/createtask.component';
import { TaskstatsComponent } from './taskstats/taskstats.component';
import { ChartsModule } from 'ng2-charts';
import {DragulaModule} from 'ng2-dragula';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    DragulaModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatSnackBarModule,
    MatChipsModule,
    SharedModule
  ],
  declarations:  [  AlltasksComponent, LoaderComponent , SingletaskComponent, TaskdetailsComponent, SingletaskcommentComponent, CreatetaskComponent, TaskstatsComponent],
  exports : [AlltasksComponent,SingletaskComponent,TaskdetailsComponent,TaskstatsComponent,LoaderComponent],
})
export class TasksModule { 
  
}
