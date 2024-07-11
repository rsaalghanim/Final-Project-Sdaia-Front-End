import { Component } from '@angular/core';
import {ConsultaionService} from "../consultaion.service";
import {CommonModule, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {DoctorService} from "../doctor.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-consultations',
  templateUrl: './consultations.component.html',
  standalone: true,
  imports: [JsonPipe, NgForOf, NgIf, HttpClientModule, CommonModule, FormsModule],
  styleUrls: ['./consultations.component.css']
})
export class ConsultationsComponent {
  protected data: any[]=[];
  filteredData: any[] = []; // Array to hold filtered data
  searchTerm: string = '';


  constructor(private consultationservice:ConsultaionService) {
  }


  ngOnInit(): void {
    this.consultationservice.getAllConsultations().subscribe(consultations => {
      this.data = consultations;
      this.filteredData = this.data;
      // console.log(this.data);

    })
  }

  filterByPatientId(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredData = this.data; // If no input, show all data
    } else {
      const searchTerm = this.searchTerm.trim().toLowerCase(); // Convert searchTerm to lowercase for case-insensitive comparison
      this.filteredData = this.data.filter(consultation =>

          consultation.patientId.toString().includes(searchTerm)||
      consultation.status.toLowerCase().includes(searchTerm)

      );
    }
  }

}
