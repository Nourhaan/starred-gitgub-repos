import { environment } from '../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from './helper-service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private route: Router, private http: HttpClient, private helperService: HelperService) { }

  private setHeaders(): HttpHeaders {
    let headersConfig =
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new HttpHeaders(headersConfig);
  }
  private formatErrors(error: any) {
    console.error(error);
    return Observable.throw(error);
  }
  getTrendRepos(page): Observable<any> {
    let self = this;
    // we can set today's date but no returned data - to return last 30 days start counting from today
    return this.http.get(`${environment.api_url}/repositories?q=created:>2017-10-22&sort=stars&order=desc&page=${page}`, { headers: this.setHeaders() })
      .pipe(catchError(er => this.formatErrors(er)), map(res => {
        res['items'] = res['items'].map(function (item) {
          // To count time interval - difference between updated at date ann today's date 
          item['time_interval'] = self.helperService.getDatesDifference(item.updated_at);
          return item;
        })
        return res;
      }));
  }
}