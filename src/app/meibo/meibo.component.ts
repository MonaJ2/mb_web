import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ContantService } from '../config/contant';
import { UtilsService } from '../core/utils.service';

@Component({
  templateUrl: './meibo.component.html',
  styleUrls: ['./meibo.component.css']
})
export class MeiboComponent implements OnInit {
  types: any[];

  constructor(public http: HttpService,
    public contant: ContantService,
    public util: UtilsService) {

  }
  ngOnInit() {
    this.getAllType();
  }
  /**
   * 获取种类
   */
  getAllType(){
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'categorys?type=product',
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.length>0){
            this.types = result.result;
        }
      }
    } );
  }

}
