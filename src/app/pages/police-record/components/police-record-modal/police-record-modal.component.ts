import { Municipio } from './../../../../common/Models/Municipio/Municipio';
import {Component, ElementRef, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Bandit} from "../../shared/model/bandit";
import { DataValidator } from '../../../../common/Validators/DataValidator';
import { MunicipioService } from '../../../../common/services/IBGE/municipio.service';
import { Subscription } from 'rxjs';
import { MaritalStatus } from '../../../../common/Models/MaritalStatus/MaritalStatus';

@Component({
  selector: 'app-police-record-modal',
  templateUrl: './police-record-modal.component.html',
})
export class PoliceRecordModalComponent implements OnInit, OnDestroy{
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  municipios: Municipio[] = new Array<Municipio>();
  unsubscribe: Subscription[] = new Array<Subscription>();
  maritalStatus: MaritalStatus[] = [{id: 0, situation: 'Casado'}, {id: 1, situation: 'Solteiro'}, {id: 2, situation: 'Viúvo'}];
  criminalSituation: MaritalStatus[] = [{id: 0, situation: 'Foragido'}, {id: 1, situation: 'Procurado'}, {id: 2, situation: 'Preso'}, {id: 3, situation: 'Livre'}];

  resourceForm!: FormGroup;
  today = Date.now();

  @Input() bandit?:Bandit;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _ibgeService: MunicipioService,
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.loadCities();
  }

  buildForm(): void{
    this.resourceForm = this._fb.group({
      id: [this.bandit?.id ?? null],
      name: [this.bandit?.name ?? null, [Validators.required]],
      description: [this.bandit?.description ?? null, Validators.maxLength(255)],
      cpf: [this.bandit?.cpf ?? null, [
        Validators.required,
        Validators.pattern("^[0-9]+$"),
        Validators.maxLength(14)
      ]],
      birthday: [this.bandit?.birthday ?? null, [DataValidator.dateValidator]],
      phone: [this.bandit?.phone ?? null, [Validators.maxLength(12)]],
      email: [this.bandit?.email, [Validators.email]],
      surname: [this.bandit?.surname ?? null],
      height: [this.bandit?.height ?? null, [
        Validators.pattern("^[0-9]+$")
      ]],
      weight: [this.bandit?.weight ?? null, [
        Validators.pattern("^[0-9]+$")
      ]],
      nationality: [this.bandit?.nationality ?? "Brasileira"],
      naturalness: [this.bandit?.naturalness ?? null],
      maritalStatus: [this.bandit?.maritalStatus ?? null],
      criminalSituation: [this.bandit?.criminalSituation ?? null],
      orcrim: [this.bandit?.orcrim ?? null],
      crimeFunction: [this.bandit?.crimeFunction ?? null],
      profession: [this.bandit?.profession ?? null],
      whatsApp: [this.bandit?.whatsApp ?? null],
      pixEmail: [this.bandit?.pixEmail ?? null],
      pixPhone: [this.bandit?.pixPhone ?? null],
      pixCPF: [this.bandit?.pixCPF ?? null],
    });
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview.nativeElement.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  loadCities(): void {
    const sub = this._ibgeService.getAllMunicipios().subscribe((data: Municipio) => {
      this.municipios = data as Municipio[];
    });
    this.unsubscribe.push(sub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
