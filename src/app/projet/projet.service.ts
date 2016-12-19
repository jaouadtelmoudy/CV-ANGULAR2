import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import  'rxjs/add/operator/map';
@Injectable()

export class ProjetService{

  constructor(private _http:Http) { }
  getAllProjet(){
    return  this._http.get('app/projet/data.json').map(res => res.json());
  }

}
