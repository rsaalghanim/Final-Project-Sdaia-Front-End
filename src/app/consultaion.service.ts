import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConsultaionService {

  constructor(private http: HttpClient) { }

  getAllConsultations():Observable<any[]>{
    //@ts-ignore
    return this.http.get<any[]>("http://dev-1261.mshome.net:8008/FinalProject/webapi/CONSULTATIONS")
  }
}
