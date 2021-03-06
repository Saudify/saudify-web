import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class HttpService {

  private baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Mount request url.
   * @param path Request path.
   * @returns Full request url.
   */
  private getUrl(path: string): string {
    return `${this.baseUrl}${path}`;
  }

  /**
   * Execute GET request.
   * @param path Url path.
   * @param qs Querystring.
   * @returns Response JSON.
   */
  get(path: string, qs: any = null): Observable<any> {
    const url: string = this.getUrl(path);
    const params = (qs !== null) ? new HttpParams({ fromObject: qs }) : {};
    return this.http.get(url, { params });
  }
}
