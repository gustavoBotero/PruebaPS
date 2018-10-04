import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-linked-info',
  templateUrl: './linked-info.component.html',
  styleUrls: ['./linked-info.component.scss']
})
export class LinkedInfoComponent implements OnInit, OnChanges {
  @Input() linkedFormVisible: boolean;
  @Output() linkedFormValue = new EventEmitter();
  @Output() isLinkedFormValid = new EventEmitter();

  form: FormGroup;
  emailValidator = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  maxLength = 150;

  relationShipTypes = [
    { id: 0, type: 'Esposo/a' },
    { id: 1, type: 'Madre' },
    { id: 2, type: 'Hijo' }
  ]

  constructor(private fb: FormBuilder) {
    this.generateForm();

    this.form.valueChanges.subscribe(c => {
      this.linkedFormValue.emit(this.form.value);
      this.isLinkedFormValid.emit(this.form.valid);
    });

    this.form.statusChanges.subscribe(c => {
      this.linkedFormValue.emit(this.form.value);
      this.isLinkedFormValid.emit(this.form.valid);      
    });    
  }
 
  ngOnInit() {
    
  }

  ngOnChanges(changes) {

    if (changes && changes.linkedFormVisible && changes.linkedFormVisible.currentValue) {
      this.setFormRequired(changes.linkedFormVisible.currentValue);
    } else {
      this.setFormRequired(false);
    }

    this.linkedFormValue.emit(this.form.value);
    this.isLinkedFormValid.emit(this.form.valid);    
  }

  generateForm() {
    this.form = this.fb.group({
      Nombres: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      Apellidos: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      relationShipType: new FormControl('',[
        Validators.required
      ]),

      Telefono: new FormControl('',[
        Validators.minLength(7),
        Validators.maxLength(10),
      ]),

      Correo: new FormControl('',[
        Validators.maxLength(this.maxLength),
        Validators.pattern(this.emailValidator)
      ]),
    });
  }

  setFormRequired(required: boolean): void {
    if (required) {
      this.Nombres.setValidators(
        Validators.compose([
          Validators.required,
          Validators.maxLength(this.maxLength)
        ])
      );

      this.Apellidos.setValidators(
        Validators.compose([
          Validators.required,
          Validators.maxLength(this.maxLength)
        ])
      );

      this.relationShipType.setValidators(
        Validators.compose([
          Validators.required
        ])
      );

    } else {
      this.Nombres.clearValidators();
      this.Apellidos.clearValidators();
      this.relationShipType.clearValidators();
    }
    this.form.updateValueAndValidity(); 
  }

  setPhone(status) {
    status.checked ? this.Telefono.enable() : this.Telefono.disable();
  }

  get Nombres() { return this.form.get('Nombres'); }
  get Apellidos() { return this.form.get('Apellidos'); }
  get relationShipType() { return this.form.get('relationShipType'); }
  get Correo() { return this.form.get('Correo'); }
  get Telefono() { return this.form.get('Telefono'); }

  hasError(formControl: string, error: string) { 
    return this.form.get(formControl).hasError(error);
  }
  
}
