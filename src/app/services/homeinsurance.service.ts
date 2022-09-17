import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Homeinsurance } from '../models/homeinsurance';

@Injectable({
  providedIn: 'root'
})
export class HomeinsuranceService {
  baseurl = "http://localhost:8086/homeinsurance-api/homeinsurance"
  constructor(private _http:HttpClient) { }
  addInsurance=(homeinsurance:Homeinsurance)=>{
    return this._http.post<Homeinsurance[]>(this.baseurl,homeinsurance);
   }
   getHomeinsurance =():Observable<Homeinsurance[]>=>{
    return this._http.get<Homeinsurance[]>(this.baseurl);
}
}
