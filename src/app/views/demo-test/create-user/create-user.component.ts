import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MockService } from '../../../mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  lstUser: any = [];
  isChecked: boolean = false;
  isdisabled: boolean = true;

  // get Colour() {
  //   return this._mK.colour;
  // }

  // set Colour(value) {
  //   this._mK.colour = value;
  // }

  saveRecord() {
    for (const i in this._mK.custForm.controls) {
      this._mK.custForm.controls[i].markAllAsTouched();
    }
    if (this._mK.custForm.valid) {
      const formVal = this._mK.custForm.value;
      const index = this.lstUser.findIndex(x => x.id == formVal.id);
      if (index > -1) {
        this.lstUser.splice(index, 1, formVal);
      } else {
        formVal.id = (new Date().getTime());
        this.lstUser.push(formVal);
        this.lstUser.map(x => {
          x.isSelect = this.isChecked;
        });
        this._mK.userDetails(this.lstUser);
      }
      this._router.navigate(['demo/users']);
    }
  }

  constructor(private _mK: MockService, private _router: Router) { }

  ngOnInit(): void {
    this._mK.custForm.reset();
    this.lstUser = this._mK.custInfo();
  }

}
