
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../core/http.service';
import { ContantService } from '../config/contant';
import { UtilsService } from '../core/utils.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  types: any[];

  products: any;

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
            this.products = [];
            this.types.forEach(type => {
              console.log(type.name);
              this.getProductByType(type);
            });
            console.log(this.products);
        }
      }
    } );
  }

  /**
   *
   * @param type 根据type查询产品
   */
  getProductByType(type){
    this.http.request({
      method: 'GET',
      url: this.contant.serveiceUrl + 'productinfo/perpage?page=0&size=4&categoryId='
      + type.id + '&orderfield=createtime',
    }).then(result => {
      if(result.status == 'success'){
        if(result.result.list.length>0){
            this.products.push({
              type : type,
              list: result.result.list
            });

        }
      }
    } );
  }

  viewImage(images){
    if(images != null && images != "" ){
      let imgs = images.split(",");
      return imgs[0];
    }else{
      return 'product-series1.jpg';
    }
  }

}
