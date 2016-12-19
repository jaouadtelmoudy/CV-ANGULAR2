import {Component} from '@angular/core';
import {HomeService} from "./home.service";
import {LanguesService} from "../langues/langues.service";
import {LanguesModel} from "../langues/langues.model";


@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html',
  providers:[HomeService,LanguesService]
})
export class HomeComponent {

  lgService : LanguesService;
  lgModel:LanguesModel =new LanguesModel();


  constructor(lgService:LanguesService){
    lgService.getAllLangues()
             .subscribe(data=>{
                  this.lgModel.title=data.title
                  this.lgModel.listeLg=data.listeLg
                  this.lgModel.descriptionGenLg=data.descriptionGen;
                },
                err=> console.error(err),
                () => console.log('done')
    );
  }


}
