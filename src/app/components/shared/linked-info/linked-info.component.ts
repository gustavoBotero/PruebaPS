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

    this.form.valueChanges.subscribe(c => this.linkedFormValue.emit(this.form.value));

    this.form.statusChanges.subscribe(c => this.linkedFormValue.emit(this.form.value));    
  }
 
  ngOnInit() {
    
  }

  ngOnChanges(changes) {
    if (!this.form) {
      return;
    }

    this.linkedFormValue.emit(this.form.value);
  }

  generateForm() {
    this.form = this.fb.group({
      firstName: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      lastName: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      relationShipType: new FormControl('',[
        Validators.required]),

      email: new FormControl('',[
        Validators.maxLength(this.maxLength),
        Validators.pattern(this.emailValidator)
      ]),

      phone: new FormControl('',[
        Validators.minLength(7),
        Validators.maxLength(10),
      ]),
    });
  }

  setPhone(status) {
    status.checked ? this.phone.enable() : this.phone.disable();
  }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get relationShipType() { return this.form.get('relationShipType'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  
}
