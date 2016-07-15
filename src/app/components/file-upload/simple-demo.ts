import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';

import {ItemDetail} from './item-detail.component';

const URL = 'http://localhost:4567/';

export interface IDictionary {
     [index: string]: any;
}

@Component({
  selector: 'simple-demo',
  //template: template,
  templateUrl: './components/file-upload/simple-demo.html',
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES, ItemDetail]
})

export class SimpleDemo {
  private uploader:FileUploader = new FileUploader({url: URL});
  private hasBaseDropZoneOver:boolean = false;
  private hasAnotherDropZoneOver:boolean = false;
  private exifs:IDictionary = {};

  constructor() {
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      var jsonResp = JSON.parse(response);
      this.exifs[item.file.name] = jsonResp;
      //console.log(responsePath);
      //console.log(response, responsePath);// the url will be in the response
      //console.log(item);// the url will be in the response
      //console.log(this.exifs);// the url will be in the response
      //console.log(status);// the url will be in the response
    };
  }

  private fileOverBase(e:any) {
    this.hasBaseDropZoneOver = e;
  }

  private fileOverAnother(e:any) {
    this.hasAnotherDropZoneOver = e;
  }
}
