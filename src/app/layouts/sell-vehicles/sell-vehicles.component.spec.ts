import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellVehiclesComponent } from './sell-vehicles.component';

describe('SellVehiclesComponent', () => {
  let component: SellVehiclesComponent;
  let fixture: ComponentFixture<SellVehiclesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellVehiclesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
