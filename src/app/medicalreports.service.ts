import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class MedicalreportsService {

  constructor(private http: HttpClient) { }
  getAllMedical():Observable<any[]> {
    //@ts-ignore
    return this.http.get<any[]>("http://dev-1261.mshome.net:8008/FinalProject/webapi/MEDICAL_REPORTS")
  }
  }
