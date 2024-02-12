import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoAdminComponent } from './carrito-admin.component';

describe('CarritoAdminComponent', () => {
  let component: CarritoAdminComponent;
  let fixture: ComponentFixture<CarritoAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarritoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
