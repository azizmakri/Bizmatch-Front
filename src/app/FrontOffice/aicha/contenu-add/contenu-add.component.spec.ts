import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuADDComponent } from './contenu-add.component';

describe('ContenuADDComponent', () => {
  let component: ContenuADDComponent;
  let fixture: ComponentFixture<ContenuADDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuADDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenuADDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
