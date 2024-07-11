import { Component } from '@angular/core';
import {DoctorService} from "../doctor.service";
import {SchedualService} from "../schedual.service";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-scheduals',
  templateUrl: './scheduals.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./scheduals.component.css']
})
export class SchedualsComponent {
  protected data: any[]=[];
  filteredData: any[] = []; // Array to hold filtered data
  searchTerm: string = '';

  constructor(private schedualsevice:SchedualService) {
  }

  ngOnInit(): void {
    this.schedualsevice.gatAllSchedual().subscribe(scheduals => {
      this.data = scheduals;
      this.filteredData = this.data;
      // console.log(this.data);

    })
  }

  filterByIdOrAval(): void {
    if (this.searchTerm.trim() === '') {
      this.filteredData = this.data; // If no input, show all data
    } else {
      const searchTerm = this.searchTerm.trim().toLowerCase(); // Convert searchTerm to lowercase for case-insensitive comparison
      this.filteredData = this.data.filter(schedual =>
          schedual.doctorId.toString().includes(searchTerm)
          //schedual.isAvailable.toString().includes(searchTerm)

      );
    }
  }

}
