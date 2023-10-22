import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBesionComponent } from './details-besion.component';

describe('DetailsBesionComponent', () => {
  let component: DetailsBesionComponent;
  let fixture: ComponentFixture<DetailsBesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
