import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ContantService } from '../config/contant';

@Component({
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  culture: any;
  story: any;
  introduce: any;
  constructor(public http: HttpService, public contant: ContantService) {

  }
  ngOnInit() {
    this.getCulture();
    this.getBrandStory();
    this.getAboutMeablo();
  }

  /**
   * 美珀文化
   */
  getCulture(){
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'article/perpage?page=0&size=10&category=美珀文化&orderfield=createtime',
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.list.length>0){
            this.culture = result.result.list[0];

        }
      }
    } );
  }
  /**
   * 品牌故事
   */

  getBrandStory(){
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'article/perpage?page=0&size=10&category=品牌故事&orderfield=createtime',
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.list.length>0){
            this.story = result.result.list[0];

        }
      }
    } );
  }
  /**
   * 企业简介
   */
  getAboutMeablo(){
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'article/perpage?page=0&size=10&category=企业简介&orderfield=createtime',
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.list.length>0){
            this.introduce = result.result.list[0];
        }
      }
    } );
  }
  goTO(txt){
    $('.' + txt)[0].scrollIntoView();
  }
}
