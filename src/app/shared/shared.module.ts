import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './component/pagination/pagination.component';
import { DebounceClickDirective } from './directive/debounce-click.directive';
import { ErrorImgDirective } from './directive/error-img.directive';
import { NavigationComponent } from './component/navigation/navigation.component';
import { BottomComponent } from './component/bottom/bottom.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaginationComponent,
     DebounceClickDirective,
     ErrorImgDirective,
     NavigationComponent,
     BottomComponent
    ],
  exports: [
    PaginationComponent,
     DebounceClickDirective,
     NavigationComponent,
     BottomComponent
    ]
})
export class SharedModule { }
