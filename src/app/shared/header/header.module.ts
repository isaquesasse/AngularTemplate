import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { TranslocoRootModule } from 'src/app/transloco-root.module';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeaderBottomSheetModule } from '../header-bottom-sheet/header-bottom-sheet.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    RouterLink,
    TranslocoRootModule,
    HeaderBottomSheetModule,
    //Material
    MatExpansionModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
