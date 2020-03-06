import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DemoTestModule } from './views/demo-test/demo-test.module';
const emailPattern = '[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,63}';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  constructor(private fb: FormBuilder) {
    console.log('call Mock Service');
    this.fbValidation();
  }


  custForm: FormGroup;
  lstHeader: any = ['', 'First Name', 'Last Name', 'Mobile No.', 'Email', 'Actions'] //header


  custInfo() {
    return this.arrayData;
  }

   arrayData : any = [];
   userDetails(data){
    this.arrayData=data;
   }


  fbValidation() {
    this.custForm = this.fb.group({
      fname: [null, Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{2,}')])],
      lname: [null, Validators.compose([Validators.required, Validators.pattern('[A-Za-z]{2,}')])],
      mono: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]\\d{9}')])],
      email: [null, Validators.compose([Validators.required, Validators.pattern(emailPattern)])],
    });
  }
}
