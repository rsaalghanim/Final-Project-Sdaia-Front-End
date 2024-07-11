import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class DoctorService {
//http://dev-1261.mshome.net:8008/FinalProject/webapi/DOCTORS/
  constructor(private http: HttpClient) { }
  getAllDoctors():Observable<any[]>{
    //@ts-ignore
    return this.http.get<any[]>("http://dev-1261.mshome.net:8008/FinalProject/webapi/DOCTORS/search")
  }
  // getAllDoctorsId():Observable<any[]>{
  //   //@ts-ignore
  //   return this.http.get<any[]>("http://dev-1261.mshome.net:8008/FinalProject/webapi/DOCTORS/search?docId=")
  // }
//http://dev-1261.mshome.net:8008/FinalProject/webapi/DOCTORS/search?docName=

  // getDoctorById(docId: string): Observable<any> {
  //   return this.http.get<any>(`http://dev-1261.mshome.net:8008/FinalProject/webapi/DOCTORS/search?docId=${docId}`);
  // }
  //
  // getDoctorByName(docName: string): Observable<any> {
  //   return this.http.get<any>(`http://dev-1261.mshome.net:8008/FinalProject/webapi/DOCTORS/search?docName=${docName}`);
  // }

}
