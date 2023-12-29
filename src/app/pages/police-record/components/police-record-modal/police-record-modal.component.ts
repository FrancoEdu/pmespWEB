import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Bandit} from "../../shared/model/bandit";
import { DataValidator } from '../../../../common/Validators/DataValidator';

@Component({
  selector: 'app-police-record-modal',
  templateUrl: './police-record-modal.component.html',
})
export class PoliceRecordModalComponent implements OnInit{
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  resourceForm!: FormGroup;
  today = Date.now();

  @Input() bandit?:Bandit;

  constructor(private _fb: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
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
      height: [this.bandit?.height ?? null],
      weight: [this.bandit?.weight ?? null]
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

  protected readonly name = name;
}
