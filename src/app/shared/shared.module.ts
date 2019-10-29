import {NgModule} from '@angular/core'

import {InputComponent} from './input/input.component'
import { RadioComponent } from "app/shared/radio/radio.component";
import { RatingComponent } from "app/shared/rating/rating.component";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [InputComponent, RadioComponent, RatingComponent,
            CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule {}
