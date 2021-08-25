import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovingRequestComponent } from './approving-request.component';

describe('ApprovingRequestComponent', () => {
  let component: ApprovingRequestComponent;
  let fixture: ComponentFixture<ApprovingRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovingRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovingRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
