import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MajorAdminComponent } from './major-admin.component';

describe('MajorAdminComponent', () => {
  let component: MajorAdminComponent;
  let fixture: ComponentFixture<MajorAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MajorAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MajorAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
