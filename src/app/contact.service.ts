import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Icontact } from './models/Icontact';
import { Igroup } from './models/Igroup';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  id: any;
  private serverUrl: string = 'http://localhost:3000';
  constructor(private httpClient :HttpClient).pipe(catchError(this.handleError));
}




public createContact(contact: Icontact): Observable<Icontact> {
  let dataURL: string = "http://localhost:3000/contacts";
  return this.httpClient.post<Icontact>(dataURL, contact).pipe(catchError(this.handleError));
}

public updateContact(contact: Icontact, contactId: string): Observable<Icontact> {
  // let dataURL: string = '${this.serverUrl}/contacts/${contactId}';
  let dataURL: string = "http://localhost:3000/contacts/"+contactId;    

  return this.httpClient.put<Icontact>(dataURL, contact).pipe(catchError(this.handleError));
}



// delete
public deleteContact(contactId: string): Observable<{}> {
  // let dataURL: string = '${this.serverUrl}/contacts/${contactId}';
  let dataURL: string = "http://localhost:3000/contacts/"+contactId;    

  return this.httpClient.delete<{}>(dataURL).pipe(catchError(this.handleError));
}
  

// get all groups

public getAllGroups(): Observable<Igroup[]>{
  let dataURL: string = "http://localhost:3000/groups";
  return this.httpClient.get<Igroup[]>(dataURL).pipe(catchError(this.handleError));
}


// get single group

public getGroup(contact: Icontact): Observable<Igroup>{
  // let dataURL: string = '${this.serverUrl}/groups/$(contact.groupId}';  
  let dataURL: string = "http://localhost:3000/groups/"+contact.groupId;          
  return this.httpClient.get<Igroup>(dataURL).pipe(catchError(this.handleError));
}










public handleError(error:HttpErrorResponse){
let errorMessage:string = '';
if(error.error instanceof ErrorEvent){
  errorMessage = 'Error : ${error.error.message}'
}
else{
  errorMessage = 'Status : ${error.status}\n Message: ${error.message}';
}
return throwError(errorMessage);
}


}
