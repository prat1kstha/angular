import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdStoreComponent } from './pwd-store.component';

describe('PwdStoreComponent', () => {
  let component: PwdStoreComponent;
  let fixture: ComponentFixture<PwdStoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PwdStoreComponent]
    });
    fixture = TestBed.createComponent(PwdStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
