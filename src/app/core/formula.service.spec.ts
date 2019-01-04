import { TestBed } from '@angular/core/testing';

import { FormulaService } from './formula.service';

describe('FormulaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormulaService = TestBed.get(FormulaService);
    expect(service).toBeTruthy();
  });

  it('should compute proper value', () => {
    const service: FormulaService = TestBed.get(FormulaService);
    const result = service.compute(50, 35, 25, 2);
    expect(result).toEqual([17.5, 8.75]);
  });
});
