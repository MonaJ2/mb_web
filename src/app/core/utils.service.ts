import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }

  public goTO(txt) {
    $('.' + txt)[0].scrollIntoView();
  }
  public goTOId(id) {
    $('#' + id)[0].scrollIntoView();
  }
}
