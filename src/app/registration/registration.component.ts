import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  RegistrationForm= new FormGroup({
    name: new FormControl("",[Validators.required,Validators.minLength(4)]),
    age : new FormControl(0,[Validators.min(20),Validators.max(40)]),
    email : new FormControl("",[Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/),Validators.required])
  });

  get NameValid(){
    return this.RegistrationForm.controls['name'].valid ;
  }
  get AgeValid(){
    return this.RegistrationForm.controls['age'].valid ;
  }
  get EmailValid(){
    return this.RegistrationForm.controls['email'].valid ;
  }
  check(){
    console.log(this.RegistrationForm);
    console.log(this.RegistrationForm.controls['age'].valid);
    console.log(this.RegistrationForm.controls['email'].valid);
    alert("RegistrationForm.valid = "+(this.RegistrationForm.valid));
  }

}
