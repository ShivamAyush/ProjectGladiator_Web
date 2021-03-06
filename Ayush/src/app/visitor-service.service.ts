import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { VisitorRegister } from "./register/visitor-register";
import { ReferenceNo } from "./reference-no";
import { Observable } from 'rxjs';
import { VisitorStatus } from './visitor-status/visitor-status';

@Injectable({
  providedIn: 'root'
})
export class VisitorServiceService {

  constructor(private http: HttpClient) { }

  addVisitor(visitor:VisitorRegister):Observable<VisitorStatus>
  {
    return this.http.post<VisitorStatus>("http://localhost:8080/registerVisitor",visitor);
  }

  checkVisitorStatus(ReferenceNumber: ReferenceNo):Observable<VisitorStatus>
  {
    return this.http.post<VisitorStatus>("http://localhost:8080/checkVisitorStatus",ReferenceNumber);
  }
}
