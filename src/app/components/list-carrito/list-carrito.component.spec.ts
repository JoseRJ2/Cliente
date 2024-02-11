import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCarritoComponent } from './list-carrito.component';

describe('ListCarritoComponent', () => {
  let component: ListCarritoComponent;
  let fixture: ComponentFixture<ListCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListCarritoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
