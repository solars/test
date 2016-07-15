import {Component} from '@angular/core';
import {Pipe, PipeTransform} from '@angular/core';
import {FileItem} from 'ng2-file-upload/components/file-upload/file-item';

export interface IDictionary {
     [index: string]: any;
}

// needed to convert dictionary into array
@Pipe({ name: 'keys',  pure: true})
export class KeysPipe implements PipeTransform {
  transform(value: any, args: any[] = null): any {
    return Object.keys(value);
  }
}

//@Pipe({ name: 'values',  pure: true})
//export class ValuesPipe implements PipeTransform {
  //transform(value: any, args: any[] = null): any {
      //return Object.keys(value).map(key => value[key]);
    //}
//}

@Component({
selector: 'item-detail',
  inputs: ['item', 'exifs'],
  pipes: [KeysPipe],
  template: `
  <br />
    <table>
    <tr *ngFor="#key of exifs[item?.file?.name] | keys">
    <td>
    {{key}}
    </td>
    <td>
    {{exifs[item?.file?.name][key]}}
    </td>
    </tr>
    </table>
  `
})

export class ItemDetail {
  public item: FileItem;
  private exifs: IDictionary;
}

