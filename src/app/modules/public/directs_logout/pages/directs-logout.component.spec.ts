import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectsLogoutComponent } from './directs-logout.component';

describe('DirectsLogoutComponent', () => {
  let component: DirectsLogoutComponent;
  let fixture: ComponentFixture<DirectsLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectsLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectsLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
