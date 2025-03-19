import { Routes } from '@angular/router';
import {DescriptionComponent} from './description/description.component';
import {GameComponent} from './game/game.component';
import {HelpComponent} from './help/help.component';

export const routes: Routes = [
  //{ path: 'quiz', component: QuizComponent },
  { path: 'description', component: DescriptionComponent },
  { path: 'game', component: GameComponent },
  {path: 'help', component: HelpComponent},
  { path: '', redirectTo: 'description', pathMatch: 'full' },
];
