import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuDetailsComponent } from './contenu-details.component';

describe('ContenuDetailsComponent', () => {
  let component: ContenuDetailsComponent;
  let fixture: ComponentFixture<ContenuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
