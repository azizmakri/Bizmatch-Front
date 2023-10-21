import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectifdetailsComponent } from './objectifdetails.component';

describe('ObjectifdetailsComponent', () => {
  let component: ObjectifdetailsComponent;
  let fixture: ComponentFixture<ObjectifdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectifdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjectifdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
