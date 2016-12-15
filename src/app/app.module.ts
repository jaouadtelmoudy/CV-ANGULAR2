import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FormationComponent } from './formation/formation.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjetComponent } from './projet/projet.component';
import { HomeComponent } from './home/home.component';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import {LoisirsComponent} from "./loisirs/loisirs.component";
import {LanguesComponent} from "./langues/langues.component";

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
  
    HomeComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    ExperienceComponent,
    ProjetComponent,
    LoisirsComponent,
    LanguesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [

  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
