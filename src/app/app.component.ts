import { Component } from '@angular/core';
import { RouterOutlet} from "@angular/router";
import {DoctorsComponent} from "./doctors/doctors.component";
//import {CommandModule} from "@angular/cli/src/command-builder/command-module";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {JsonPipe, NgForOf, NgIf} from "@angular/common";
import {PatientsComponent} from "./patients/patients.component";
import {ConsultationsComponent} from "./consultations/consultations.component";
import {SchedualsComponent} from "./scheduals/scheduals.component";
import {MedicalreportComponent} from "./medicalreport/medicalreport.component";
import {LoginComponent} from "./login/login.component";

@Component({
  standalone: true,
  imports: [DoctorsComponent, PatientsComponent, CommonModule, HttpClientModule, JsonPipe, NgForOf, NgIf, RouterOutlet, ConsultationsComponent, SchedualsComponent, MedicalreportComponent, LoginComponent],
  selector: 'app-root',
  template: `
  <header class="header">
    <h1>Medical Consultation Platform</h1>
    <h3>By:Ragad Alghanim </h3>
  </header>
  <nav class="tab-nav">
    <a href="#" (click)="showComponnet('doctors'); $event.preventDefault()" [class.active]="currentComponnet === 'doctors'">Doctors</a>
<!--    <a href="#" (click)="showComponnet('patients'); $event.preventDefault()" [class.active]="currentComponnet === 'patients'">Patients</a>-->
    <a href="#" (click)="showComponnet('consultations'); $event.preventDefault()" [class.active]="currentComponnet === 'consultations'">Consultation</a>
    <a href="#" (click)="showComponnet('scheduals'); $event.preventDefault()" [class.active]="currentComponnet === 'scheduals'">Scheduals</a>
    <a href="#" (click)="showComponnet('medicalreport'); $event.preventDefault()" [class.active]="currentComponnet === 'medicalreport'">Medical Report</a>
    <a href="#" (click)="showComponnet('login'); $event.preventDefault()" [class.active]="currentComponnet === 'login'" class="login-tab">Login</a>
  </nav>


  <section>
    <app-doctors *ngIf="currentComponnet === 'doctors'"></app-doctors>
    <app-patients *ngIf="currentComponnet === 'patients'"></app-patients>
    <app-consultations *ngIf="currentComponnet === 'consultations'"></app-consultations>
    <app-scheduals *ngIf="currentComponnet === 'scheduals'"></app-scheduals>
    <app-medicalreport *ngIf="currentComponnet === 'medicalreport'"></app-medicalreport>
    <app-login *ngIf="currentComponnet === 'login'"></app-login>
  </section>
  `
  ,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  currentComponnet: string ='';
  showComponnet(component:string){
    this.currentComponnet=component;
  }
 // title = 'homes';
}
