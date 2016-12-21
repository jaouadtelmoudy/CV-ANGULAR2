import {Component} from '@angular/core';
import {HomeService} from "./home.service";
import {LanguesService} from "../langues/langues.service";
import {LanguesModel} from "../langues/langues.model";
import {LoisirModel} from "../loisirs/loisirs.model";
import {LoisirsService} from "../loisirs/loisirs.service";
import {ProjetService} from "../projet/projet.service";
import {ProjetModel} from "../projet/projet.model";
import {FormationService} from "../formation/formation.service";
import {FormationModel} from "../formation/formation.model";
import {ExperienceService} from "../experience/experience.service";
import {ExperienceModel} from "../experience/experience.model";
import {CarouselComponent} from "../carousel/carousel.component";



@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers:[HomeService,LanguesService,LoisirsService, ProjetService,FormationService,ExperienceService]
})
export class HomeComponent {

  lgService : LanguesService;
  lgModel:LanguesModel =new LanguesModel();
  loisirService:LoisirsService;
  loiModel:LoisirModel=new LoisirModel();
  projetService:ProjetService;
  prjModel:ProjetModel=new ProjetModel();
  formationService:FormationService;
  frmModel:FormationModel=new FormationModel();
  experienceService:ExperienceService;
  expModel:ExperienceModel=new ExperienceModel();


  constructor(lgService:LanguesService, loisirService:LoisirsService,projetService:ProjetService,formationService:FormationService,experienceService:ExperienceService){

    lgService.getAllLangues()
             .subscribe(data=>{
                  this.lgModel.title=data.title
                  this.lgModel.listeLg=data.listeLg
                  this.lgModel.descriptionGenLg=data.descriptionGen;
                },
                err=> console.error(err),
                () => console.log('done')
    );

    loisirService.getAllLoisirs()
      .subscribe(data=>{
          this.loiModel.title=data.title
          this.loiModel.listeLoisir=data.listeLoisir
          this.loiModel.descriptionGen=data.descriptionGen;
        },
        err=> console.error(err),
        () => console.log('done')
      );

    projetService.getAllProjet()
      .subscribe(data=>{
          this.prjModel.title=data.title
          this.prjModel.listeProjets=data.listeProjets
          this.prjModel.descriptionGen=data.descriptionGen;
        },
        err=> console.error(err),
        () => console.log('done')
      );

    formationService.getAllFormation()
      .subscribe(data=>{
          this.frmModel.title=data.title
          this.frmModel.listeFormation=data.listeFrm
          this.frmModel.description=data.descriptionGen;
        },
        err=> console.error(err),
        () => console.log('done')
      );

    experienceService.getAllExperience()
      .subscribe(data=>{
          this.expModel.title=data.title
          this.expModel.listeExp=data.listeExp
          this.expModel.description=data.descriptionGen;
        },
        err=> console.error(err),
        () => console.log('done')
      );

  }


}
