import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAgency } from './models/agency.model';

@Injectable({
  providedIn: 'root'
})
export class ShareAgencyService {
  private agency$ = new BehaviorSubject({} as IAgency);
  shareAgency = this.agency$.asObservable();
  constructor() { }

  setAgency(agency: IAgency): void {
    this.agency$.next(agency);
  }
}
