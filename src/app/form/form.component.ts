import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  public cadastroForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['' , [Validators.required , Validators.minLength(4)]],
  });

  publicsubmitForm() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm.value); 
      console.log(this.cadastroForm.value.firstName);
      console.log(this.cadastroForm.value.lastName);
    }
  }
}
