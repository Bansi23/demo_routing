import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MockService } from '../../../mock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  lstUser: any = [];
  isChecked: boolean = false;
  updateIndex: number = -1;
  editData: any = null;
  isdisabled: boolean = true;
  lstHeader: any = [];

  getData(data, evt?) {
    let d = {
      id: data.id,
      fname: data.fname,
      lname: data.lname,
      mono: data.mono,
      email: data.email,
      isselect: evt ? evt : data.isSelect
    };
    return d;
  }

  getSelectval(evt, i) {
    let data = this.lstUser[i];
    //this.lstUser[i] = this.getData(data, evt);
    this.lstUser[i] = {
      id: data.id,
      fname: data.fname,
      lname: data.lname,
      mono: data.mono,
      email: data.email,
      isSelect: evt
    };
  }

  deleteSelectedRecord() {
    const isAvailble = this.lstUser.filter(x => x.isSelect == false);
    this.lstUser = isAvailble;
    this._mK.userDetails(isAvailble);
  }

  editRecord(i) {
    this.updateIndex = i;
    if (i > -1) {
      let data = this.lstUser[i];
      this.lstUser[i] = this.getData(data);
      this.editData = this.getData(data);
    };
  }

  saveChanges(i) {
    for (const i in this._mK.custForm.controls) {
      this._mK.custForm.controls[i].markAllAsTouched();
    }
    if (this._mK.custForm.valid) {
      let data = this.lstUser[i];
      this.lstUser[i] = this.getData(data);
      this.updateIndex = -1;
    }
  }

  cancelEdit(i) {
    this.lstUser[i] = this.editData;
    this.editData = null;
    this.updateIndex = -1;
  }

  deleteRecord(i) {
    this.lstUser.splice(i, 1)
  }


  // get Colour() {
  //   return this._mK.colour;
  // }

  // set Colour(value) {
  //   this._mK.colour = value;
  // }

  constructor(private _mK: MockService, private _router: Router) { }

  ngOnInit(): void {
    this.lstHeader = this._mK.lstHeader;
    this.lstUser = this._mK.custInfo();

  }

}
