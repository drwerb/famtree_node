import { Component, OnInit } from '@angular/core';

import { Member } from '../models/Member';
import { DataService } from '../data.service';

@Component({
  selector: 'app-family-members',
  templateUrl: './family-members.component.html',
  styleUrls: ['./family-members.component.css']
})
export class FamilyMembersComponent implements OnInit {
	members: Member[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
  	this.getMembers();
  }

  getMembers(): void {
  	this.dataService.getMembers()
  		.subscribe(members => this.members = members);
  }

  deleteMember(member): void {
  	this.dataService.deleteMember(member).subscribe();
  	this.members = this.members.filter(m => m != member);
  }

}
