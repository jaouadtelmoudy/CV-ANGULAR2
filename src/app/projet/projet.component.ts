import {Component} from '@angular/core';
import {ProjetService} from "./projet.service";
import {ProjetModel} from "./projet.model";
@Component({
  selector:'projet',
  styleUrls:['./projet.component.css'],
  templateUrl:'./projet.component.html',
  providers:[ProjetService]
})

export class ProjetComponent{
  prjService: ProjetService;
  prjData:ProjetModel=new ProjetModel();

  constructor(prjService: ProjetService){
    prjService.getAllProjet().
    subscribe(data=>{

        this.prjData.title=data.title
        this.prjData.listeProjets=data.listeProjets
      },
      err=> console.error(err),
      () => console.log('done')
    );
  }

}
