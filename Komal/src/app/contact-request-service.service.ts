import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {  ContactId} from "./contact-request/ContactId";


@Injectable({
  providedIn: 'root'
})
export class ContactRequestServiceService {

  constructor(private http:HttpClient) { }

  getContacts(){
    return this.http.get('http://localhost:8080/viewContacts');
  }

  updateStatus(contactId:ContactId){
    return this.http.post('http://localhost:8080/changeContactStatus',contactId);
  }
}
