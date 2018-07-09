import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { environment } from '../../environments/environment';
import { jsonpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: Http) { }

  getContacts(page: any, userId: any) {
    return this._http.get(environment.apiServer + 'GetContacts/' + userId + '?page=' + page)
      .toPromise()
      .then(res => res)
      .catch(this.handleError)

  }

  getContact(id: any) {
    return this._http.get(environment.apiServer + 'GetContact/' + id)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  getContactByName(id: any, name: string) {
    return this._http.get(environment.apiServer + 'GetContactByName/' + id + '/' + name)
      .toPromise()
      .then(res => res)
      .catch(this.handleError);
  }

  createContact(contact: any) {
    return this._http.post(environment.apiServer + 'CreateContact', contact)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  createNewPhone(phone: any) {
    return this._http.post(environment.apiServer + 'AddPhoneNumber', phone)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  updateContact(contact: any) {
    return this._http.put(environment.apiServer + 'UpdateContactInfo/' + contact.contactId, contact)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  updatePhone(phone: any) {
    return this._http.put(environment.apiServer + 'UpdatePhoneNumber/' + phone.phoneId, phone)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  addNewPhone(phone: any) {
    return this._http.post(environment.apiServer + 'AddPhoneNumber', phone)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  deleteContact(id: any) {
    return this._http.delete(environment.apiServer + 'DeleteContact/' + id)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError)
  }

  deletePhoneNumber(phone: any) {
    return this._http.delete(environment.apiServer + 'DeletePhone/' + phone.phoneId)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
