import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-user-profile',
  imports: [FormsModule, ReactiveFormsModule, MatFormFieldModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss',
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: [''],
      lastName: ['', Validators.required],
      age: [''],
      dob: [''],
      email: ['', [Validators.required, Validators.email]],
      occupation: [''],
      maritalStatus: [''],
      userName: [''],
      password: ['', Validators.minLength(6)],
    });
  }

  ngOnInit() {}

  public onSubmit(): void {}
}
