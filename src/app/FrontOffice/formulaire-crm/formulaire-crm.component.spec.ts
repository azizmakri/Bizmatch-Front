import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireCrmComponent } from './formulaire-crm.component';

describe('FormulaireCrmComponent', () => {
  let component: FormulaireCrmComponent;
  let fixture: ComponentFixture<FormulaireCrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireCrmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireCrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
