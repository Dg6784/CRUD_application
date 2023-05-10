import { Component, OnInit } from '@angular/core';
import { Icontact } from '../models/Icontact';
import { Igroup } from '../models/Igroup';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcontact',
  templateUrl: './addcontact.component.html',
  styleUrls: ['./addcontact.component.css']
})
export class AddcontactComponent implements OnInit {
  public loading: boolean = false;
  public contact: Icontact = {} as Icontact;
  public errorMessage: string | null = null;
  public group:Igroup = {} as Igroup;
  groups: Igroup[] = [];
  contactService: any;
  constructor(private ContactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.ContactService.getAllGroups().subscribe((data:Igroup[]) => {
      this.groups = data;

    },(error)=>{
      this.errorMessage = error;
    });
  }
 public createSubmit(){
  this.ContactService.createContact(this.contact).subscribe((data:Icontact) =>{
    this.router.navigate(['/manager']).then();
    });
  }
}
