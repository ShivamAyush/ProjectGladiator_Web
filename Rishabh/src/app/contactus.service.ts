import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact-us/ContactUs'
@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http:HttpClient) { }

  addContact(contact:Contact):Observable<string>
  {
    return this.http.post<string>('http://localhost:8080/contact',contact);
  }

}
