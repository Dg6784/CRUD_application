import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ContactService } from '../contact.service';
import { Icontact } from '../models/Icontact';
// import { error } from '@angular/compiler/src/util';
import { Igroup } from '../models/Igroup';

@Component({
  selector: 'app-viewcontact',
  templateUrl: './viewcontact.component.html',
  styleUrls: ['./viewcontact.component.css']
})
export class ViewcontactComponent implements OnInit {
public loading: boolean = false;
public contactId: string | null = null;
public contact: Icontact = {} as Icontact;
public errorMessage: string | null = null;
public group:Igroup = {} as Igroup;
  contactService: any;


  constructor(private activatedRoute : ActivatedRoute, private ContactService: ContactService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.contactId = param.get('contactId');
    });
    if (this.contactId){
      this.loading = true;
      this.ContactService.getContact(this.contactId).subscribe((data:Icontact) =>{
        this.contact = data;
        this.loading = false;
        this.ContactService.getGroup(data).subscribe((data:Igroup)=>{
          this.group = data;
        });


      }, (error)=>{
        this.errorMessage = error;
        this.loading =  false;
        
         


      });
    }
  }
  public isNotEmpty() {
    return Object.keys(this.contact).length > 0 && Object.keys(this.group).length > 0;
  }
}
function data(data: any) {
  throw new Error('Function not implemented.');
}

