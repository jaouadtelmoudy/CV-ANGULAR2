import {Component} from '@angular/core';
import {LanguesService} from "./langues.service";
import {LanguesModel} from "./langues.model";

@Component({
    selector:'langues',
    styleUrls:['./langues.component.css'],
    templateUrl:'./langues.component.html',
    providers:[LanguesService]
})

export class LanguesComponent{
  lgService : LanguesService;
  lgData:LanguesModel =new LanguesModel();


  constructor(lgService:LanguesService){
    lgService.getAllLangues().
    subscribe(data=>{

        this.lgData.title=data.title
        this.lgData.listeLg=data.listeLg
      },
      err=> console.error(err),
      () => console.log('done')
    );
  }

}
