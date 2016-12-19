import {Component} from '@angular/core';
import {ExperienceService} from './experience.service';
import {ExperienceModel} from './experience.model';

@Component({
  selector:'experience',
  styleUrls:['./experience.component.css'],
  templateUrl:'./experience.component.html',
  providers:[ExperienceService]
})

export class ExperienceComponent{
  expService:ExperienceService;
  experienceData:ExperienceModel=new ExperienceModel();
  constructor(expService:ExperienceService){
    expService.getAllExperience().
      subscribe(data=>{
       // this.listFormation=data;
        this.experienceData.title=data.title
        this.experienceData.listeExp=data.listeExp
      },
      err=> console.error(err),
      () => console.log('done')
    );
  }

}
