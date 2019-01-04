import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  constructor() { }

  /**
   * Compute two values from the inputs: 1. the daily total amount to reach the target dose, 2. the volume per intake
   * @param mgPerMl the concentration of active substance per ml of solution
   * @param weight the patient's weight in kg
   * @param targetDose the target daily dose of the active substance
   * @param intakes the number of intakes per day
   */
  compute(mgPerMl: number, weight: number, targetDose: number, intakes: number): [number, number] {
    const dailyMl = this.round(weight * targetDose * (1 / mgPerMl), 2);
    const intakeMl = this.round(dailyMl / intakes, 2);
    return [dailyMl, intakeMl];
  }

  /**
   * Round a number
   * @param value the number to round
   * @param digits the number of digits to keep
   */
  round(value: number, digits: number): number {
    return Math.round(Math.pow(10, digits) * value) / Math.pow(10, digits);
  }
}
