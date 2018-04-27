import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  /**
   * Base api url.
   */
  private baseUrl = 'https://localhost:3000/v1/';

  constructor(private http: HttpClient) { }

  /**
   * Mount request url.
   * @param uri Request uri.
   * @returns Full request url.
   */
  private getUrl(uri: string): string {
    return `${this.baseUrl}${uri}`;
  }

  get(uri: string) {
    const url: string = this.getUrl(uri);
    return this
      .http
      .get(url, {
        params: {}
      })
      .map((res: Response) => res.json());
  }
}
