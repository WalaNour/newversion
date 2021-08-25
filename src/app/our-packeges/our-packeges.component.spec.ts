import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPackegesComponent } from './our-packeges.component';

describe('OurPackegesComponent', () => {
  let component: OurPackegesComponent;
  let fixture: ComponentFixture<OurPackegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurPackegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPackegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
