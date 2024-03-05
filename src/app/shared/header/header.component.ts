import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';
import { HeaderBottomSheetComponent } from '../header-bottom-sheet/header-bottom-sheet.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private _bottomSheet: MatBottomSheet,
    private router: Router,
    public translocoService: TranslocoService
  ) {}

  panelOpenState = false;

  openLinks(): void {
    this._bottomSheet.open(HeaderBottomSheetComponent);
  }

  isRouteActive(route: string): boolean {
    const currentUrl = this.router.url;
    return currentUrl === route;
  }

  changeLanguage(): void {
    // Altere o idioma conforme necessário
    const newLang =
      this.translocoService.getActiveLang() === 'en' ? 'pt-br' : 'en';
    this.translocoService.setActiveLang(newLang);
  }

}
