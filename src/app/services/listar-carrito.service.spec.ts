import { TestBed } from '@angular/core/testing';

import { ListarCarritoService } from './listar-carrito.service';

describe('ListarCarritoService', () => {
  let service: ListarCarritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarCarritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
