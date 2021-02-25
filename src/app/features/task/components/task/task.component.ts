import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ComponentRef,
  VERSION,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { DynamicComponentService } from '@teachio/app/common';
import { Subject } from 'rxjs';

@Component({
  selector: 'tio-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;
  proxy$ = new Subject<any>();
  counter = 1;
  constructor(private componentService: DynamicComponentService) {}

  ngOnInit(): void {
    this.proxy$.pipe().subscribe((value) => {
      console.log(value);
    });
  }

  addDynamicComponent() {
    this.componentService
      .getComponentBySelector('tio-text-task', () =>
        import('../../../tasks/tasks.module').then((m) => m.TasksModule)
      )
      .then((componentRef: any) => {
        componentRef.instance['input'] = `test ${this.counter}`;
        this.counter++;
        componentRef.instance['output'].subscribe((value: any) => {
          this.proxy$.next(value);
        });
        this.container.insert(componentRef.hostView);
      });
  }
  addTextComponent() {
    this.componentService
      .getComponentBySelector('tio-test-task', () =>
        import('../../../tasks/tasks.module').then((m) => m.TasksModule)
      )
      .then((componentRef: any) => {
        componentRef.instance['input'] = `test ${this.counter}`;
        this.counter++;
        componentRef.instance['output'].subscribe((value: any) => {
          this.proxy$.next(value);
        });
        this.container.insert(componentRef.hostView);
      });
  }
}
