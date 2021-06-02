import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {User, UsersService} from "../service/users.service";

@Component({
  selector: 'app-create-user-dialogue',
  templateUrl: './create-user-dialogue.component.html',
  styleUrls: ['./create-user-dialogue.component.css']
})
export class CreateUserDialogueComponent {
  role: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;

  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogueComponent>,
    private userService : UsersService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  add(): void {
    const user = new User(this.username, this.firstName, this.lastName, this.password, this.role);
    this.userService.addUser(user).subscribe(value => {
      this.dialogRef.close(true);
    });
  }

}
