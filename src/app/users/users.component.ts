import {Component, OnInit} from '@angular/core';
import {User, UsersService} from '../service/users.service';
import {ConfirmDialogueComponent} from '../confirm-dialogue/confirm-dialogue.component';
import {MatDialog} from '@angular/material/dialog';
import {EditUserDialogueComponent} from '../edit-user-dialogue/edit-user-dialogue.component';
import {CreateUserDialogueComponent} from '../create-user-dialogue/create-user-dialogue.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dataSource: User[];
  displayedColumns: string[] = ['emailId', 'firstName', 'lastName', 'role', 'action'];

  constructor(private userService: UsersService, private dialog: MatDialog) {
  }

  openConfirmDialog(user: User): void {
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.userService.deleteUser(result.emailId).subscribe(value => {
          this.userService.getUsers().subscribe(users => {
            this.dataSource = users;
          });
        });
      }
    });
  }

  openEditDialog(user: User): void {
    console.log('user:::');
    console.log(user);
    const dialogRef = this.dialog.open(EditUserDialogueComponent, {
      width: '250px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.userService.getUsers().subscribe(value => {
          this.dataSource = value;
        });
      }
    });
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CreateUserDialogueComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if (result) {
        this.userService.getUsers().subscribe(value => {
          this.dataSource = value;
        });
      }
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(value => {
      this.dataSource = value;
    });
  }

}
