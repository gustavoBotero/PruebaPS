import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { GeneralInfo, LinkedInfo } from '../../models/general-info.model';

@Component({
  selector: 'app-create-professional',
  templateUrl: './create-professional.component.html',
  styleUrls: ['./create-professional.component.scss']
})
export class CreateProfessionalComponent implements OnInit {

  public professionals: any;

  constructor(private translate: TranslateService) { 
    
  }

  ngOnInit() {
    
  }

  getTitle(): string {
    let text = '';
    this.translate.get('create_professional')
      .subscribe(res => text = res);
    return text;
  }

  getLabelReference(): string {
    let text = '';
    this.translate.get('general_component.linked_info_reference')
      .subscribe(res => text = res);
    return text;
  }

  saveData(event) {
    const data: GeneralInfo = this.createModeledData(event);
    this.professionals.push(data);
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
