import { Injectable } from '@angular/core';
import { Specialty } from './specialty.model';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyService {

  getSpecialties(): Specialty[] {
    return [
      new Specialty('Clindamycine 125mg/5ml', 25, 15),
      new Specialty('Clindamycine 250mg/5ml', 50, 20),
    ];
  }
}
