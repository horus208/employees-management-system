import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";
import {CardsComponent} from "./cards/cards.component";

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  apiBaseUrl = environment.apiBaseUrl;

  constructor(private http:HttpClient) { }
  getTraces():Observable<any>
  {

    return this.http.get(`${this.apiBaseUrl}/httptrace`);


  }

  getCpuCount():Observable<any>
  {
    return this.http.get(`${this.apiBaseUrl}/metrics/system.cpu.count`);
  }
  getSystemHealth():Observable<any>
  {

    return this.http.get(`${this.apiBaseUrl}/health`);

  }
  getSystemUpTime():Observable<any>
  {

    return this.http.get(`${this.apiBaseUrl}/metrics/process.uptime`);

  }


}
