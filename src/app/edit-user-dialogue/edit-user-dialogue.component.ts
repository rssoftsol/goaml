import {Component, Inject} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User, UsersService} from "../service/users.service";

@Component({
  selector: 'app-edit-user-dialogue',
  templateUrl: './edit-user-dialogue.component.html',
  styleUrls: ['./edit-user-dialogue.component.css']
})
export class EditUserDialogueComponent {
  role: string;
  firstName: string;
  lastName: string;
  constructor(
    public dialogRef: MatDialogRef<EditUserDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    private userService : UsersService) {
    this.role = data.role;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmEdit(): void {
    this.data.lastName = this.lastName;
    this.data.firstName = this.firstName;
    this.data.role = this.role;
    this.userService.updateUser(this.data).subscribe(value => {
      this.dialogRef.close(true);
    })
  }

}
