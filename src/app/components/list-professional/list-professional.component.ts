import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Professional } from '../../models/professional.model';

@Component({
  selector: 'app-list-professional',
  templateUrl: './list-professional.component.html',
  styleUrls: ['./list-professional.component.scss']
})
export class ListProfessionalComponent implements OnInit, OnChanges {

  @Input() professionalList: Professional[];

  documentTypes = [
    { id: 0, type: 'CC' },
    { id: 1, type: 'TI' },
    { id: 2, type: 'CE' }
  ]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (!changes) {
      return;
    }

    if (changes.professionalList && changes.professionalList.currentValue) {
      this.professionalList = changes.professionalList.currentValue;
    }
  }

  getDocumentType(type: number): string {
    return this.documentTypes.filter(t => t.id === type)[0].type;
  }
}
