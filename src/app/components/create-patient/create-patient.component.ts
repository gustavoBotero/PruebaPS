import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralInfo, LinkedInfo } from '../../models/general-info.model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.scss']
})
export class CreatePatientComponent implements OnInit {

  public patient: any;

  constructor(private translate: TranslateService) { 

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
    const data: GeneralInfo = this.createModeledData(event);
    this.patient.push(data);
  }

  createModeledData(data) {
    const generalInfo = data[0];
    const isLinkedInfo = data[1];    
    const linkedInfo = data[2];

    return new GeneralInfo(
      generalInfo.documentType,
      generalInfo.document,
      generalInfo.firstName,
      generalInfo.lastName,
      generalInfo.birthDate,
      generalInfo.email,
      generalInfo.phone,
      isLinkedInfo,
      this.createLinkedInfo(isLinkedInfo, linkedInfo)
    );
  }

  createLinkedInfo(isLinkedInfo, linkedInfo) {
    if (!isLinkedInfo) {
      return null;
    }

    return new LinkedInfo(
      linkedInfo.firstName,
      linkedInfo.lastName,
      linkedInfo.relationShipType,
      linkedInfo.email,
      linkedInfo.phone
    );
  }
}