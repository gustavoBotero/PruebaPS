import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit, OnChanges {

  @Input() patientList: Patient[];

  documentTypes = [
    { id: 0, type: 'CC' },
    { id: 1, type: 'TI' },
    { id: 2, type: 'CE' }
  ]

  epsEntity = [
    { id: 0, name: 'SURA' },
    { id: 1, name: 'Cafesalud' },
    { id: 2, name: 'Nueva EPS' }
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

    if (changes.patientList && changes.patientList.currentValue) {
      this.patientList = changes.patientList.currentValue;
    }
  }

  getDocumentType(id: number): string {
    if (id) {
      return this.documentTypes.filter(t => t.id === id)[0].type;
    }
  }

  getEps(id: number): string {
    if (id) {
      return this.epsEntity.filter(t => t.id === id)[0].name;
    }
  }

  getRelationship(id: number): string {
    if (id) {
      return this.relationShipTypes.filter(t => t.id === id)[0].type;
    }
  }
}
