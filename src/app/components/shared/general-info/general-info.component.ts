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
    this.linkedFormVisible = false;
  }

  generateForm() {
    this.form = this.fb.group({
      documentType: new FormControl(''),

      document: new FormControl(''),

      firstName: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      lastName: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLength),
      ]),

      birthDate: new FormControl('',[
        Validators.required
      ]),

      email: new FormControl('',[
        Validators.maxLength(this.maxLength),
        Validators.pattern(this.emailValidator)
      ]),

      phone: new FormControl(
        {value: '', disabled: false},[
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10),
      ]),

      personalHistory: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLengthInput),
      ]),

      familyHistory: new FormControl('',[
        Validators.required,
        Validators.maxLength(this.maxLengthInput),
      ]),

      eps: new FormControl(''),
    });
  }

  setPhone(status) {
    status.checked ? this.phone.enable() : this.phone.disable();
  }

  showLinkedInfoForm(show) {
    this.linkedFormVisible = !show.checked;
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

  get documentType() { return this.form.get('documentType'); }
  get document() { return this.form.get('document'); }
  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get birthDate() { return this.form.get('birthDate'); }
  get email() { return this.form.get('email'); }
  get phone() { return this.form.get('phone'); }
  get personalHistory() { return this.form.get('personalHistory'); }
  get familyHistory() { return this.form.get('familyHistory'); }
  get eps() { return this.form.get('eps'); }
  
}
