import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Complaint } from './complaint/Complaint';
@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private http:HttpClient) { }

  addComplaint(complaint:Complaint)
  {
    return this.http.post('http://localhost:8080/complaint',complaint);
  }
}
