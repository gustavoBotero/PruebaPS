import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ProfessionalService } from '../../services/professional.service';
import { Professional, LinkedInfo } from '../../models/professional.model';
import { Log } from '../../models/log.model';
import { LogService } from '../../services/log.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-professional',
  templateUrl: './create-professional.component.html',
  styleUrls: ['./create-professional.component.scss']
})
export class CreateProfessionalComponent implements OnInit {

  public professionals: any;

  constructor(private translate: TranslateService,
              private professionalService: ProfessionalService,
              private logService: LogService,
              public snackBar: MatSnackBar) { 
    
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
              var actualDate = new Date().toLocaleString();
              const log = new Log(
                "CrearProfesional",
                "Profesionales",
                actualDate,
                data['Nombres']+data['Apellidos'],
              )
              let logData = JSON.stringify(log);
              this.logService.saveLog(logData).subscribe(
                success => { })
              this.openSnackBar("Profesional creado exitosamente", "Aceptar")
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
