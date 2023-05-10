import { Component, OnInit } from '@angular/core';
import { Icontact } from '../models/Icontact';
import { Igroup } from '../models/Igroup';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  public loading: boolean = false;
  public contactId: string | null = null;
  public contact: Icontact = {} as Icontact;
  public errorMessage: string | null = null;
  public groups: Igroup[] = [] as Igroup[];
  activatedRoute: any;
  ContactService: any;

  constructor(private ActivatedRoute:ActivatedRoute, private contactService: ContactService, private router: Router) { }

  ngOnInit(): void {
    this.ActivatedRoute.paramMap.subscribe((param:ParamMap)=>{
      this.contactId = param.get('contactId');
    });
    if(this.contactId){
      this.loading= true;
      this.contactService.getContact(this.contactId).subscribe((data:Icontact)=>{
        this.contact = data;
        this.contactService.getAllGroups().subscribe((data:Igroup[]) => {
          this.groups = data;
        });
      });
    }
  }

 public submitUpdate(){
   if(this.contactId){
    this.contactService.updateContact(this.contact, this.contactId).subscribe((data:Icontact) =>{
      this.router.navigate(['/manager']).then();
      });
   }
    
  }

}
