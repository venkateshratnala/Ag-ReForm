import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgrMainFormComponent } from './agr-main-form.component';

describe('AgrMainFormComponent', () => {
  let component: AgrMainFormComponent;
  let fixture: ComponentFixture<AgrMainFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgrMainFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgrMainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
