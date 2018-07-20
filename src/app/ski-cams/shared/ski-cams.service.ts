import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { SkiCams } from './skicams.model';

@Injectable({
  providedIn: 'root'
})
export class SkiCamsService {
  private readonly baseUrl = 'https://makevoid-skicams.p.mashape.com/cams.json';
  // private headerUrl = {'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'};

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'X-Mashape-Key': 'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
    })
  };

  constructor(private httpClient: HttpClient) { }

  get(): Observable<SkiCams> {
    return this.httpClient.get<SkiCams>(`${this.baseUrl}`, this.httpOptions);
  }
}
