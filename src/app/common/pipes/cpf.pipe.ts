import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'cPF'
})
export class CPFPipe implements PipeTransform {
  transform(value: any): string {
    // Verifica se o valor é válido
    if (!value || value.length !== 11) {
      return 'CPF inválido';
    }

    // Formata o CPF
    return value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
  }
}
