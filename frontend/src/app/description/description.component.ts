import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  openDialog(dialogid: string) {
    const dialog = document.getElementById(dialogid) as HTMLDialogElement;
    if(dialog) {
      dialog.showModal();
    }
    else {
      console.error("dialog not found:" + dialogid);
    }
  }
}
