import { Municipio } from './../../../../common/Models/Municipio/Municipio';
import {Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Bandit} from "../../shared/model/bandit";
import { DataValidator } from '../../../../common/Validators/DataValidator';
import { MunicipioService } from '../../../../common/services/IBGE/municipio.service';
import { Subscription } from 'rxjs';
import { MaritalStatus } from '../../../../common/Models/MaritalStatus/MaritalStatus';
import {BanditService} from "../../shared/service/bandit.service";
import {IBaseResponse} from "../../../../common/Models/IBase/IBaseResponse";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-police-record-modal',
  templateUrl: './police-record-modal.component.html',
})
export class PoliceRecordModalComponent implements OnInit, OnDestroy{
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;
  @Output() loadNewDataAgain: EventEmitter<any> = new EventEmitter<any>();

  municipios: Municipio[] = new Array<Municipio>();
  unsubscribe: Subscription[] = new Array<Subscription>();
  maritalStatus: MaritalStatus[] = [{id: 0, situation: 'Casado'}, {id: 1, situation: 'Solteiro'}, {id: 2, situation: 'Viúvo'}, {id: 3, situation: 'Divorciado'}, {id: 4, situation: 'Amasiado'}];
  criminalSituation: MaritalStatus[] = [{id: 0, situation: 'Foragido'}, {id: 1, situation: 'Procurado'}, {id: 2, situation: 'Preso'}, {id: 3, situation: 'Livre'}, {id: 4, situation: 'Egresso'}];

  resourceForm!: FormGroup;
  today: number = Date.now();

  @Input() bandit?:Bandit;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _ibgeService: MunicipioService,
    private readonly  _banditService: BanditService,
    private readonly _messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.buildForm();
    this.loadCities();
  }

  buildForm(): void{
    this.resourceForm = this._fb.group({
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
      orcrim: [this.bandit?.orcrim ?? null, Validators.maxLength(255)],
      crimeFunction: [this.bandit?.crimeFunction ?? null],
      profession: [this.bandit?.profession ?? null],
      whatsApp: [this.bandit?.whatsApp ?? null, [
        Validators.maxLength(12),
        Validators.pattern("^[0-9]+$")
      ]],
      pixEmail: [this.bandit?.pixEmail ?? null, [Validators.email]],
      pixPhone: [this.bandit?.pixPhone ?? null, [
        Validators.maxLength(12),
        Validators.pattern("^[0-9]+$")
      ]],
      pixCPF: [this.bandit?.pixCPF ?? null, [
        Validators.pattern("^[0-9]+$"),
        Validators.maxLength(14)
      ]],
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

  sendNewBandit(): void {
    const bandit = Object.assign({}, new Bandit(), this.resourceForm.value);
    const sub = this._banditService.post(bandit).subscribe((res: IBaseResponse) => {
      if(res.success){
        this._messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: `${res.message}`
        });
        this.resourceForm.reset();
        this.loadNewDataAgain.emit();
      }
    }, (error: Error) => {
      this._messageService.add({
        severity: 'error',
        summary: 'Erro',
        detail: `${error.message}`
      });
    });
    this.unsubscribe.push(sub);
  }

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
