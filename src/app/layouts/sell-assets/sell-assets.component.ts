import { Component, OnInit } from '@angular/core';
import { AssetsOther } from 'src/app/interfaces/assets-other';
import { AssetsRealEstate } from 'src/app/interfaces/assets-real-estate';
import { AssetsVehicles } from 'src/app/interfaces/assets-vehicles';
import { UserAssetsService } from 'src/app/services/assets/user-assets.service';

@Component({
  selector: 'app-sell-assets',
  templateUrl: './sell-assets.component.html',
  styleUrls: ['./sell-assets.component.scss'],
})
export class SellAssetsComponent implements OnInit {
  assetsOthers: AssetsOther[] = [];
  assetsRealEstate: AssetsRealEstate[] = [];
  assetsVehicles: AssetsVehicles[] = [];
  userId: string = '';
  constructor(private assetService: UserAssetsService) {}
  ngOnInit(): void {
    this.allUserAssets();
  }

  async allUserAssets() {
    (await this.assetService.getAllUserAssets()).subscribe({
      next: (res: any) => console.log((this.assetsOthers = res['Other'])),
      error: (err: any) => {},
      complete: () => {},
    });
  }
}
//
