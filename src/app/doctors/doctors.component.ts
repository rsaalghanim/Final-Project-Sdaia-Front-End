import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../doctor.service";
import {SchedualsComponent} from "../scheduals/scheduals.component";
import {CommonModule, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {SchedualService} from "../schedual.service";
import {FormsModule} from "@angular/forms";


@Component({
  selector: 'app-doctors',
  templateUrl: `./doctors.component.html`,
  standalone: true,
  imports: [JsonPipe, NgForOf, NgIf, HttpClientModule, CommonModule, FormsModule],
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit{

 // protected data: any[] | undefined;
  protected doctor: any | undefined;
  protected docAval: any | undefined;
  protected docName: any | undefined;

  protected data: any[]=[];
  filteredData: any[] = []; // Array to hold filtered data
  searchTerm: string = '';

  constructor(private doctorservice:DoctorService, private schedualsevice:SchedualService) {
  }

  // ngOnInit(){
  //   this.doctorservice.getAllDoctors().subscribe(doctors => {
  //     this.data = doctors;
  //     console.log(this.data)
  //   } )
  // }

  ngOnInit(): void {
    this.doctorservice.getAllDoctors().subscribe(doctors => {
      this.data = doctors;
      this.filteredData = this.data;
      // console.log(this.data);

    })
  }


  filterByIdNameAndSpecialty(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredData = this.data; // If no input, show all data
    } else {
      const searchTerm = this.searchTerm.trim().toLowerCase(); // Convert searchTerm to lowercase for case-insensitive comparison
      this.filteredData = this.data.filter(doctor =>
          doctor.doctorId.toString().includes(searchTerm) ||
          doctor.name.toLowerCase().includes(searchTerm) ||
          doctor.specialty.toLowerCase().includes(searchTerm)
      );
    }
  }

  // searchDoctorById(docId: string) {
  //   this.doctorservice.getDoctorById(docId).subscribe(doctor => {
  //     this.doctor = doctor;
  //     console.log(this.doctor);
  //   });
  // }
  //
  // searchDoctorByName(docName: string) {
  //   this.doctorservice.getDoctorByName(docName).subscribe(docName => {
  //     this.docName = docName;
  //     console.log(this.docName);
  //   });
  // }

  searchDoctorByAval(docAval: string) {
    this.schedualsevice.getDoctorByAval(docAval).subscribe(docAval => {
      this.doctor = docAval;
      console.log(this.doctor);
    });
  }



}
