import { Routes } from '@angular/router';

import { FormationComponent } from './formation/formation.component';
import { HomeComponent } from './home/home.component';
import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
import { RepoListComponent } from './github/repo-list/repo-list.component';
import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { ContactComponent } from './contact/contact.component';
import {ExperienceComponent} from "./experience/experience.component";
import {ProjetComponent} from "./projet/projet.component";
import {LoisirsComponent} from "./loisirs/loisirs.component";

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projet', component: ProjetComponent },
  { path: 'loisirs', component: LoisirsComponent },
  { path: 'github', component: RepoBrowserComponent,
    children: [
      { path: '', component: RepoListComponent },
      { path: ':org', component: RepoListComponent,
        children: [
          { path: '', component: RepoDetailComponent },
          { path: ':repo', component: RepoDetailComponent }
        ]
      }]
  },
  { path: 'contact', component: ContactComponent }
];

