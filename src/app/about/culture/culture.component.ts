import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'mb-culture',
  templateUrl: './culture.component.html'
})
export class CultureComponent implements OnInit {
   @Input() article: any;
   @Input() enTitle: string;
   @Input() classCss: string;
  constructor( private sanitizer: DomSanitizer) {

  }
  ngOnInit() {
    if(this.article){
      this.article.content =  this.sanitizer.bypassSecurityTrustHtml(this.article.content);
      console.log(this.article)
    }
  }


}
