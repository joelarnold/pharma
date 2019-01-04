import { Injectable } from '@angular/core';
import { Specialty } from './specialty.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  getSpecialties(): Specialty[] {
    return [new Specialty('test1', 25, 15), new Specialty('test2', 50, 20)];
  }
}
