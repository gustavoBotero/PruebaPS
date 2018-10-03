import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralService } from '../../services/general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  professionals: any;
  patient: any;

  professionalList: any = []
  pacientList: any = []

  constructor(private service: GeneralService) {
      
  }

  ngOnInit() {
    this.getData();
  }

  getData(): void {
    
  }
}
