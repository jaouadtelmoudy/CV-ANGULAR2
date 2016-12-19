import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import  'rxjs/add/operator/map';
@Injectable()

export class LoisirsService{
  constructor(private _http:Http) { }
  getAllLoisirs(){
    return  this._http.get('app/loisirs/data.json').map(res => res.json());
  }
}
