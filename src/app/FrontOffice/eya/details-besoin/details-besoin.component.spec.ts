import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsBesoinComponent } from './details-besoin.component';

describe('DetailsBesoinComponent', () => {
  let component: DetailsBesoinComponent;
  let fixture: ComponentFixture<DetailsBesoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsBesoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsBesoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
