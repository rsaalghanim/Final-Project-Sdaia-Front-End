import { Component } from '@angular/core';
import {PatientService} from "../patient.service";
import {CommonModule, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    standalone: true,
    imports: [JsonPipe,NgForOf, NgIf, HttpClientModule,CommonModule],
    styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
    protected data: any[] | undefined;

    constructor(private patientservice:PatientService) {
    }

    ngOnInit(){
        this.patientservice. getAllPatients().subscribe(patients => {
            this.data = patients;
            console.log(this.data)
        } )
    }

}
