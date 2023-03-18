import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgRFormComponent } from './ag-rform.component';

describe('AgRFormComponent', () => {
  let component: AgRFormComponent;
  let fixture: ComponentFixture<AgRFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgRFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgRFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
