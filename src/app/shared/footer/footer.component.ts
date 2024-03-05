import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  email = new FormControl('', [Validators.email]);

  getErrorMessage() {
    return this.email.hasError('email') ? 'Não é um email válido.' : '';
  }
}
