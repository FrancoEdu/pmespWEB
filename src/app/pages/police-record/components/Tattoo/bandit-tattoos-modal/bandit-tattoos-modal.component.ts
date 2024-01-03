import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MessageService} from "primeng/api";
import {Tattoo} from "../shared/models/Tattoo";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-bandit-tattoos-modal',
  templateUrl: './bandit-tattoos-modal.component.html',
})
export class BanditTattoosModalComponent implements OnInit{
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;
  @Input() tattoo?: Tattoo;

  unsubscribe: Subscription[] = new Array<Subscription>();

  resourceForm!: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
    private readonly _messageService: MessageService
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void{
    this.resourceForm = this._fb.group({
      name: [this.tattoo?.name ?? null],
      description: [this.tattoo?.description ?? null, Validators.maxLength(255)],
      colored: [this.tattoo?.colored ?? false],
      bodyLocation: [this.tattoo?.bodyLocation ?? null]
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

  ngOnDestroy(): void {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
