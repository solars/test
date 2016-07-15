import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Headers, RequestOptions} from '@angular/http';

export interface IDictionary { [index: string]: any; }

@Injectable()
export class ExifService {
  constructor (private http: Http) {}

  private _exifUrl = 'http://localhost:4567/';

  fetchData (url: string) : Observable<IDictionary>  {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log(url);

    return this.http.post(this._exifUrl+"?url="+url, JSON.stringify({"url": url}) , options)
    .map(res => res.json())
    .do(data => console.log(data))
    .catch(this.handleError)
  }

  private handleError (error: Response) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
