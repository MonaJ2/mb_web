import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

/*
功能: 导航
*/

@Component({
  selector: 'mb-nav',
  template: `
  <header id="header" role="banner" class="header home-header">
  <div class="heading-wrapper js-heading-wrapper">
      <div class="heading">
          <h2 class="header-logo js-header-logo"></h2>
          <div class="phone-menu">
              <div class="phone js-phone">加盟热线 <a href="tel:4006570567" title="给我们打电话">4006570567</a></div>
              <div class="header-nav" role="navigation">
                  <a routerLinkActive="active" routerLink="/home/index" href="#/about" title="关于美珀">关于美珀</a>
                  <a routerLinkActive="active" routerLink="#products" href="#/products" title="产品中心">产品中心</a>
                  <a routerLinkActive="active" href="#/case" title="案例中心">案例中心</a>
                  <a routerLinkActive="active" href="#" title="招商加盟">招商加盟</a>
                  <a routerLinkActive="active" href="#/store" title="体验店风采">体验店风采</a>
                  <a href="#/news" title="新闻动态">新闻动态</a>
                  <a routerLinkActive="active" href="#/contact" title="联系我们">联系我们</a>
              </div>
          </div>
      </div>
  </div>
</header>
`
})
export class NavigationComponent implements OnInit {

  ngOnInit(){}
}
