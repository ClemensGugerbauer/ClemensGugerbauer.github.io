import {Component, signal} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  isOpen = signal(false);

  constructor(private router: Router) {
  }

  toggleSidebar() {
    this.isOpen.set(!this.isOpen());
  }

  navigateToGame() {
    this.router.navigateByUrl('/game');
    this.isOpen.set(false);
  }

  navigateToDescription() {
    this.router.navigateByUrl('/description');
    this.isOpen.set(false);
  }

  navigateToHelp() {
    this.router.navigateByUrl('/help');
    this.isOpen.set(false);
  }
}
