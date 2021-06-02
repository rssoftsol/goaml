import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

  public getReport(fromDate, toDate) {
    return this.http.get<Response>("http://localhost:8081/report", {params: {fromDate: fromDate, toDate: toDate}});
  }
}
