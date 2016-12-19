import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import  'rxjs/add/operator/map';
@Injectable()

export class LanguesService{

  constructor(private _http:Http) { }
  getAllLangues(){
    return  this._http.get('app/langues/data.json').map(res => res.json());
  }

}
