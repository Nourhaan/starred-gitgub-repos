import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'app-trending-repos',
  templateUrl: './trending-repos.component.html',
  styleUrls: ['./trending-repos.component.css']
})


export class TrendingReposComponent implements OnInit {
  projects: any[] = [];
  p: number;
  itemsPerPage: number = 30;
  totalItems: any;

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getInitData();
  }

  getInitData() {
    this.apiService.getTrendRepos(0).subscribe(res => {
      this.projects = res.items;
      this.totalItems = res.total_count;
    });
  }

  getPage(page) {
    this.projects = [];
    this.apiService.getTrendRepos(page).subscribe(res => {
      this.projects = res.items;
      this.totalItems = res.total_count;
    });
  }
}


