import { Component, OnInit } from '@angular/core';
declare var BMap: any;

@Component({
  templateUrl: 'contact.component.html'
})
export class ContactComponent implements OnInit {


  constructor() {

  }
  ngOnInit() {

     // 百度地图API功能
     let baidumap = new BMap.Map("baidumap");    // 创建Map实例
     //  baidumap.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      //添加地图类型控件
      // baidumap.addControl(new BMap.MapTypeControl({
      //     mapTypes:[
      //         BMAP_NORMAL_MAP,
      //         BMAP_HYBRID_MAP
      //     ]}));
      baidumap.addControl(new BMap.NavigationControl());
      baidumap.centerAndZoom("成都",15);
      baidumap.enableScrollWheelZoom(true);
}

}
