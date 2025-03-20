import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-description',
  imports: [],
  templateUrl: './description.component.html',
  styleUrl: './description.component.css'
})
export class DescriptionComponent {

  ngAfterViewInit() {
    const dialogs = document.querySelectorAll('dialog');
    dialogs.forEach(dialog => {
      dialog.addEventListener('close', () => {
        const overlay = document.querySelector('.dialog-overlay');
        if (overlay) {
          overlay.remove();
        }
      });
    });
  }

  openDialog(dialogId: string) {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.showModal();
      const overlay = document.createElement('div');
      overlay.className = 'dialog-overlay';
      document.body.appendChild(overlay);
    } else {
      console.error("dialog not found:" + dialogId);
    }
  }

  closeDialog(dialogId: string): void {
    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if (dialog) {
      dialog.close();
      const overlay = document.querySelector('.dialog-overlay');
      if (overlay) {
        overlay.remove();
      }
    } else {
      console.error("dialog not found:" + dialogId);
    }
  }

  isDialogOpen(dialogId: string) {

    const dialog = document.getElementById(dialogId) as HTMLDialogElement;
    if(dialog) {
      return dialog.open;
    }
    else {
      console.error("dialog not found:" + dialogId);
      return;
    }
  }

  get pageImageUrl(): string {
    return `assets/images/map-before.png`;
  }
}
