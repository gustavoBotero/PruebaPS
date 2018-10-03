import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnChanges {

  @Input() professional: any;
  @Input() patient: any;

  constructor() { 
    
  }

  ngOnInit() {
    
  }

  ngOnChanges(changes) {
    if (!changes) {
      return;
    }

    if (changes.patient && changes.patient.currentValue) {
      this.patient = changes.patient.currentValue;
    }

    if (changes.professional && changes.professional.currentValue) {
      this.professional = changes.professional.currentValue;
    }
  }

}
