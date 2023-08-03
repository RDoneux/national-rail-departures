import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationControllerComponent } from './notification-controller.component';

describe('NotificationControllerComponent', () => {
  let component: NotificationControllerComponent;
  let fixture: ComponentFixture<NotificationControllerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificationControllerComponent]
    });
    fixture = TestBed.createComponent(NotificationControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
