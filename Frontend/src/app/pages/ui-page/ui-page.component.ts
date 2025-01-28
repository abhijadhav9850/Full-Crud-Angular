import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-page',
  standalone: true,
  imports: [NgIf,ReactiveFormsModule],
  templateUrl: './ui-page.component.html',
})
export class UiPageComponent {

  recordForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.recordForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.recordForm.valid) {
      console.log('Form Values:', this.recordForm.value);
    } else {
      console.log('Form is invalid');
    }
  }



}
