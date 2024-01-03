import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Bandit} from "../../shared/model/bandit";
import {emit} from "@angular-devkit/build-angular/src/tools/esbuild/angular/compilation/parallel-worker";

@Component({
  selector: 'app-police-record-details-toolbar',
  templateUrl: './police-record-details-toolbar.component.html'
})
export class PoliceRecordDetailsToolbarComponent implements OnInit{
  @Input() bandit?: Bandit;
  @Output() changeTab: EventEmitter<number> = new EventEmitter<number>();


  tattooTab: boolean = false;
  RGsTab: boolean = false;
  addressesTab: boolean = false;
  phonesTab: boolean = false;
  familyTab: boolean = false;
  gunsTab: boolean = false;
  childsTab: boolean = false;
  motorsTab: boolean = false;
  CompanyAssociateTab: boolean = false;
  JobLocationTab: boolean = false;
  MomentsTab: boolean = false;
  FriendBanditsTab: boolean = false;
  socialMediaTab: boolean = false;
  pessoalSignalsTab: boolean = false;
  photosTab: boolean = false;

  ngOnInit(): void{
    this.tattooTab = true;
    this.changeTab.emit(0);
  }

  setTabTattooActive(): void{
    this.tattooTab = true;
    this.changeTab.emit(0);
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setTabRGsActive(): void{
    this.tattooTab = false;
    this.RGsTab = true;
    this.changeTab.emit(1);
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setTabAddressesActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = true;
    this.changeTab.emit(2);
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setPhoneTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = true;
    this.changeTab.emit(3);
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setFamilyTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = true;
    this.changeTab.emit(4);
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setGunsTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = true;
    this.changeTab.emit(5);
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setChildsTabActive():void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = true;
    this.changeTab.emit(6);
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setMotorsTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = true;
    this.changeTab.emit(7);
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setCompanyAssociateTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = true;
    this.changeTab.emit(8);
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setJobLocationTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = true;
    this.changeTab.emit(9);
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setMomentsTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = true;
    this.changeTab.emit(10);
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setFriendsBanditTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = true;
    this.changeTab.emit(11);
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setSocialMediaTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = true;
    this.changeTab.emit(12);
    this.pessoalSignalsTab = false;
    this.photosTab = false;
  }

  setPessoalSignalsTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = true;
    this.changeTab.emit(13);
    this.photosTab = false;
  }

  setPhotosTabActive(): void{
    this.tattooTab = false;
    this.RGsTab = false;
    this.addressesTab = false;
    this.phonesTab = false;
    this.familyTab = false;
    this.gunsTab = false;
    this.childsTab = false;
    this.motorsTab = false;
    this.CompanyAssociateTab = false;
    this.JobLocationTab = false;
    this.MomentsTab = false;
    this.FriendBanditsTab = false;
    this.socialMediaTab = false;
    this.pessoalSignalsTab = false;
    this.photosTab = true;
    this.changeTab.emit(14);
  }
}
