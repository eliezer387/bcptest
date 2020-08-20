import { Component, OnInit } from '@angular/core';
import { ShareAgencyService } from '../../share-agency.service';
import agencias from '../../data/agencias.json';
import { IAgency } from '../../models/agency.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {
  isLoading = true;
  agencies = [];
  constructor(
    private agencyService: ShareAgencyService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 700);
    this.getStorageData();
  }

  setStorageData(): void {
    const agenciesData = JSON.stringify(agencias);
    localStorage.setItem('data', agenciesData);
  }

  getStorageData(): void {
    const data = localStorage.getItem('data');
    if (data) {
      const agencies = JSON.parse(data);
      agencies.forEach((item, i ) => { item.img = this.randomIcon(); } );
      this.agencies = agencies;
    } else {
      this.setStorageData();
      this.getStorageData();
    }
  }

  goDetails(agency: IAgency): void {
    this.agencyService.setAgency(agency);
    this.router.navigate(['/details']);
  }

  randomIcon(): string {
    const icons = ['suit-club', 'star', 'star-fill', 'heart', 'heart-fill', 'alt', 'calendar-month', 'file-person', 'shop', 'file-person-fill'];
    const iconName = icons[Math.floor(Math.random() * icons.length)];
    return `bootstrap-icons.svg#${iconName}`;
  }

}
