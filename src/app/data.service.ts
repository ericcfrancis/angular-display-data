import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = 'https://api.data.gov.my/data-catalogue';

  //msic
  getMsicData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?id=msic&limit=30`);
  }

  // mcoicop
  getMcoicopData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}?id=mcoicop&limit=30`);
  }
  
  constructor(private http: HttpClient) { }
}
