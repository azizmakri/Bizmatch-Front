import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisetServiceComponent } from './liset-service.component';

describe('LisetServiceComponent', () => {
  let component: LisetServiceComponent;
  let fixture: ComponentFixture<LisetServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LisetServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisetServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
