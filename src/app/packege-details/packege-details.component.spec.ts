import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackegeDetailsComponent } from './packege-details.component';

describe('PackegeDetailsComponent', () => {
  let component: PackegeDetailsComponent;
  let fixture: ComponentFixture<PackegeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackegeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackegeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
