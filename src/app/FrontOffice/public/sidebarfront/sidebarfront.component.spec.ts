import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarfrontComponent } from './sidebarfront.component';

describe('SidebarfrontComponent', () => {
  let component: SidebarfrontComponent;
  let fixture: ComponentFixture<SidebarfrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarfrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarfrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
