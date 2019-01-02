import { Injectable } from '@angular/core';
import { Specialty } from './specialty.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  constructor() { }

  getSpecialties(): Specialty[] {
    return [new Specialty('test', 25)];
  }
}
