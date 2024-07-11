import { Component } from '@angular/core';
import {MedicalreportsService} from "../medicalreports.service";
import {CommonModule, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-medicalreport',
  templateUrl: './medicalreport.component.html',
  standalone: true,
  imports: [JsonPipe, NgForOf, NgIf, HttpClientModule, CommonModule, FormsModule],
  styleUrls: ['./medicalreport.component.css']
})
export class MedicalreportComponent {

  protected data: any[]=[];
  filteredData: any[] = []; // Array to hold filtered data
  searchTerm: string = '';

  constructor(private medicalservice:MedicalreportsService) {
  }


  ngOnInit(): void {
    this.medicalservice.getAllMedical().subscribe(meds => {
      this.data = meds;
      this.filteredData = this.data;
      // console.log(this.data);

    })
  }

  filterByPatientId(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredData = this.data; // If no input, show all data
    } else {
      const searchTerm = this.searchTerm.trim().toLowerCase(); // Convert searchTerm to lowercase for case-insensitive comparison
      this.filteredData = this.data.filter(med =>
          med.patientId.toString().includes(searchTerm)
      );
    }
  }
}
