import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyAssetsComponent } from './buy-assets.component';

describe('BuyAssetsComponent', () => {
  let component: BuyAssetsComponent;
  let fixture: ComponentFixture<BuyAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
