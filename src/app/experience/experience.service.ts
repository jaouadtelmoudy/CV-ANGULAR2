import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()

export class ExperienceService{
  constructor(private _http:Http) { }
  getAllExperience(){
     return  this._http.get('app/experience/data.json').map(res => res.json());
  }
}
