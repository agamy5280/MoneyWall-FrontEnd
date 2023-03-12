import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellRealEstateComponent } from './sell-real-estate.component';

describe('SellRealEstateComponent', () => {
  let component: SellRealEstateComponent;
  let fixture: ComponentFixture<SellRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellRealEstateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
