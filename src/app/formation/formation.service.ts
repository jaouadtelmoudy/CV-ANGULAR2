import {Injectable} from  '@angular/core';
import {Http, Response} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()

export class FormationService{

  constructor(private _http:Http) { }
  getAllFormation(){
     return  this._http.get('app/formation/data.json').map(res => res.json());
  }
}
