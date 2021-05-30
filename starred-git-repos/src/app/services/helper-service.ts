import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {
    // Get Number of days between today and parameter date 

    getDatesDifference(date_str) {
        let oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let date: any = new Date(date_str);
        let today: any = new Date();
        let diffDays = Math.round(Math.abs((today - date) / oneDay));
        return diffDays;

    }
}