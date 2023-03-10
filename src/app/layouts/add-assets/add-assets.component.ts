import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';

@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss'],
})
export class AddAssetsComponent {
  errorMsg: any;
  constructor(
    private formBuilder: FormBuilder,
    private service: UserAssetsService
  ) {}
  assetOtherForm = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    document: new FormControl('', Validators.required),
  });

  onAssetOtherCreate() {
    this.service.addOtherAssetRequest(this.assetOtherForm.value).subscribe({
      next: (res) => console.log(res),
      error: (err) => (this.errorMsg = err.error),
      complete: () => {
        alert('Your request has been sent Successfully!');
      },
    });
  }
}
