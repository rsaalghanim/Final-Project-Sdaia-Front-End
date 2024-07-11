import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SchedualService {

  constructor(private http: HttpClient) { }
  gatAllSchedual():Observable<any[]>{
    //@ts-ignore
    return this.http.get<any[]>("http://dev-1261.mshome.net:8008/FinalProject/webapi/SCHEDULES/")
  }

  getDoctorByAval(docAval: string): Observable<any> {
    return this.http.get<any>(`  http://dev-1261.mshome.net:8008/FinalProject/webapi/DOCTORS/search?docAval=${docAval}`);
  }
}
