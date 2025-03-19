import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {



  ngOnInit() {

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
