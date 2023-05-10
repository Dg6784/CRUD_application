import { Component, OnInit } from '@angular/core';
import { Icontact } from '../models/Icontact';
import { ContactService } from '../contact.service';
import { AuthenticationService } from '../services/authentication.service';

// import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

public loading: boolean = false;
public contacts: Icontact[] = [];
public errorMessage: string | null = null;
searchText: any;

  constructor(private contactService: ContactService,public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.getAllContactsFromServer();

   
}


public getAllContactsFromServer(){
  this.loading = true;
  this.contactService.getAllContacts().subscribe((data:Icontact[]) => {
  this.contacts = data;
  this.loading = false;
  

  }, (error) => {
    this.errorMessage = error;
    this.loading = false;
  });
}

 public clickDeleteContact(contactId: string | undefined){
     if(contactId){
  this.contactService.deleteContact(contactId).subscribe((data: {})=>{
this.getAllContactsFromServer();
  })
}
 }

}







