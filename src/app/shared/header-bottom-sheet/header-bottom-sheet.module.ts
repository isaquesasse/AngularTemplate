import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { HeaderBottomSheetComponent } from './header-bottom-sheet.component';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [HeaderBottomSheetComponent],
  imports: [
    CommonModule,
    //material
    MatBottomSheetModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [HeaderBottomSheetComponent],
})
export class HeaderBottomSheetModule { }
