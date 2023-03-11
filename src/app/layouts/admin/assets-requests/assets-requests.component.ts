import { Component } from '@angular/core';
import { UserAseets } from 'src/app/interfaces/user-aseets';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';

@Component({
  selector: 'app-assets-requests',
  templateUrl: './assets-requests.component.html',
  styleUrls: ['./assets-requests.component.scss'],
})
export class AssetsRequestsComponent {
  userAssets: UserAseets[] = [];
  constructor(private service: UserAssetsService) {}

  ngOnInit() {
    this.getUserAssets();
  }

  getUserAssets() {
    this.service.getUsersAssets().subscribe((userAssets: any) => {
      for (let i = 0; i < userAssets['userAssets'].length; i++) {
        if (userAssets['userAssets'][i]['status'] === 'pending') {
          this.userAssets.push(userAssets['userAssets'][i]);
        }
      }
    });
  }
}
