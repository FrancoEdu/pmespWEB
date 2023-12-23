import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-police-record-modal',
  templateUrl: './police-record-modal.component.html'
})
export class PoliceRecordModalComponent {
  @ViewChild('imagePreview') imagePreview!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

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
}
