import { ComponentFactoryResolver, NgModule, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from '@teachio/app/common';
import { TestTaskComponent, TextTaskComponent } from './components';
import { MultipleChoiceTaskComponent } from './components/multiple-choice-task/multiple-choice-task.component';
import { ShortAnswerQuestionComponent } from './components/short-answer-question/short-answer-question.component';
import { FillTheBlankTaskComponent } from './components/fill-the-blank-task/fill-the-blank-task.component';
import { OrderTaskComponent } from './components/order-task/order-task.component';
import { MatchTaskComponent } from './components/match-task/match-task.component';

@NgModule({
  declarations: [
    MultipleChoiceTaskComponent,
    ShortAnswerQuestionComponent,
    FillTheBlankTaskComponent,
    OrderTaskComponent,
    MatchTaskComponent,
  ],
  imports: [CommonModule],
})
export class TasksModule extends DynamicModule {
  protected dynamicComponents: Type<any>[] = [
    TextTaskComponent,
    TestTaskComponent,
  ];

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }
}
