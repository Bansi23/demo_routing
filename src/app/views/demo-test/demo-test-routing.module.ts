import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  // {
  //   path: '',
  //   data: { title: 'User' },
  //   children: [
  //     { path: '', redirectTo: 'users', pathMatch: 'full' },
  //     { path: 'users', component: UserListComponent, data: { title: 'Users' } },
  //     { path: 'create-user', component: CreateUserComponent, data: { title: 'Create User' } },
  //   ]
  // }

  {
    path: '',
    data: { title: 'Demo' },
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UserListComponent, data: { title: 'Users' } },
      { path: 'add-user', component: CreateUserComponent, data: { title: 'Create User' } },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoTestRoutingModule { }
