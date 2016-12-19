import {Component} from '@angular/core';
import {LoisirsService} from "./loisirs.service";
import {LoisirModel} from "./loisirs.model";

@Component({
  selector:'loisirs',
  styleUrls:['./loisirs.component.css'],
  templateUrl:'./loisirs.component.html',
  providers:[LoisirsService]
})

export class LoisirsComponent{
  loiService: LoisirsService;
  loiData:LoisirModel=new LoisirModel();

  constructor(loiService: LoisirsService){
    loiService.getAllLoisirs()
              .subscribe(data=>{

                  this.loiData.title=data.title
                  this.loiData.listeLoisir=data.listeLoisir
                },
                err=> console.error(err),
                () => console.log('done'))
  }

}
