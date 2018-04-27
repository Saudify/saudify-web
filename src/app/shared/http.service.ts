import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {
  private baseUrl: String = 'https://localhost:3000/v1/';

  constructor(private http: HttpClient) { }

  /**
   * Mount request url.
   * @param uri Request uri.
   * @returns Full request url.
   */
  private getUrl(uri: String): String {
    return `${this.baseUrl}${uri}`
  }

  get() {
    return [];
  }
}
