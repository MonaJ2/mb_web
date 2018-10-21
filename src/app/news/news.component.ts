import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ContantService } from '../config/contant';

@Component({
  templateUrl: './news.component.html'
})
export class NewsComponent implements OnInit {

  news: any;
  trades: any;
  pageSize = 9;
  newCurentPage = 1;
  tradeCurentPage = 1;
  constructor(public http: HttpService, public contant: ContantService) {

  }
  ngOnInit() {
    this.getNews(this.newCurentPage);
    this.getTrades(this.tradeCurentPage);
  }
/**
   * 美珀新闻
   */
  getNews(pageIndex){
    this.newCurentPage = pageIndex;
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'article/perpage?page=' + pageIndex
      + '&size=' + this.tradeCurentPage + '&category=美珀新闻&orderfield=createtime',
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.list.length>0){
            this.trades = result.result;

        }
      }
    } );
  }

  /**
   * 行业动态
   */
  getTrades(pageIndex){
    this.tradeCurentPage = pageIndex;
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'article/perpage?page=' + pageIndex
      + '&size=' + this.tradeCurentPage + '&category=行业动态&orderfield=createtime',
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.list.length>0){
            this.news = result.result;

        }
      }
    } );
  }
}
