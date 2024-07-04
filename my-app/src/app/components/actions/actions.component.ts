import { Component } from '@angular/core';

@Component({
  selector: 'button-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent {
  buttonLabel = 'Click me!';

  sayHi() {
    alert('Hola!')
  }
}
