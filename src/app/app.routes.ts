import { Routes } from '@angular/router';

import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {ExperienceComponent} from "./experience/experience.component";
import {ProjetComponent} from "./projet/projet.component";
import {LoisirsComponent} from "./loisirs/loisirs.component";
import {LanguesComponent} from "./langues/langues.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'loisirs', component: LoisirsComponent },
  { path: 'langues', component: LanguesComponent },
  { path: 'contact', component: ContactComponent }
];

