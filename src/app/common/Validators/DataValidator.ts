import { AbstractControl } from "@angular/forms";

export class DataValidator{

  static dateValidator(control: AbstractControl): { [key: string]: any } | null {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate > currentDate) {
      return { 'futureDate': true }; // Indica um erro de data futura
    }
    return null; // Retorna nulo se a data for válida
  }
}
