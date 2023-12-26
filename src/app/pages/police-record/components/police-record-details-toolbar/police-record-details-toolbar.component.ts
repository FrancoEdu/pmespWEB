import {Component, Input} from '@angular/core';
import {Bandit} from "../../shared/model/bandit";

@Component({
  selector: 'app-police-record-details-toolbar',
  templateUrl: './police-record-details-toolbar.component.html'
})
export class PoliceRecordDetailsToolbarComponent {
  @Input() bandit?: Bandit
}
