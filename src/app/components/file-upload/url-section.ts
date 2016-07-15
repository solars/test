import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass, NgStyle} from '@angular/common';
import {FILE_UPLOAD_DIRECTIVES, FileUploader} from 'ng2-file-upload';
import {HTTP_PROVIDERS}    from '@angular/http';
import {ExifService}       from './exif.service';
import {Pipe, PipeTransform} from '@angular/core';

// const URL = '/api/';
const URL = 'http://localhost:9393/';

export interface IDictionary { [index: string]: any; }

// needed to convert dictionary into array
@Pipe({ name: 'keys',  pure: true})
export class KeysPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }
}

@Component({
  selector: 'url-section',
  templateUrl: './components/file-upload/url-section.html',
  directives: [FILE_UPLOAD_DIRECTIVES, NgClass, NgStyle, CORE_DIRECTIVES, FORM_DIRECTIVES],
  providers: [HTTP_PROVIDERS, ExifService],
  pipes: [KeysPipe]
})

export class UrlSection {
constructor (private _exifService: ExifService) {}

  errorMessage: string;
  private exifs: IDictionary ;

  addUrl(url: string) {
    if (!url) {return;}
    this._exifService.fetchData(url)
    .subscribe(
      exif_data => this.exifs = exif_data,
        error =>  this.errorMessage = <any>error);
  }

}
