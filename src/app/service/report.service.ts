import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  public getReport(fromDate, toDate): any {
    return this.http.get('http://localhost:8081/report', {params: {fromDate, toDate}});
  }
}
