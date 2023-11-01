import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DialogUsersComponent } from './components/dialog-users/dialog-users.component';
import { UsersTableComponent } from './components/users-table/users-table.component';



@NgModule({
  declarations: [UsersComponent, DialogUsersComponent, UsersTableComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [UsersComponent]
})
export class UsersModule { }