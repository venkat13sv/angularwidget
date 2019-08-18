import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import 'rxjs';


@Injectable()
export class CaseService  {
  private REST_API_BASE_PATH="http://localhost:3000";
  private findCases=this.REST_API_BASE_PATH + "/case/search";

  constructor(private _http: HttpClient) {

   console.log("Initializing ...");

 }

  getCases(searchObj:any){
    console.log("Inside Caasee");
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.findCases,JSON.stringify(searchObj),{headers:headers});
  }

}
