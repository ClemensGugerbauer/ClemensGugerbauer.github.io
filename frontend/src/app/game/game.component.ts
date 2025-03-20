import {Component, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-game',
  imports: [FormsModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  inputCode = signal<number | null>(null);
  isMobileDevice = signal<boolean>(false);

  ngOnInit() {

    if (window.innerWidth < 768) {
      this.isMobileDevice.set(true);
    }

    if(true) {
      const dialog = document.getElementById('game-code-dialog') as HTMLDialogElement;
      if (dialog) {
        dialog.showModal();
      }
      else {
        console.error('game-code-dialog not found');
      }
    }
  }
}
