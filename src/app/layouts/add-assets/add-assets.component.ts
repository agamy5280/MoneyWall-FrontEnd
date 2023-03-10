import { formatDate } from '@angular/common';
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
  constructor(private service: UserAssetsService) {}
  assetOthername: string = '';
  assetOtherdescription: string = '';
  assetOtherdocument: any;
  getOtherName(name: string) {
    this.assetOthername = name;
  }
  getOtherDescription(description: string) {
    this.assetOtherdescription = description;
  }
  getFile(event: any) {
    this.assetOtherdocument = event.target.files[0];
    console.log('file', this.assetOtherdocument);
  }
  onAssetOtherCreate() {
    let form = new FormData();
    form.set('name', this.assetOthername);
    form.set('description', this.assetOtherdescription);
    form.set('document', this.assetOtherdocument);
    this.service.addOtherAssetRequest(form).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log('error'),
      complete: () => {
        alert('Your request has been sent Successfully!');
      },
    });
  }
}
