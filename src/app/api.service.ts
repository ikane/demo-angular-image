import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HardwareFamily } from './HardwareFamily';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHardwareFamilies(): Observable<HardwareFamily[]> {
    /*
    return of([
      {id: 1, name: 'Vx', model: 'Vx', logo: null, typeMime: null},
      {id: 2, name: 'Engage', model: 'Engage', logo: null, typeMime: null},
      {id: 3, name: 'Ux', model: '520', logo: null, typeMime: null }
    ]);
    */
   return this.http.get<HardwareFamily[]>('http://localhost:8080/hardwareFamilies');
  }
}
