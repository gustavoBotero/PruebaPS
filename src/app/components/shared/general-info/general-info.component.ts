import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { GeneralInfo } from '../../../models/general-info.model';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss']
})
export class GeneralInfoComponent implements OnInit {

  @Input() linkedInfoLabel: string;
  @Input() title: string;
  @Input() patientDataVisible: boolean;;

  @Output() save = new EventEmitter<any>();

  form: FormGroup;
  emailValidator = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  maxLength = 150;
  maxLengthInput = 200;
  maxDate = new Date();

  linkedFormVisible: boolean;
  linkedForm: any;

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

  constructor(private fb: FormBuilder) { }
 
  ngOnInit() {
    this.generateForm();
    this.linkedFormVisible = true;
  }

  generateForm() {
    this.form = this.fb.group({
      TipoDocumento: new FormControl('',[
        Validators.required
      ]),

      Documento: new FormControl('',[
        Validators.required
      ]),

      Nombres: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      Apellidos: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      FechaNacimiento: new FormControl('',[
        Validators.required
      ]),

      Correo: new FormControl('',[
        Validators.maxLength(this.maxLength),
        Validators.pattern(this.emailValidator)
      ]),

      Telefono: new FormControl(
        {value: '', disabled: false},[
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10),
      ]),

      AntecedentesPersonales: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLengthInput),
      ]),

      AntecedentesFamiliares: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLengthInput),
      ]),

      EPS: new FormControl(''),
    });
  }

  setPhone(status) {
    status.checked ? this.Telefono.enable() : this.Telefono.disable();
  }

  showLinkedInfoForm(show) {
    this.linkedFormVisible = show.checked;
  }

  saveData() {
    const data = [
      this.form.value,
      this.linkedFormVisible,
      this.linkedFormVisible ? this.linkedForm : null
    ];
    this.save.emit(data);
  }

  linkedFormValue(event) {
    this.linkedForm = event;
  }

  get TipoDocumento() { return this.form.get('TipoDocumento'); }
  get Documento() { return this.form.get('Documento'); }
  get Nombres() { return this.form.get('Nombres'); }
  get Apellidos() { return this.form.get('Apellidos'); }
  get FechaNacimiento() { return this.form.get('FechaNacimiento'); }
  get Correo() { return this.form.get('Correo'); }
  get Telefono() { return this.form.get('Telefono'); }
  get AntecedentesPersonales() { return this.form.get('AntecedentesPersonales'); }
  get AntecedentesFamiliares() { return this.form.get('AntecedentesFamiliares'); }
  get EPS() { return this.form.get('EPS'); }

  hasError(formControl: string, error: string) { 
    return this.form.get(formControl).hasError(error);
  }
  
}
