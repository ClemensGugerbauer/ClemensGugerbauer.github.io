import { Routes } from '@angular/router';
import {DescriptionComponent} from './description/description.component';
import {GameComponent} from './game/game.component';

export const routes: Routes = [
  //{ path: 'quiz', component: QuizComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'game', component: GameComponent },
  { path: '', redirectTo: 'description', pathMatch: 'full' },
];
