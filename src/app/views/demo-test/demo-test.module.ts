import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoTestRoutingModule } from './demo-test-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import {FormsModule , ReactiveFormsModule} from '@angular/forms'
import { MockService } from '../../mock.service';


@NgModule({
  declarations: [UserListComponent, CreateUserComponent],
  imports: [
    CommonModule,
    DemoTestRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers : [MockService]
})
export class DemoTestModule { }
