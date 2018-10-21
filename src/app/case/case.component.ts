import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ContantService } from '../config/contant';

@Component({
  templateUrl: './case.component.html'
})
export class CaseComponent implements OnInit {

  caseResult: any;
  currentPage = 1;
  constructor(public http: HttpService,
    public contant: ContantService ) {

  }
  ngOnInit() {
    this.queryCasePerPage(this.currentPage);
  }
  /**
   * 获取所有案例
   */
  queryCasePerPage(index){
    this.currentPage = index;
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'case/perpage?size=9&page=' + index,
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.list.length > 0){
            this.caseResult = result.result;
        }
      }
    } );
  }

}
