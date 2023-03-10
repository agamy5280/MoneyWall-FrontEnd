import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/Interfaces/user';
import { ProfileService } from 'src/app/services/profile_api.service';
import { Router } from '@angular/router';

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
  nonWhitespaceRegExp: RegExp = new RegExp("\\S");


  
  // public user: User[] =[];
  constructor(private userService: UserService,private profileService:ProfileService,private _router: Router) {

  }

  profileForm = new FormGroup({
    userName: new FormControl("", [Validators.maxLength(22)]),
    firstName: new FormControl("", [Validators.pattern('[A-Za-z]+')]),
    lastName: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    birthday: new FormControl(''),
    mobileNum: new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(20), Validators.minLength(10)]),
    city: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    state: new FormControl('', [Validators.pattern('[A-Za-z]+')]),
    address: new FormControl('', [Validators.minLength(5)]),
    zip: new FormControl('', [Validators.pattern('[0-9]+'), Validators.maxLength(8)]),  
  })

  
  settingForm = new FormGroup({
    email: new FormControl('',[Validators.email,Validators.required, Validators.pattern(this.nonWhitespaceRegExp)]),
    password: new FormControl(),
  })



  changePasswordForm = new FormGroup({
    oldPassword: new FormControl('', [Validators.minLength(8), Validators.required]),
    newPassword: new FormControl('', [Validators.minLength(8), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(8), Validators.required])
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
    this.user=  this.userService.getUserData();
    this.userId=this.userService.getUserID();

    this.profileForm.setValue(
     {
       userName: this.user.username,
       firstName:this.user.fname,
       lastName: this.user.lname,
       birthday:this.user.birthday,
       mobileNum:this.user.mobile,
       city: this.user.city,
       state: this.user.country,
       address: this.user.address,
       zip: this.user.zip
     });


   
   
 

    this.changePasswordForm.get('confirmPassword')?.setValidators(this.passwordMatchValidator());

     this.getUser()
     console.log(this.user)
     


   
  }

  async changePassword() {
    (await this.profileService.changeProfilePasswordRequest(this.changePasswordForm.value,this.userId)).subscribe({
      next: (res:any) => console.log(res),
      error: (err:any) =>  {alert("Your password does not match any account . Please try again")},
      complete: () => {alert("Your profile has been updated successfully !"), this._router.navigate(['home']);}

    })  
  }


  async editProfile() {
    (await this.profileService.updateProfileRequest(this.profileForm.value,this.userId)).subscribe({
      next: (res:any) => console.log(res),
      error: (err:any) => this.errorMsg = err.error,
      complete: () => {alert("Your profile has been updated successfully !"), this._router.navigate(['home']);}

    })}


  
  async deleteAcount() {
    (await this.profileService.deleteAccountRequest(this.settingForm.value,this.userId)).subscribe({
      next: (res:any) => console.log(res),
      error: (err:any) =>  {alert("Your email and your password does not match . Please try again")},
      complete: () => {alert("Your account deleted successfully"), this._router.navigate(['login']);}

    })}



    async getUser() {
      (await this.profileService.getUserRequest(this.userId)).subscribe({
        next: (res:any) => console.log(this.user=res["user"]),
        error: (err:any) =>  {},
        complete: () => {}
  
      })  
    }
 
}
