import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatailsMarcheComponent } from './datails-marche.component';

describe('DatailsMarcheComponent', () => {
  let component: DatailsMarcheComponent;
  let fixture: ComponentFixture<DatailsMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatailsMarcheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatailsMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
