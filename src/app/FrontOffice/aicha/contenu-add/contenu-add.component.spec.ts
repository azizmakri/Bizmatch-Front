import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenuAddComponent } from './contenu-add.component';

describe('ContenuAddComponent', () => {
  let component: ContenuAddComponent;
  let fixture: ComponentFixture<ContenuAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContenuAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContenuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
