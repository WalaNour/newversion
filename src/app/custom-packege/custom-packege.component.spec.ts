import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPackegeComponent } from './custom-packege.component';

describe('CustomPackegeComponent', () => {
  let component: CustomPackegeComponent;
  let fixture: ComponentFixture<CustomPackegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPackegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPackegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
