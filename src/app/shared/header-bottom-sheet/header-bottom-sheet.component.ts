import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'header-bottom-sheet',
  templateUrl: './header-bottom-sheet.component.html',
  styleUrls: ['./header-bottom-sheet.component.scss'],
})
export class HeaderBottomSheetComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<HeaderBottomSheetComponent>
  ) {}

  openLink(event: MouseEvent, link: string): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
    window.open(link, '_blank');
  }
}
