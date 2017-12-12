import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Member } from '../models/Member'
import { DataService } from '../data.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  member: Member;

  constructor(
      private activatedRoute: ActivatedRoute,
      private dataService: DataService
      ) { }

  ngOnInit() {
      this.getMember();
  }

  getMember(): void {
      let memberId = +this.activatedRoute.snapshot.paramMap.get('id');
      this.dataService.getMember(memberId)
          .subscribe(
              m => this.innn(m)
           );
  }

  innn(m: Member): void {
      this.member = m;
  }

}
