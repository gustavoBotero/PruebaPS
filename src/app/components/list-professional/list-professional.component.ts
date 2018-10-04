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

  relationShipTypes = [
    { id: 0, type: 'Esposo/a' },
    { id: 1, type: 'Madre' },
    { id: 2, type: 'Hijo' },
    { id: 3, type: 'Hermano/a' },
    { id: 4, type: 'Amigo/a' },
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
    if (type) {
      return this.documentTypes.filter(t => t.id === type)[0].type;
    }
  }

  getRelationship(id: number): string {
    if (id) {
      return this.relationShipTypes.filter(t => t.id === id)[0].type;
    }
  }
}
