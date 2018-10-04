import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from '../../services/general.service';
import { Professional } from '../../models/professional.model';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  professionalList: Professional[]
  patientList: Patient[]

  constructor(private service: GeneralService) {
      
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    this.service.getProfessinals()
                .subscribe(professionals => this.professionalList = professionals,
                           error => console.log("Error :: " + error));

    this.service.getPatients()
                .subscribe(patients => this.patientList = patients, 
                           error => console.log("Error :: " + error));
  }

}
