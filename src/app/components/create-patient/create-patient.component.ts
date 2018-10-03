import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Patient, LinkedInfo } from '../../models/patient.model';
import { PatientService } from '../../services/pacient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  public patient: any;

  constructor(private translate: TranslateService, private patientService: PatientService) { 

  }

  ngOnInit() {
  }

  getTitle(): string {
    let text = '';
    this.translate.get('create_patient')
      .subscribe(res => text = res);
    return text;
  }

  getLabelReference(): string {
    let text = '';
    this.translate.get('general_component.linked_info_companion')
      .subscribe(res => text = res);
    return text;
  }

  saveData(event) {
    const data: Patient = this.createModeledData(event);
      this.patientService.savePatient(data).subscribe(
        success => {
            if (success) {

            }
        },
        error => {

        }
    );
  }

  createModeledData(data) {
    const patient = data[0];
    const isLinkedInfo = data[1];    
    const linkedInfo = data[2];

    return new Patient(
      patient.TipoDocumento,
      patient.Documento,
      patient.Nombres,
      patient.Apellidos,
      patient.FechaNacimiento,
      patient.Correo,
      patient.Telefono,
      patient.AntecedentesPersonales,
      patient.AntecedentesFamiliares,
      patient.EPS,
      isLinkedInfo,
      this.createLinkedInfo(isLinkedInfo, linkedInfo)
    );
  }

  createLinkedInfo(isLinkedInfo, linkedInfo) {
    if (!isLinkedInfo) {
      return null;
    }

    return new LinkedInfo(
      linkedInfo.Nombres,
      linkedInfo.Apellidos,
      linkedInfo.relationShipType,
      linkedInfo.Correo,
      linkedInfo.Telefono
    );
  }
}