import { ComponentFactoryResolver, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from '@teachio/app/common';
import { TaskComponent } from './components/task/task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule],
  exports: [TaskComponent],
})
export class TaskModule {
  
}
