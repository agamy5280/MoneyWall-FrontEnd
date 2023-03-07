import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/Interfaces/user';
import { ProfileService } from 'src/app/services/profile_api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User = {} as User;
  userId:string="";
  errorMsg: string = '';
  SuccessMsg:string=""

  
  // public user: User[] =[];
  constructor(private userService: UserService,private profileService:ProfileService) {

  }
  profileForm = new FormGroup({
    firstName: new FormControl(this.user.fname, [Validators.pattern('[A-Za-z]+')]),
    lastName: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    birthday: new FormControl(''),
    mobileNum: new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(20), Validators.minLength(10)]),
    city: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    state: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    address: new FormControl('', [Validators.minLength(5)]),
    zip: new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(8)]),
    

    
  })



  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.minLength(8)]),
    newPassword: new FormControl('', [Validators.minLength(8)]),
    confirmPassword: new FormControl('', [Validators.minLength(8)])
  });
  passwordMatchValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const newPassword = this.changePasswordForm.get('newPassword')!.value;
      const confirmPassword = this.changePasswordForm.get('confirmPassword')!.value;
  
      if (newPassword !== confirmPassword) {
        return { passwordMismatch: true };
      } else {
        return null;
      }
    };
  }
  ngOnInit() {
    this.changePasswordForm.get('confirmPassword')?.setValidators(this.passwordMatchValidator());

    
     this.user=  this.userService.getUserData();
      this.userId=this.userService.getUserID();


console.log(this.user)

      // this.SuccessMsg=this.userService.SuccessMsg();
   
  }
  // editProfile() {
  //   console.log(this.profileForm.value)
  // }
  changePassword() {
    console.log(this.changePasswordForm.value)
  }


  async editProfile() {
  //   (await this.profileService.UpdateProfileRequest(this.profileForm.value,this.userId)).subscribe({
  //     next: (res:any) => console.log(res),
  //     error: (err:any) => this.errorMsg = err.error,
  //     complete: () => {alert("You have successfully updated your profile");}
  //   })

  (await this.profileService.updateProfileRequest(this.profileForm.value,this.userId)).subscribe({})
  }

  


}
