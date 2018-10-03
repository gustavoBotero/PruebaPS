import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProfessionalService } from '../../services/professional.service';
import { Professional, LinkedInfo } from '../../models/professional.model';

@Component({
  selector: 'app-create-professional',
  templateUrl: './create-professional.component.html',
  styleUrls: ['./create-professional.component.scss']
})
export class CreateProfessionalComponent implements OnInit {

  public professionals: any;

  constructor(private translate: TranslateService,
              private professionalService: ProfessionalService) { 
    
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
    const data: Professional = this.createModeledData(event);
      this.professionalService.saveProfessional(data).subscribe(
        success => {
            if (success) {

            }
        },
        error => {

        }
    );
  }

  createModeledData(data) {
    const professional = data[0];
    const isLinkedInfo = data[1];    
    const linkedInfo = data[2];

    return new Professional(
      professional.TipoDocumento,
      professional.Documento,
      professional.Nombres,
      professional.Apellidos,
      professional.FechaNacimiento,
      professional.Correo,
      professional.Telefono,
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
