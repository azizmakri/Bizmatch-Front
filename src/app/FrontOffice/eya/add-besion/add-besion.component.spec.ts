import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBesionComponent } from './add-besion.component';

describe('AddBesionComponent', () => {
  let component: AddBesionComponent;
  let fixture: ComponentFixture<AddBesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
