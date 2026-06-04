import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.model';
import { AppConfig } from './config';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = AppConfig.ngrokUrl;

  constructor(private http: HttpClient) {}

  searchItems(query: string = ''): Observable<Item[]> {
    const url = query.trim()
      ? `${this.baseUrl}/api/items?q=${encodeURIComponent(query.trim())}`
      : `${this.baseUrl}/api/items`;
    return this.http.get<Item[]>(url);
  }
}
