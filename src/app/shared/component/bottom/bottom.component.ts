import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'mb-bottom',
  template: `
  <footer id="footer" class="footer" role="contentinfo">
  <nav class="footer-nav">
      <!-- 当前菜单时，a 添加 active 类 -->
      <a href="#/index" title="首页" class="active">首页</a>
      <a href="#/about" title="关于美珀">关于美珀</a>
      <a href="#/products" title="产品中心">产品中心</a>
      <a href="#/case" title="案例展示">案例展示</a>
      <a href="#" title="招商加盟">招商加盟</a>
      <a href="#/store" title="体验店风采">体验店风采</a>
      <a href="#/news" title="新闻动态">新闻动态</a>
      <a href="#/contact" title="联系我们">联系我们</a>
  </nav>
  <div class="intro">
      <img src="assets/images/footer-logo.png" alt="美珀门窗logo" class="footer-logo">
      <div class="other-info">
      <div class="copyright">四川美珀门窗有限公司 Copyright &copy; 版权所有 备案号：蜀ICP备 1234567890号</div>
      <div class="contact">
          <strong>联系电话：
              <a href="tel:4006570567" title="给我们打电话" class="phone">400-657-0567</a>
              <a href="tel:08385586655" title="给我们打电话" class="phone">0838-5586655</a>
          </strong>
          <strong>传真号码：0838-5196533</strong>
      </div>
      <div class="address">公司地址：四川省广汉高新区台中路东段</div>
  </div>
  <div class="contact-way">
      <a href="javascript: void(0)" title="扫描微信二维码" class="wechat">
          <i class="iconfont icon-wechat js-wechat-icon"></i>
          <div class="qrcode js-qrcode">
              <img src="assets/images/weixin-code.jpg" alt="微信二维码">
          </div>
      </a>
      <a href="#" title="访问新浪微博" class="weibo"><i class="iconfont icon-weibo"></i></a>
      <a href="#" title="通过QQ联系我们" class="qq"><i class="iconfont icon-qq"></i></a>
  </div>
  </div>
  <!--回到顶部-->
  <a class="to-top js-to-top" (click)="goToTop()" title="回到顶部">
      <i class="iconfont icon-up"></i>
  </a>
</footer>
`
})
export class BottomComponent implements OnInit {
  ngOnInit(){

  }
  goToTop(){
    $('#header')[0].scrollIntoView();
  }
}
