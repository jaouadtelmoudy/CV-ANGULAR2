import {Component} from '@angular/core';
import {FormationService} from './formation.service';
import {FormationModel} from './formation.model';

@Component({
  selector: 'formation',
  styleUrls: ['./formation.component.css'],
  templateUrl: './formation.component.html',
  providers:[FormationService]
})
export class FormationComponent {
  formationData:FormationModel = new FormationModel();
  frmService: FormationService;
  title:string;
  listFormation:string;
  constructor(public frmSer: FormationService){
    frmSer.getAllFormation()
          .subscribe(data=>{
                            this.listFormation=data;
                            this.formationData.title=data.title
                            this.formationData.listeFormation=data.listeFrm
                      },
                     err=> console.error(err),
                     () => console.log('done')
              );

  }
}
