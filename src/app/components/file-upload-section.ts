import { Component } from '@angular/core';

import {TAB_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';
import {SimpleDemo} from './file-upload/simple-demo';
import {UrlSection} from './file-upload/url-section';

@Component({
  selector: 'file-upload-section',
  template: `
  <section>
    <div class="row">
      <tabset>
      <tab heading="By URL">
        <div class="card card-block panel panel-default panel-body">
          <url-section></url-section>
        </div>
      </tab>
      <tab heading="By File Upload">
        <div class="card card-block panel panel-default panel-body">
          <simple-demo ></simple-demo>
        </div>
        </tab>
      </tabset>
    </div>

  </section>
  `,
  directives: [SimpleDemo, UrlSection, TAB_DIRECTIVES]
})
export class FileUploadSection {
  private currentHeading:string = 'Simple';

  private select(e:any) {
    if (e.heading) {
      this.currentHeading = e.heading;
    }
  }
}
